import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import TodoHeader from './components/TodoHeader'
import AddButton from './components/AddButton'
import FilterDropDown from './components/FilterSelection'
import TodoList from './components/TodoList'
import CustomModal from './components/AddModal'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
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
          <AddButton/>
          <FilterDropDown/>
        </div>
        <TodoList/>
      </div>
    </div>
  );
}

export default App
