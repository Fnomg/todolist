import React, {Component} from "react";

import "./ItemAddForm.css"

class ItemAddForm extends Component {

  state = {
    label: ''
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.label)
    this.setState({
      label: ''
    })
  }

  render() {

    const {onAddItem} = this.props

    return (
      <form className='item-add-form__wrap'
            onSubmit={this.onSubmit}
      >
        <input className="form-control"
               placeholder='add todo'
               onChange={this.onLabelChange}
               value={this.state.label}
        />
        <button className="btn btn-outline-secondary">
          <i className="fa fa-plus-square" aria-hidden="true"/>
        </button>
      </form>
    )
  }
}

export default ItemAddForm;