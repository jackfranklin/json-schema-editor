import React from 'react/addons';
import TypeComponent from './type';
import EditableComponent from './title';
import _ from 'lodash';

export default class TreeNodeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  render() {

    var cx = React.addons.classSet;

    var expandIconClasses = cx({
      'glyphicon': true,
      'expand-button': true,
      'hidden': !this.props.node.properties,
      'glyphicon-minus': this.state.visible,
      'glyphicon-plus': !this.state.visible,
    });

    var childElementVisibility = cx({
      'children-nodes': true,
      'children-visible': this.state.visible,
      'hidden': !this.state.visible,
    })

    var childProperties = [];
    var childHTML;
    if (this.props.node.properties != null) {
      _.forOwn(this.props.node.properties, (node, name) => {
        childProperties.push(<li key={name}><TreeNodeComponent node={node} /></li>);
      });
      childHTML = (<div className="child">
        <hr />
        <ul className={childElementVisibility}>
          {childProperties}
        </ul>
      </div>);
    }

    return (
      <div>
        <i onClick={this.toggle.bind(this)} className={expandIconClasses}></i>
        <div className="node-component panel panel-default node-content">
          <div className="panel-heading">
            {this.props.node.title}
          </div>
          <table className="table">
            <tr>
              <td className="name">desc:</td>
              <td className="val">
                <EditableComponent data={this.props.node.description}></EditableComponent>
              </td>
            </tr>
            <tr>
              <td className="name">type:</td>
              <td className="val">
                <EditableComponent data={this.props.node.type}></EditableComponent>
              </td>
            </tr>
          </table>
          {childHTML}
        </div>
      </div>
    );
  }

  toggle(evt) {
    this.setState({visible: !this.state.visible});
    evt.stopPropagation();
    evt.preventDefault();
  }

}

