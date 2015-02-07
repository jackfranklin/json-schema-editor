import React from 'react';
import RootComponent from './root';

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

React.render(<RootComponent tree={tree} />, document.getElementById("app"));
