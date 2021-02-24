import React, {Component} from 'react'

class ItemStatusFilter extends Component {

  render() {
    return (
      <div className="d-flex search-panel__wrap">
        <div className="btn-group">
          <button type="button" className="btn btn-outline-primary">All</button>
          <button type="button" className="btn btn-outline-primary">Active</button>
          <button type="button" className="btn btn-outline-primary">Done</button>
        </div>
      </div>
    )
  }
}


export default ItemStatusFilter;