'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'is a html ?';
    }

    return e(
      'div',
      { onClick: () => this.setState({ liked: true }) },
      'show'
    );
  }
}
const domContainer = document.querySelector('#react_view');
ReactDOM.render(e(LikeButton), domContainer);