import React from 'react';
import RootComponent from './root';
import Events from './events';

var tree = {
  title: "hello world",
  description: "some schema description",
  properties: {
    customer: {
      title: "Customer",
      description: "Our beloved customers",
      properties: {
        name: {
          type: ["string"]
        }
      }
    }
  }
};

var events = new Events();

React.render(<RootComponent tree={tree} emitter={events} />, document.getElementById("app"));
