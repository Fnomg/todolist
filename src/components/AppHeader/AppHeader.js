import React from 'react';
import "./AppHeader.css";

const AppHeader = ({todo, done}) => {
    return (
        <div className="app-header__wrap">
            <h1>Todo List</h1>
            <span>{todo} more todo, {done} done</span>
        </div>
    )
}

export default AppHeader;