import { Component } from 'react';
import shortId from 'shortid';
import Form from './Components/Form/Form';
import ContactList from './Components/ContactsList/ContactsList';
import Filter from './Components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  DeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contactId !== contact.id),
    }));
  };

  addContact = data => {
    const newContact = {
      id: shortId.generate(),
      name: data.name,
      number: data.number,
    };

    const getContactsName = this.state.contacts.map(contact =>
      contact.name.toLocaleLowerCase(),
    );

    const isAlreadyInContacts = getContactsName.includes(
      data.name.toLocaleLowerCase(),
    );

    if (isAlreadyInContacts) {
      alert(`${data.name} is already in contacts!`);
    } else {
      this.setState(prevState => {
        return {
          contacts: [newContact, ...prevState.contacts],
        };
      });
    }
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;

    if (nextContacts !== prevContacts) {
      localStorage.setItem('contacts', JSON.stringify(nextContacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.DeleteContact} />
      </div>
    );
  }
}
