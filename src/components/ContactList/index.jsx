//import { data} from './BoxButtonStyle'
import Contact from '../Contact'
const FeedbackOptions = ({ contacts, delContact }) => {
   // console.log(contacts);
    return (<ul>
        {contacts.map(item => {
       // console.log(item.name);
                    return (
                        <Contact key={item.id} item={item} delContact={delContact}/>
            )
        })}
    </ul>)
}
export default FeedbackOptions