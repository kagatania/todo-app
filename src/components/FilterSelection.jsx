import useStore from "../GlobalProps";

export default function FilterDropDown() {

    const setFilter = useStore(state => state.setFilter);
    
    return (<select
        className="capitalize cursor-pointer w-36 p-3 bg-bg-3 text-black-2 border-none rounded-md"
        onChange={(e) => setFilter(e.target.value)}
        defaultValue={'all'}
    >
        <option value={'all'}>all</option>
        <option value={'completed'}>completed</option>
        <option value={'incomplete'}>incomplete</option>
    </select>);
}