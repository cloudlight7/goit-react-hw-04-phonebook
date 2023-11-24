
import { useState, useEffect, } from 'react';
import ContactForm from './Form/CreateContacts'
import ContactList from './ContactList'
import { nanoid } from 'nanoid'
import Filter from './Filter'
import { Sections } from './SectionStyle'



export const App = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState(null)
  const addContact = (newContact) => {
    if (contacts.find(option => option.name === newContact.name)) {
      alert(`${newContact.name} is already in contact.`)
      return
    } else {
    const contactObj = {
      id:nanoid(),
      ...newContact
      }
      setContacts((prev) => {
        return [...prev, contactObj]
      })
      }
  }
  const delContact = (id) => {
    setContacts((prev) => {
        return prev.filter((el)=>el.id !==id)
      })
  }
  const filters = ({ target: { value } }) => {
    setFilter(contacts.filter(name => name.name.toLowerCase().includes(value.toLowerCase())))
  }
  useEffect(() => { 
    if (!!contacts.length) {
       localStorage.setItem('contacts', JSON.stringify(contacts))
    }
  }, [contacts])

useEffect(() => {
 const dataLocStor = JSON.parse(localStorage.getItem('contacts'));
  if (dataLocStor) {
      setContacts(dataLocStor)
    } 
}, [])
  return (
    <Sections>
  <h1>Phonebook</h1>
 <ContactForm addContact={addContact} />

        <h2>Contacts</h2>
        <Filter filter={filters} />
      <ContactList contacts={filter ?? contacts} delContact={delContact} />
</Sections>
  )
}
