import React from 'react'
import AppHeader from "./components/AppHeader/AppHeader";
import TodoList from './components/TodoList/TodoList';
import SearchPanel from './components/SearchPanel/SearchPanel';

const App = () => {
  return (
    <>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </>
  )
}

export default App;
