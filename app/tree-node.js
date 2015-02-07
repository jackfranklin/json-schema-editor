import React from 'react/addons';
import TypeComponent from './type';
import TitleComponent from './title';
import DescriptionComponent from './description';
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
        childProperties.push(<li key={name}><TreeNodeComponent node={node} /></li>);
      });
    }
    var cx = React.addons.classSet;

    var expandIconClasses = cx({
      'glyphicon': true,
      'expand-button': true,
      'glyphicon-minus': this.state.visible,
      'glyphicon-plus': !this.state.visible,
    });

    var childElementVisibility = cx({
      'children-nodes': true,
      'children-visible': this.state.visible,
      'children-hidden': !this.state.visible,
    })

    var toggleButton;
    if (this.props.node.properties) {
      toggleButton = <i onClick={this.toggle.bind(this)} className={expandIconClasses}></i>;
    } else {
      toggleButton = null;
    }

    return (
      <div>
        {toggleButton}
        <div className="panel panel-default node-content">
          <div className="panel-heading">
            <TitleComponent title={this.props.node.title}></TitleComponent>
          </div>
          <table className="table">
            <tr>
              <td className="name">description</td>
              <td className="val"><DescriptionComponent></DescriptionComponent></td>
              <td className="edit"><i className="glyphicon glyphicon-edit"></i></td>
            </tr>
            <tr>
              <td className="name">type</td>
              <td className="val">
                <TypeComponent type={this.props.node.type}></TypeComponent>
              </td>
              <td className="edit"><i className="glyphicon glyphicon-edit"></i></td>
            </tr>
          </table>
          <ul className={childElementVisibility}>
            {childProperties}
          </ul>
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

