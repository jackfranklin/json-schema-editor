import React from 'react';
import TreeNodeComponent from './tree-node';

export default class SchemaComponent extends React.Component {
  render() {
    return <TreeNodeComponent node={this.props.tree}></TreeNodeComponent>;
  }
}
