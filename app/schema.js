import React from 'react';
import TreeNodeComponent from './tree-node';

export default class SchemaComponent extends React.Component {
  render() {
    return <TreeNode node={this.props.tree}></TreeNode>;
  }
}
