import React from "react";
import "../App.css";
import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";

const Contact = ({ contact, deleteContact, editContact, id }) => {
  const contactItem = contact;
  let firstLetter = contactItem.name.charAt(0);
  let capitalLetter = firstLetter.toUpperCase();

  return (
    <tr className="contact">
      <td>
        <span>{capitalLetter}</span>
        {contactItem.name}
      </td>
      <td>{contactItem.email}</td>
      <td>{contactItem.number}</td>
      <td>{contactItem.date}</td>
      <td>
        {contactItem.label.charAt(0).toUpperCase() + contactItem.label.slice(1)}
      </td>
      <td>
        <button type="button" data-toggle="modal" data-target="#editModal">
          <i className="fas fa-user-edit"></i>
        </button>
        {/* id passed to data-target has to be unique for each item */}
        <button type="button" data-toggle="modal" data-target={`#${id}`}> 
          <i className="fas fa-trash-alt"></i>
        </button>
        <DeleteContact id={id} deleteContact={deleteContact} />
        <EditContact id={id} contact={contactItem} editContact={editContact} />
      </td>
    </tr>
  );
};

export default Contact;
