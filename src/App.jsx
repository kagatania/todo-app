import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import TodoHeader from './components/TodoHeader'
import AddButton from './components/AddButton'
import FilterDropDown from './components/FilterDropDown'
import TodoList from './components/TodoList'
import CustomModal from './components/Modal'


function App() {
  const [modalIsOpen, setIsOpen] = useState(false); //modal flips switch
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem('todos');
    return saveTodos ? JSON.parse(saveTodos) : []; 
  }); //adding todos state

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  
  const addTodo = (todo) => {
    setTodos([...todos, {...todo}]);
  }

  const editTodo = (updatedTodo) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? {...todo, ...updatedTodo} : todo))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='mx-5'>
      <TodoHeader/>
      <div className='mx-auto my-0 max-w-screen-md w-full'>
        <div className='action-bar flex items-center h-16 justify-between'>
          <AddButton onAddClick={() => openModal()} />
          <CustomModal isOpen={modalIsOpen} onRequestClose={() =>closeModal()} action={addTodo} headerText={"add todo"}/>
          <FilterDropDown/>
        </div>
        <TodoList todos={todos} onEdit={editTodo} onDelete={deleteTodo} onModalOpen={() => openModal()}/>
        
      </div>
    </div>
  );
}

export default App
