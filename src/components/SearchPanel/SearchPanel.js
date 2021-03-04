import React, {Component} from 'react'
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import "./SearchPanel.css";


class SearchPanel extends Component {

  state = {
    term: ''
  }

  onChangeTerm = (e) => {
    const term = e.target.value
    this.setState({
      term: term
    })
    this.props.onSearchItem(term)
  }

  render() {

    return (
      <div className="d-flex">
        <input placeholder='type to search'
               onChange={this.onChangeTerm}
               value={this.state.term}
        />
        <ItemStatusFilter />
      </div>
    )
  }
  }



export default SearchPanel;