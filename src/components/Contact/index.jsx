import {Element, Button,Text} from './ContactStyle'
const Contact = ({ item, delContact }) => {
    return (
        <Element><Text>{item.name}</Text> <Text>{item.number}</Text>
        <Button onClick={()=>delContact(item.id)} type="submit">Delete</Button>
        </Element>
    )
}
export default Contact