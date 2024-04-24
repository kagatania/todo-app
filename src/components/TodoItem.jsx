

export default function TodoItem({timeStamp}) {

    return (
        
        <div className="bg-white p-2 flex justify-between mb-3 rounded">
            <div className="flex gap-2 justify-start">
                <input id="todo1" type="checkbox" />
                <div className="flex flex-col text-xs">
                    <div className="text-left">To do 1</div>
                    <div className="text-black-2">{timeStamp}</div>
                </div>
            </div>
            <div className="flex gap-2 justify-end">
                <button className="border-none text-black-2 bg-gray-1 px-2 py-1 cursor-pointer rounded hover:"><i className="fa fa-trash"></i></button>
                <button className="border-none text-black-2 bg-gray-1 px-2 py-1 cursor-pointer rounded"><i className="fa fa-pencil"></i></button>
            </div>

        </div>
    );
}

