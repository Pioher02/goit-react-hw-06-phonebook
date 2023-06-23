import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { addContacts, deleteContact } from "../redux/contacts/slice";
import { updateFilter } from "../redux/filter/slice";
import Notiflix from 'notiflix';
//import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  //const [prevContacts, setPrevContacts] = useState(contacts);
  
  //Guarda contacto nuevo
  const saveContact = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    let validation = contacts.find(el =>
      el.name
        .toLocaleLowerCase()
        .includes(form.elements.name.value.toLocaleLowerCase())
    );
    if (validation === undefined) {
      dispatch (addContacts({name: form.elements.name.value, number: form.elements.number.value}));
      form.reset();
    } else {
      Notiflix.Notify.failure(validation.name + 'is already in contacts');
      form.reset();
    }
  };

  const filterContact = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  //Borrar contacto
  const handleDeleteContacts = id => {
    dispatch (deleteContact(id));
  };

  //Guardar en localStorage
  // useEffect(() => {
  //   const savedContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(savedContacts);

  //   if (parsedContacts !== null) {
  //     // setContacts(parsedContacts);
  //   } else {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //   } // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   if (contacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(contacts));
  //     setPrevContacts(contacts);
  //   }// eslint-disable-next-line
  // }, [contacts]);

  return (
    <>
      <ContactForm saveContact={saveContact}></ContactForm>
      <h1>Contacts</h1>
      <Filter filterContact={filterContact}></Filter>
      <ContactList
        contacts={contacts}
        filter={filter.value}
        deleteContact={handleDeleteContacts}
      />
    </>
  );
};

export default App;
