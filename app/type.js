import React from 'react';
import _ from 'lodash';

export default class TypeComponent extends React.Component {
  render() {
    if (this.props.type != null) {
      // type is an array of ["string", "null"]
      var allowNull = _.contains(this.props.type, "null")
      var types = ["boolean", "integer", "number", "string"];

      var htmlOut = types.map((type) => {
        var selected = _.contains(this.props.type, type)
        return <option value={type} selected={selected}>{type}</option>;
      })

      // TODO
      // need to support arrays, objects

      return (
        <div>
          <h5>Type:</h5>
          <select>{htmlOut}</select>
          <input type="checkbox" name="type" value="null" checked={ allowNull ? "checked" : "" }/>Allow nil?
        </div>
      );
    } else {
      return null;
    }
  }
}
