import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';



const SideBar = ({contacts}) =>{
   const totalContacts = contacts.length;
   const totalCustomers = contacts.filter((contact)=>{
      return contact.label === "customer"
   }).length;
   const totalFriends = contacts.filter((contact) => {
      return contact.label === "friend"
   }).length;
   const totalFamily = contacts.filter((contact) => {
      return contact.label === "family"
   }).length;


    return(
       <div className="col-md-2 side">
            <span><i className="fas fa-address-book"></i><p>Contacts Manager</p></span>
         <br/>
          <button type="button" data-toggle="modal" data-target="#createModal">
                <i className="fas fa-plus"></i>
                <span>Create Contact</span>
           </button>
          <h2><NavLink to="/"><i className="far fa-user"></i>All Contacts<span>{totalContacts}</span></NavLink></h2>
            <hr></hr>
           <ul>
             <li><NavLink to="/family"><i className="far fa-caret-square-right"></i>Family<span>{totalFamily}</span></NavLink></li>
             <li><NavLink to="/friends"><i className="far fa-caret-square-right"></i>Friends<span>{totalFriends}</span></NavLink></li>
             <li><NavLink to="/customers"><i className="far fa-caret-square-right"></i>Customers<span>{totalCustomers}</span></NavLink></li>
           </ul>
            <hr></hr>
       </div>
    )
}


export default SideBar;
