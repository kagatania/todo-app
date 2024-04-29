import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import TodoHeader from './components/TodoHeader'
import AddButton from './components/AddButton'
import FilterDropDown from './components/FilterSelection'
import TodoList from './components/TodoList'
import CustomModal from './components/Modal'
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import create from 'zustand';


function App() {
  const [modalIsOpen, setIsOpen] = useState(false); //modal flips switch
  const [todos, setTodos] = useState(() => {
    const saveTodos = localStorage.getItem('todos');
    return saveTodos ? JSON.parse(saveTodos) : [];
  }); //adding todos state
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // const useStore = create(set => ({
  //   todos: [],

  // }));

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const getFilteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.status === filter);
      case 'incomplete':
        return todos.filter(todo => todo.status === filter);
      default:
        return todos;
    }
  }

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo }]);
    toast.success("Task added successfully!!")
  }

  const editTodo = (updatedTodo) => {
    setTodos(todos.map(todo => todo.id === updatedTodo.id ? { ...todo, ...updatedTodo } : todo))
    toast.success("Task edited successfully")
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    toast.success("Task deleted successfully!!")
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='mx-5 min-h-svh'>
      <ToastContainer 
      position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce />
      <TodoHeader />
      <div className='mx-auto my-0 max-w-screen-md w-full'>
        <div className='action-bar flex items-center h-16 justify-between'>
          <AddButton onAddClick={() => openModal()} />
          <CustomModal isOpen={modalIsOpen} onRequestClose={() => closeModal()} action={addTodo} headerText={"add todo"}/>
          <FilterDropDown onFilterChange={handleFilterChange} />
        </div>
        <TodoList todos={getFilteredTodos()} onEdit={editTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App
