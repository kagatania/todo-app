import useStore from "../GlobalProps";
import TodoItem from "./TodoItem";


export default function TodoList() {

    const {todos, filter} = useStore(state => ({ todos: state.todos, filter: state.filter}));

    const getFilteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter(todo => todo.status === 'completed');
      case 'incomplete':
        return todos.filter(todo => todo.status === 'incomplete');
      default:
        return todos;
    }
  }

    const filteredTodos = getFilteredTodos();
    
    return (
        <div className="transform-none opacity-100 bg-bg-2 rounded-xl p-5  flex flex-col gap-3">
            { todos.length === 0 ? (
                <div className="capitalize bg-gray-2 rounded-lg text-base font-medium text-black-2 h-auto my-0 mx-auto px-1 py-3 text-center w-max">
                    no todos
                </div>
            ) : (
                filteredTodos.map(todo => (
                    <TodoItem key={todo.id} todo={todo}/>
                ))
            )}
        </div>
    );
}