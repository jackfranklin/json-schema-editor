import React from 'react/addons';
import TypeComponent from './type';
import _ from 'lodash';

export default class TreeNodeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  render() {
    var childProperties = [];
    if (this.props.node.properties != null) {
      _.forOwn(this.props.node.properties, (node, name) => {
        childProperties.push(<li key={name}>{name}: <TreeNodeComponent node={node} /></li>);
      });
    }
    var cx = React.addons.classSet;

    var expandIconClasses = cx({
      'glyphicon': true,
      'glyphicon-minus': this.state.visible,
      'glyphicon-plus': !this.state.visible,
    });

    var childElementVisibility = cx({
      'children-visible': this.state.visible,
      'children-hidden': !this.state.visible,
    })

    return (
      <div>
        <h5>
          <i onClick={this.toggle.bind(this)} className={expandIconClasses}></i>
          <span>{this.props.node.title}</span>
        </h5>
        <p>Description: {this.props.node.description}</p>
        <TypeComponent type={this.props.node.type}></TypeComponent>
        <ul className={childElementVisibility}>
          {childProperties}
        </ul>
      </div>
    );
  }

  toggle(evt) {
    this.setState({visible: !this.state.visible});
    evt.stopPropagation();
    evt.preventDefault();
  }

}

