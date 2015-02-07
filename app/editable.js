import React from 'react/addons';

export default class EditableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  switchEditContext(evt) {
    this.state.isEditing = !this.state.isEditing;
    evt.stopPropogation();
  }

  render() {
    var cx = React.addons.classSet;

    var editingInputClasses = cx({
      'is-editing': !this.state.visible,
    });

    var editingIconClasses = cx({
      'glyphicon': true,
      'glyphicon-edit': !this.state.isEditing,
      'glyphicon-check': this.state.isEditing,
    })

    if (this.props.data == null)
      return null;

    return (
      <div>
        <input className={editingInputClasses} readOnly={this.state.isEditing} type="text" value={this.props.data} />
        <i onClick={this.switchEditContext.bind(this)} className={editingIconClasses}></i>
      </div>
    );
  }
}
