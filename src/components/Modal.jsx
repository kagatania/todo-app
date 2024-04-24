
import React, { useState } from "react";
import Modal from 'react-modal';
import { overlay } from "three/examples/jsm/nodes/Nodes.js";

Modal.setAppElement('#root');



export default function CustomModal({ isOpen, onRequestClose,addTodo }) {

    const[title, setTitle] = useState('');
    const[status, setStatus] = useState('incomplete');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!title.trim()) return;
        addTodo({
            title,
            status,
            timeStamp: new Date().toLocaleString()
        });
        setTitle('');
        setStatus('incomplete');
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Create Task"
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
            <form onSubmit={handleSubmit}>
                <div className="w-full max-w-4xl bg-bg-2">
                    <div className="px-2 py-2">
                        <div className="capitalize mb-4 font-bold text-black-1">
                            <h2>add todo</h2>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black-1 text-sm font-medium mb-2 capitalize" for="title">
                                title
                                <input 
                                id="title" 
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                className="focus:ring-blue-500 focus:border-blue-500 shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight" type="text" />
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="block text-black-1 text-sm font-medium mb-2 capitalize" for="status">
                                status
                                <select 
                                id="status" 
                                value={status}
                                onChange={e => setStatus(e.target.value)}
                                className="focus:ring-blue-500 focus:border-blue-500 capitalize shadow border rounded w-full py-2 px-3 text-gray-700 mb-3 font-normal">
                                    <option selected value={"incomplete"} >incomplete</option>
                                    <option value={"completed"}>completed</option>
                                </select>
                            </label>
                        </div>
                        <div className="flex gap-3">                            
                            <button className="capitalize bg-primaryPurple text-center text-white border-none rounded-md cursor-pointer font-medium text-base h-auto overflow-hidden px-5 py-2">
                                add task</button>
                            <button className="capitalize bg-bg-3 text-black-1 border-none rounded-md cursor-pointer font-medium text-base h-auto overflow-hidden px-5 py-2" onClick={onRequestClose}>close</button>
                        </div>

                    </div>
                </div>
            </form>


        </Modal>

    );
}