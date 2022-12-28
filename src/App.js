import { useEffect, useState, } from 'react';
import {
  Routes,
  Route,
  
} from 'react-router-dom';

import * as contactsService from './services/contactsService';

import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Search } from './components/search/Search';
import { SignIn } from './components/common/SignIn';
import { SignUp } from './components/common/SignUp';
import { ContactsList } from './components/contacts-list/ContactsList';
import { ContactDetails } from './components/contacts-list/contact-details/ContactDetails';
import { ContactsAction } from './components/contacts-list/ContactsListConstants';
import { ContactAdd } from './components/contacts-list/contact-add/ContactAdd';
import { ContactEdit } from './components/contacts-list/contact-edit/ContactEdit';
import { ContactDelete } from './components/contacts-list/contact-delete/ContactDelete';
import './App.css';

function App() {

  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    contactsService.get_all()
      .then((result) => {
        setContacts(result.results);
      });
  }, []);


  const [contactAction, setContactAction] = useState({ contact: null, action: null });

  const CloseHandler = () => {
    setContactAction({ contact: null, action: null });
  }

  const ContactAddHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {
      firstName,
      lastName,
      email,
      imageUrl,
      phoneNumber,
      ...address
    } = Object.fromEntries(formData);

    const userData = {
      firstName,
      lastName,
      email,
      imageUrl,
      phoneNumber,
      address,
    };

    //console.log(userData)
    contactsService.add_one(userData)
      .then(newContact => {
        contactsService.get_one(newContact.objectId)
          .then(contact => {
            setContacts(oldContacts => [...oldContacts, contact]);
          });
        CloseHandler();
      })
  }

  const ContactEditHandler = (e, contactId) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const {
      firstName,
      lastName,
      email,
      imageUrl,
      phoneNumber,
      ...address
    } = Object.fromEntries(formData);

    const userData = {
      firstName,
      lastName,
      email,
      imageUrl,
      phoneNumber,
      address,
    };

    contactsService.edit_one(userData, contactId)
      .then(() => {
        contactsService.get_all()
          .then((result) => {
            setContacts(result.results);
          });
        CloseHandler();
      })
  }

  const ContactDeleteHandler = (e, contactId) => {
    e.preventDefault();
    contactsService.delete_one(contactId)
      .then(() => {

        setContacts(oldContacts => {
          const newContacts = oldContacts.filter(data => data.objectId !== contactId);
          return newContacts;
        });
      });
    CloseHandler();
  }
  return (
   
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/signIn" element={
            <section className="card users-container"><SignIn /></section>
          } />
          <Route path="/signUp" element={
            <section className="card users-container"><SignUp /></section>
          } />
          <Route path="/" element={
            <section className="card users-container">
              <Search />
              <ContactsList contacts={contacts} contactAction={contactAction} setContactAction={setContactAction} setContacts={setContacts} CloseHandler={CloseHandler} />
              {contactAction.action === ContactsAction.Details && <ContactDetails contact={contactAction.contact} onCloseClick={CloseHandler} />}
              {contactAction.action === ContactsAction.Add && <ContactAdd onCloseClick={CloseHandler} onAddClick={ContactAddHandler} />}
              {contactAction.action === ContactsAction.Edit && <ContactEdit contact={contactAction.contact} onCloseClick={CloseHandler} onEditClick={ContactEditHandler} />}
              {contactAction.action === ContactsAction.Delete && <ContactDelete contact={contactAction.contact} onCloseClick={CloseHandler} onDeleteClick={ContactDeleteHandler} />}
            </section>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
