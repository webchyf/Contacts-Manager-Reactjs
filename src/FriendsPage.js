import React from 'react';
import './App.css';
import Contact from './Contact';

const FriendsPage = ({ contacts }) => {
    const contactList = contacts.map(contact => {
        if (contact.label === "friend") {
            return (
                <Contact contact={contact} />
            )
        } else {
            return (null)
        }

    })
    return (
        <tbody>
            {contactList}
        </tbody>
    )
}



export default FriendsPage;