import React, {Component} from 'react'
import AppHeader from "./components/AppHeader/AppHeader";
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/SearchPanel/SearchPanel';
import ItemAddForm from "./components/ItemAddForm/ItemAddForm";


import "./index.css"

class App extends Component {



  maxId = 10;

  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Todo smile'),

    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id)

      const before = todoData.slice(0, idx)
      const after = todoData.slice(idx + 1)

      const newArr = [...before, ...after]
      return {
        todoData: newArr
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createTodoItem(text)

    this.setState(({todoData}) => {
      const newArr = [ ...todoData, newItem]
      return {
        todoData: newArr
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({ todoData })=>{
      const idx = todoData.findIndex((el) => el.id === id)
      const oldItem = todoData[idx];
      const newItem = {...oldItem, done: !oldItem.done}

      const newArr = [...todoData.slice(0, idx),
                      newItem,
                      ...todoData.slice(idx + 1)]

      return {
        todoData: newArr
      }
    })
  }


  onToggleImportant = (id) => {
    console.log('toggleImportant', id)
  }

  render() {

    const countDone = this.state.todoData.filter((el)=> el.done).length;


    return (
      <div className="wrap">
        <AppHeader todo={1} done={countDone}/>
        <SearchPanel/>
        <TodoList todos={this.state.todoData}
                  onDeleted={this.deleteItem}
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant}/>
        <ItemAddForm onAddItem={this.addItem}/>
      </div>
    )
  }
}

export default App;