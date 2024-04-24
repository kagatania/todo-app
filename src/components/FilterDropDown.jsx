export default function FilterDropDown() {
    return (
        <select className="cursor-pointer w-36 p-3 bg-bg-3 text-black-2 border-none rounded-md">
            <option value={"all"}>All</option>
            <option value={"completed"}>Completed</option>
            <option value={"Incomplete"}>Incomplete</option>
        </select>
    );
}