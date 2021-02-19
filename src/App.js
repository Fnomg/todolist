import React from 'react'
import AppHeader from "./components/AppHeader/AppHeader";
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/SearchPanel/SearchPanel';

const App = () => {

  const todoData = [
    {label: 'Drink Coffe', important: false, id: 1},
    {label: 'Make App Awesome', important: true, id: 2},
    {label: 'Eat meat', important: false, id: 3}
  ]

  return (
    <>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData}/>
    </>
  )
}

export default App;
