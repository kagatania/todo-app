import useStore from "../GlobalProps";
import AddModal from "./AddModal";


export default function AddButton() {

    const toggleAddModal = useStore((state) => state.toggleAddModal);

    return (
    <>
        <button className="capitalize overflow-hidden inline-block bg-primaryPurple font-medium text-xl text-white border-none rounded-md h-auto cursor-pointer px-5 py-2"
            type="button"
            onClick={toggleAddModal}
        >add task</button>
        <AddModal/>
    </>
    );
}