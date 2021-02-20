import React from 'react';
import ItemStatusFilter from '../ItemStatusFilter/ItemStatusFilter'
import "./SearchPanel.css";


const SearchPanel = () => {
    return (
        <div className="d-flex">
            <input placeholder='type to search'></input>
            <ItemStatusFilter />
        </div>
    )
}

export default SearchPanel;