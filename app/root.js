import React from 'react';
import SchemaComponent from './schema';

export default class RootComponent extends React.Component {
  render() {
    return (
      <SchemaComponent tree={this.props.tree}
                       emitter={this.props.emitter}>
      </SchemaComponent>
    );
  }
}

