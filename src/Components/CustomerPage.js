import React from 'react';
import '../App.css';
import Contact from './Contact';

const CustomersPage = ({ contacts, deleteContact, editContact  }) => {
    const contactList = contacts.map(contact => {
        if(contact.label === "customer") {
            return (
                <Contact contact={contact} deleteContact={deleteContact} key={contact.id} editContact={editContact} />
            )
        }else{
            return(null)
        }
        
    })
    return (
        <tbody>
            {contactList}
        </tbody>
    )
}



export default CustomersPage;