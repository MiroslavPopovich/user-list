//import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContactContext } from '../../contexts/ContactContext';
import { ContactItem } from './contact-item/ContactItem'
import { ContactsAction } from './ContactsListConstants';

export const ContactsList = () => 
{
    //console.log(people);
    const {  contacts, contactActionClickHandler } = useContext(ContactContext);

    return(
      <>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => <ContactItem key={contact.objectId} {...contact}/>)}
          </tbody>
        </table>
      </div>
      <button className="btn-add btn" onClick={() => {contactActionClickHandler(null, ContactsAction.Add)}}>Add new user</button>
      </>
    );
}