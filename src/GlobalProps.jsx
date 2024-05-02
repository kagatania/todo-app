import { create } from "zustand";
import { toast } from "react-toastify";


const useStore = create((set,get) => ({
    todos: JSON.parse(localStorage.getItem('todos')) || [],
    filter: 'all',
    modalAddTaskVisible: false,
    modalUpdateVisible: false,
    addTodo: (todo) => {
      const newTodos = [...get().todos, todo];
      localStorage.setItem('todos', JSON.stringify(newTodos));
      set({todos: newTodos});
      toast.success("Task added successfully!!");
    },
    deleteTodo: (todoId) => {
      const newTodos = get().todos.filter(todo => todo.id !== todoId);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      set({todos: newTodos});
      toast.success("Task deleted successfully!!");
    },
    editTodo: (updatedTodo) => {
      const newTodos = get().todos.map(todo => todo.id === updatedTodo.id ? {...todo, ...updatedTodo} : todo);
      localStorage.setItem('todos', JSON.stringify(newTodos));
      set({todos: newTodos});
      toast.success("Task updated successfully!!");
    },
    toggleAddModal: () => set((state) => ({modalAddTaskVisible : !state.modalAddTaskVisible})),
    toggleUpdateModal: () => set((state) => ({modalUpdateVisible : !state.modalUpdateVisible})),
    setFilter: (filter) => set({ filter }) 
  }));

  export default useStore;