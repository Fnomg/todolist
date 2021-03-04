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
    ],
    term: ''
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

  toggleProperty = (arr, id, propName) => {
    const idx = arr.findIndex((el) => el.id === id)
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]}

    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
      ]
  }

  onToggleDone = (id) => {
    this.setState(({ todoData })=>{
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }


  onToggleImportant = (id) => {
    this.setState(({ todoData })=>{
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onSearchItem = (e) => {
    this.setState({
      term: e
    })
  }

  search = (items, term) => {
    if (!term){
      return items
    }
    return items.filter((item)=>{
      return item.label.indexOf(term) > -1
    })
  }


  render() {
    const { todoData, term } = this.state;
    const visibleData = this.search(todoData, term)
    const countDone = todoData.filter((el)=> el.done).length;
    const todoDone = todoData.length - countDone;


    return (
      <div className="wrap">
        <AppHeader todo={todoDone} done={countDone}/>
        <SearchPanel onSearchItem={this.onSearchItem}/>
        <TodoList todos={visibleData}
                  onDeleted={this.deleteItem}
                  onToggleDone={this.onToggleDone}
                  onToggleImportant={this.onToggleImportant}/>
        <ItemAddForm onAddItem={this.addItem}/>
      </div>
    )
  }
}

export default App;