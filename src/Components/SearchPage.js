import React from 'react';
import '../App.css';
import Contact from './Contact';


const SearchPage = ({ contacts,searchValue,deleteContact,editContact }) => {
    const searchList = contacts.map(contact => {
        let name = contact.name.toUpperCase();
        if (name.includes(searchValue)) {
            return (
                <Contact contact={contact} deleteContact={deleteContact} key={contact.id} editContact={editContact} />
            )
        } else {
            return (null)
        }

    })
    return (
        <tbody>
            {searchList}
        </tbody>
    )
}



export default SearchPage;