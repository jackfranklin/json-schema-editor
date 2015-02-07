import React from 'react';
import RootComponent from './root';
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

React.render(<RootComponent tree={tree} emitter={events} />, document.getElementById("app"));
