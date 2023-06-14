import propTypes from 'prop-types';

function ContactList({ contacts, filter, deleteContact }) {
  if (filter !== '') {
    let newContacts = contacts.filter(el =>
      el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );

    return (
      <ul>
        {newContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button
              onClick={() => deleteContact(contact.id)}
              style={{
                marginLeft: 10,
                backgroundColor: 'white',
                borderRadius: 5,
                border: 'none',
                boxShadow: '-1px 1px 3px -1px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id} style={{ marginBottom: 10 }}>
          {contact.name}: {contact.number}
          <button
            onClick={() => deleteContact(contact.id)}
            style={{
              marginLeft: 10,
              backgroundColor: 'white',
              borderRadius: 5,
              border: 'none',
              boxShadow: '-1px 1px 3px -1px',
              cursor: 'pointer',
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: propTypes.array.isRequired,
  filter: propTypes.string,
  deleteContact: propTypes.func,
};

export default ContactList;
