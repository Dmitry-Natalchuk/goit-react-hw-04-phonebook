import { nanoid } from "nanoid";
import {useState,useEffect} from "react"
import { Section } from "./Section/Section";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { ContactList } from "./ContactList/ContactList";
const KEY = "contactList"

export const App = () => {
  const [filter,setFilter] = useState("")
  const [contacts,setContacts] = useState(
    JSON.parse(localStorage.getItem(KEY)) ?? []
);

useEffect(() => {
  localStorage.setItem(KEY,JSON.stringify(contacts))
},[contacts])

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const findContact = contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert(`${name} is already in contact`)
      : setContacts(prevContacts => [newContact, ...prevContacts])
  };



const deleteContactItem = id => {
  setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id))
};

const changeContact = event => {
  setFilter(event.target.value)
}

const visibleUser = contacts.filter(contact =>
  contact.name.toLowerCase().includes(filter.toLowerCase())
);
  return (
    <>
  <Section title="Phonebook">
    <ContactForm onSubmit={addContact} />
      {contacts.length === 0 ? (null) :
        <Filter value={filter} 
        changeContact={changeContact} 
    />}
  </Section>
      {contacts.length === 0 ? (null) :
      <Section title = "Contacts">
        <ContactList contacts = {visibleUser} 
        onDeleteContact = {deleteContactItem}
        /> 
      </Section>
      }
      
    </>
  )
};
