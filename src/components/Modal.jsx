
import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { toast} from 'react-toastify';
import { overlay } from "three/examples/jsm/nodes/Nodes.js";

Modal.setAppElement('#root');

export default function CustomModal({ isOpen, onRequestClose, action, headerText, todo}) {

    const[title, setTitle] = useState('');
    const[status, setStatus] = useState('incomplete');
    

    useEffect(() => {
        if (todo) {
            setStatus(todo.status);
            setTitle(todo.title);
        }
    },[todo]);

    const timeAndDate = () => {
        const today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var ampm = h >= 12 ? 'pm' : 'am'
        h = h % 12;
        h = h ? h : 12;
        m = m < 10 ? '0'+ m : m 
        const strTime = h + ':' + m + ' ' + ampm + ', '  + today.toLocaleDateString()
        return  strTime;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title.trim()) {
            toast.error("Task cannot be empty!!");
            return;
        }
        
        action({
            id: todo?.id ? todo.id : Date.now(),
            title,
            status,
            timeStamp: todo?.timeStamp ? todo.timeStamp : timeAndDate()
        });
        setTitle('');
        setStatus('incomplete');
        onRequestClose();
    }

    const buttonText = headerText === "add todo"? "add task" : "update task"

    
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Modal on Request"
            closeTimeoutMS={200}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0,0,0,0.5)'
                },
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: '1px solid #ccc',
                    background: '#ecedf6',
                    overflow: 'auto',
                    WebkitOverflowScrolling: 'touch',
                    borderRadius: '5px',
                    outline: 'none',
                    padding: '20px',
                    width: '450px'
                }
            }}
        >
            <form >
                <div className="w-full max-w-4xl bg-bg-2">
                    <div className="px-2 py-2">
                        <div className="capitalize mb-4 font-bold text-black-1">
                            <h2>{headerText}</h2>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black-1 text-sm font-medium mb-2 capitalize" htmlFor="title">
                                title
                                <input 
                                id="title" 
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className="focus:ring-blue-500 focus:border-blue-500 shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight font-normal" 
                                type="text" 
                                />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black-1 text-sm font-medium mb-2 capitalize" htmlFor="status">
                                status
                                <select 
                                id="status" 
                                value={status}
                                onChange={e => setStatus(e.target.value)}
                                className="focus:ring-blue-500 focus:border-blue-500 capitalize shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 font-normal"
                                >
                                    <option value={"incomplete"} >incomplete</option>
                                    <option value={"completed"}>completed</option>
                                </select>
                            </label>
                        </div>
                        <div className="flex gap-3">  
                            <button
                                onClick={handleSubmit} 
                                className="capitalize bg-primaryPurple text-center text-white border-none rounded-md cursor-pointer font-medium text-base h-auto overflow-hidden px-5 py-2">
                                {buttonText}
                            </button>
                            <button className="capitalize bg-bg-3 text-black-1 border-none rounded-md cursor-pointer font-medium text-base h-auto overflow-hidden px-5 py-2" 
                            onClick={onRequestClose}
                            >close</button>
                        </div>
                    </div>
                </div>
            </form>
        </Modal>

    );
}