import { useState } from 'react'
import './App.css'
import './index.css'
import TodoHeader from './components/TodoHeader'
import AddButton from './components/AddButton'
import FilterDropDown from './components/FilterDropDown'
import TodoList from './components/TodoList'
import CustomModal from './components/Modal'
import { update } from 'three/examples/jsm/libs/tween.module.js'


function App() {
  const [modalIsOpen, setIsOpen] = useState(false); //modal flips switch
  const [todos, setTodos] = useState([]); //addiung todos state

  function getDateAndTime() {
    const today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var ampm = h >= 12 ? 'pm' : 'am'
    h = h % 12;
    h = h ? h :12;
    m = m < 10 ? '0'+ m : m 
    const strTime = h + ':' + m + ' ' + ampm + ', '  + today.toLocaleDateString()
    return  strTime;
  }

  const addTodo = (todo) => {
    setTodos([...todos, {...todo, id: Date.now()}]);
  }

  const editTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, ...updatedTodo} : todo))
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className='mx-5'>
      <TodoHeader/>
      <div className='main-content mx-auto my-0 max-w-screen-md w-full'>
        <div className='action-bar flex items-center h-16 justify-between'>
          <AddButton onAddClick={openModal} />
          <CustomModal isOpen={modalIsOpen} onRequestClose={closeModal} />
          <FilterDropDown/>
        </div>
        <TodoList timeStamp={getDateAndTime()}/>
        
      </div>
    </div>
  );
}

export default App
