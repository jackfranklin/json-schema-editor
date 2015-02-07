import React from 'react';

export default class DescriptionComponent extends React.Component {
  render() {
    if (this.props.description != null) {
      return (
        <div>
          <div>{this.props.description}</div>
        </div>
      );
    } else {
      return null;
    }
  }
}
