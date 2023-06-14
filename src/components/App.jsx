import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [prevContacts, setPrevContacts] = useState(contacts);
  const [filter, setFilter] = useState('');

  const saveContact = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;

    let validation = contacts.find(el =>
      el.name
        .toLocaleLowerCase()
        .includes(form.elements.name.value.toLocaleLowerCase())
    );
    if (validation === undefined) {
      setContacts([
        ...contacts,
        {
          id: nanoid(),
          name: form.elements.name.value,
          number: form.elements.number.value,
        },
      ]);
      form.reset();
    } else {
      Notiflix.Notify.failure(validation.name + 'is already in contacts');
      form.reset();
    }
  };

  const filterContact = e => {
    setFilter(e.currentTarget.value);
  };

  const handleDeleteContacts = id => {
    let updateContacts = contacts.filter(contact => contact.id !== id);
    setContacts(updateContacts);
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts !== null) {
      setContacts(parsedContacts);
    } else {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (contacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
      setPrevContacts(contacts);
    }// eslint-disable-next-line
  }, [contacts]);

  return (
    <>
      <ContactForm saveContact={saveContact}></ContactForm>
      <h1>Contacts</h1>
      <Filter filterContact={filterContact}></Filter>
      <ContactList
        contacts={contacts}
        filter={filter}
        deleteContact={handleDeleteContacts}
      />
    </>
  );
};

export default App;
