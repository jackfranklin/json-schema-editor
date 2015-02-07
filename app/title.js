import React from 'react/addons';

export default class TitleComponent extends React.Component {
  render() {
    var output = null;
    if (this.props.title) {
      output = <span>{this.props.title}</span>;
    }

    return output;
  }
}
