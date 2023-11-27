
import { useState, useEffect } from 'react';
import ContactForm from './Form/CreateContacts'
import ContactList from './ContactList'
import { nanoid } from 'nanoid'
import Filter from './Filter'
import { Sections } from './SectionStyle'



export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts'))??[])
  const [filter, setFilter] = useState('')

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
    return setFilter(value)
  }
  useEffect(() => { 
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const getFindContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)) 
  }
  return (
    <Sections>
  <h1>Phonebook</h1>
 <ContactForm addContact={addContact} />

        <h2>Contacts</h2>
        <Filter filter={filters} />
      <ContactList contacts={getFindContact() ?? contacts} delContact={delContact} />
</Sections>
  )
}
