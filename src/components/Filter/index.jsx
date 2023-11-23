import {Input} from './FilterStyle'
const Filter = ({ filter }) => {
    //console.log(item);
    return (
        <>
            <p>Find contacts by name</p>
            <Input onChange={filter} placeholder="Search..."  name="filter" type="text"/>
            </>
    )
}
export default Filter