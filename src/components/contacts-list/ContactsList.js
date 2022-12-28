import * as contactsService from '../../services/contactsService';

import { ContactItem } from './contact-item/ContactItem'
import { ContactsAction } from './ContactsListConstants';
export const ContactsList = ({
  contacts,
  setContactAction,
  contactAction,
  setContacts,
  CloseHandler,
}) => 
{
    //console.log(people);

    const contactActionClickHandler = (contactId, actionType) => {
      //console.log(contactId, actionType);
      if (actionType === ContactsAction.Add){
        setContactAction({contact: null, action: actionType})
      }else{
        contactsService.get_one(contactId)
          .then((result) => {
          setContactAction({contact: result, action: actionType})
        });
      }
    }
    
        

    return(
      <>
      <div className="table-wrapper">
        
        

        <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name
              </th>
              <th>
                Last name
              </th>
              <th>
                Email
              </th>
              <th>
                Phone
              </th>
              <th>
                Created
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => <ContactItem key={contact.objectId} {...contact} onActionClick={contactActionClickHandler}/>)}
          </tbody>
        </table>
      </div>
      <button className="btn-add btn" onClick={() => {contactActionClickHandler(null, ContactsAction.Add)}}>Add new user</button>
      </>
    );
}