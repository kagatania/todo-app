import { toast } from "react-toastify";
import useStore from "../GlobalProps";
import UpdateModal from "./UpdateModal";

export default function TodoItem({todo}) {

    // const [isEditModalOpen, setEditModalOpen] = useState(false);
    const deleteTodo = useStore(state => state.deleteTodo);
    const editTodo = useStore(state => state.editTodo);
    const toggleUpdateModal = useStore(state => state.toggleUpdateModal)
    
    //TODO: update the checkbox when todo item is recieved
    return (
        
        <div className="bg-white p-2 flex justify-between rounded">
            <div className="flex gap-2 justify-start">
                <input 
                id="statusBox" 
                type="checkbox"
                checked={todo.status === "completed"? true : false} 
                onChange={() => editTodo({...todo, status: todo.status === "completed"? "incomplete" : "completed"})}
                />
                <div className="flex flex-col text-xs">
                    <div className={"text-left " + `${todo.status === "completed" ? "line-through opacity-70" : "" }`}>{todo.title}</div>
                    <div className="text-black-2 text-left uppercase">{todo.timeStamp}</div>
                </div>
            </div>
            <div className="flex gap-2 justify-end">
                <button 
                onClick={() => deleteTodo(todo.id)}
                className="border-none text-black-2 bg-gray-1 px-2 py-1 cursor-pointer rounded hover:"><i className="fa fa-trash"></i></button>
                <button 
                onClick={toggleUpdateModal}
                className="border-none text-black-2 bg-gray-1 px-2 py-1 cursor-pointer rounded"><i className="fa fa-pencil"></i></button>
                <UpdateModal todo={todo}/>
            </div>
        </div>
    );
}

