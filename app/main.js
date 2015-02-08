import React from 'react';
import SchemaComponent from './schema';
import Events from './events';

var tree = {
  title: "hello world",
  description: "some schema description",
  properties: {
    customer: {
      title: "Customer",
      description: "Customer objects hold details for a customer",
      properties: {
        name: {
          description: "The customer's name",
          type: ["string", "null"]
        },
        country_code: {
          description: "Country code.",
          enum: [
            "GB"
          ]
        },
      }
    }
  }
};

var events = new Events();

var setTree = (tree) => {
  console.log("main set tree");
}

React.render(<SchemaComponent node={tree} setNode={setTree} emitter={events} />, document.getElementById("app"));
