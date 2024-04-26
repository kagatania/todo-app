export default function AddButton({onAddClick}) {
    return (
        <button className="capitalize overflow-hidden inline-block bg-primaryPurple font-medium text-xl text-white border-none rounded-md h-auto cursor-pointer px-5 py-2"
       type="button" 
       onClick={onAddClick}
        >add task</button>
    );
}