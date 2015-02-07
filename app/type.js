import React from 'react';
import _ from 'lodash';

export default class TypeComponent extends React.Component {
  renderType() {

  }

  renderEnum() {

  }

  render() {
    if (this.props.type != null) {
      // type is an array of ["string", "null"]
      var allowNull = _.contains(this.props.type, "null")
      var types = ["boolean", "integer", "number", "string"];

      var htmlOut = types.map((type) => {
        return <option key={type} value={type}>{type}</option>;
      })

      // TODO
      // need to support arrays, objects

      return (
        <div>
          <div>
            <select value={this.props.out}>{htmlOut}</select>
            <input type="checkbox" name="type" value="null" checked={ allowNull ? "checked" : "" }/>
            Allow nil?
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
