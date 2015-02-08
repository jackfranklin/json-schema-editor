import React from 'react';
import _ from 'lodash';

export default class TypeComponent extends React.Component {
  renderType() {

  }

  renderEnum() {

  }

  render() {
    if (this.props.node && (this.props.node.type || this.props.node.enum)) {
      var types = ["boolean", "integer", "number", "string"];
      var enumTypes = ["date-time", "date", "email", "hostname", "ipv4", "ipv6", "regex", "uri", "uuid"];

      var allowNull = _.contains(this.props.node.type, "null");
      var currentType = _.chain(this.props.node.type).filter((t) => { return t != "null"; }).first().value();

      var typeSelect = types.map((type) => {
        return <option key={type} value={type}>{type}</option>;
      })

      // TODO
      // need to support arrays, objects

      return (
        <div>
          <div>
            <select defaultValue={ currentType }>{typeSelect}</select>
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
