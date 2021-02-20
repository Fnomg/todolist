import React, { Component } from 'react'
import AppHeader from "./components/AppHeader/AppHeader";
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/SearchPanel/SearchPanel';

import "./index.css"

class App extends Component {

    state = {
        todoData : [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make App Awesome', important: true, id: 2},
            {label: 'Eat meat', important: false, id: 3}
        ]
    }

    deleteItem = (id)=> {
        this.setState(({ todoData })=> {
            const idx = todoData.findIndex((el)=>el.id === id)

            const before = todoData.slice(0, idx)
            const after = todoData.slice(idx+1)

            const newArr = [...before, ...after]
            return {
                todoData: newArr
            }
        })
    }

    render() {
        return (
            <div className="wrap">
                <AppHeader todo={1} done={3}/>
                <SearchPanel />
                <TodoList todos={this.state.todoData} onDeleted={ this.deleteItem }/>
            </div>
        )
    }
}

export default App;