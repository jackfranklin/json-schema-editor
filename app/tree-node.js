import React from 'react';
import TypeComponent from './type';
import _ from 'lodash';

export default class TreeNodeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  render() {
    var childProperties = [];
    if (this.props.node.properties != null) {
      _.forOwn(this.props.node.properties, (node, name) => {
        childProperties.push(<li key={name}>{name}: <TreeNodeComponent node={node} /></li>);
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
        <p>Description: {this.props.node.description}</p>
        <TypeComponent type={this.props.node.type}></TypeComponent>

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

