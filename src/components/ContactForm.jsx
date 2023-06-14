import propTypes from 'prop-types';

const ContactForm = ({ saveContact }) => {
  return (
    <>
      <h1>Phonebook</h1>
      <form
        onSubmit={saveContact}
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 400,
          padding: 10,
          gap: 10,
          border: '1px solid black',
        }}
      >
        <label htmlFor="name" style={{ fontSize: 20 }}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          style={{ width: 150, marginBottom: 10 }}
        />
        <label htmlFor="number" style={{ fontSize: 20 }}>
          Number
        </label>
        <input
          type="tel"
          id="number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          style={{ width: 150, marginBottom: 10 }}
        />
        <button
          type="submit"
          style={{
            width: 100,
            backgroundColor: 'white',
            borderRadius: 5,
            border: 'none',
            boxShadow: '-1px 1px 3px -1px',
            cursor: 'pointer',
          }}
        >
          Add contact
        </button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  saveContact: propTypes.func.isRequired,
};

export default ContactForm;
