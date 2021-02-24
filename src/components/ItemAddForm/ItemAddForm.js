import React, {Component} from "react";

import "./ItemAddForm.css"

class ItemAddForm extends Component {

  render() {

    const {onAddItem} = this.props

    return (
      <div className='item-add-form__wrap'>
        <input placeholder='add todo'/>
        <button type="button" className="btn btn-outline-secondary" onClick={() => onAddItem('Hello world')}>
          <i className="fa fa-plus-square" aria-hidden="true"/>
        </button>
      </div>
    )
  }
}

export default ItemAddForm;