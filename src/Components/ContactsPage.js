import React from 'react';
import '../App.css';
import Contact from './Contact';


const ContactsPage = ({ contacts, deleteContact, editContact}) =>{
    const contactList = contacts.map(contact => {
        return(
            <Contact contact={contact} deleteContact={deleteContact} key={contact.id} editContact={editContact}/>
            
        )
    })
    return(
        <tbody>
            {contactList}
        </tbody>
    )
}



export default ContactsPage;
