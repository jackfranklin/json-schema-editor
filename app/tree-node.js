import React from 'react';

export default class TreeNodeComponent extends React.Component {
  getInitialState() {
  	return {
  		visible: true,
  	};
  }
  render() {
  	var childProperties;
  	if (this.props.node.properties != null) {
  		childProperties = this.props.node.properties.map((node, indx) => {
  			return <li key={index}><TreeNodeComponent
  		})
  	}

  	var style = {};
  	if (!this.state.visible) {
  		style.display = "none";
  	}
  	return (
	    <div>
	    	<h5 onClick={this.toggle}>
	    		{this.props.node.title}
	    	</h5>
	    	<p>{this.props.node.description}</p>
	    	<ul style={style}>
	    		{childProperties}
	    	</ul>
	    </div>
	);
  },
  toggle() {
  	this.setState({visible: !this.state.visible});
  }
}

