import { toast } from "react-toastify";
import CustomModal from "./Modal";
import { useState } from "react";

export default function TodoItem({todo, onDelete, onEdit}) {

    const [isEditModalOpen, setEditModalOpen] = useState(false);
    
    //TODO: update the checkbox when todo item is recieved
    return (
        
        <div className="bg-white p-2 flex justify-between rounded">
            <div className="flex gap-2 justify-start">
                <input 
                id="statusBox" 
                type="checkbox"
                checked={todo.status === "completed"? true : false} 
                onChange={() => onEdit({...todo, status: todo.status === "completed"? "incomplete" : "completed"})}
                />
                <div className="flex flex-col text-xs">
                    <div className={"text-left " + `${todo.status === "completed" ? "line-through" : "" }`}>{todo.title}</div>
                    <div className="text-black-2 text-left uppercase">{todo.timeStamp}</div>
                </div>
            </div>
            <div className="flex gap-2 justify-end">
                <button 
                onClick={() => onDelete(todo.id)}
                className="border-none text-black-2 bg-gray-1 px-2 py-1 cursor-pointer rounded hover:"><i className="fa fa-trash"></i></button>
                <button 
                onClick={() => setEditModalOpen(true)}
                className="border-none text-black-2 bg-gray-1 px-2 py-1 cursor-pointer rounded"><i className="fa fa-pencil"></i></button>
                <CustomModal isOpen={isEditModalOpen} action={onEdit} onRequestClose={() => setEditModalOpen(false)} headerText="update todo" todo={todo} actionMessage={"Task updated successfully"}/>
            </div>
        </div>
    );
}

