import React from 'react';
import _ from 'lodash';

export default class TreeNodeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  render() {
    var childProperties;
    if (this.props.node.properties != null) {
      childProperties = _.forOwn(this.props.node.properties, (node, name) => {
        return <li key={name}><TreeNodeComponent node={node} /></li>;
      });
    }

    var style = {};
    if (!this.state.visible) {
      style.display = "none";
    }
    return (
      <div>
        <h5 onClick={this.toggle}>
          {this.props.node.title}
        </h5>
        <p>{this.props.node.description}</p>
        <ul style={style}>
          {childProperties}
        </ul>
      </div>
    );
  }

  toggle() {
    this.setState({visible: !this.state.visible});
  }
}

