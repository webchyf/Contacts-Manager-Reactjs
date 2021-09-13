import React from "react";
import SideBar from "./SideBar";
import CreateContact from "./CreateContact";
import SearchBar from "./SearchBar";
import ContactsPage from "./ContactsPage";
import CustomerPage from "./CustomerPage";
import FamilyPage from "./FamilyPage";
import FriendsPage from "./FriendsPage";
import "../App.css";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import SearchPage from "./SearchPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "Abega",
          email: "sleegess@gmail.com",
          number: "0249955571",
          date: "28/05/2020",
          label: "friend",
        },
        {
          id: 2,
          name: "Legason",
          email: "sleegess@gmail.com",
          number: "0249955571",
          date: "28/05/2020",
          label: "friend",
        },
        {
          id: 3,
          name: "Fred",
          email: "fred@gmail.com",
          number: "0249254896",
          date: "29/05/2020",
          label: "family",
        },
        {
          id: 4,
          name: "Frodoin",
          email: "fred@gmail.com",
          number: "0249254896",
          date: "29/05/2020",
          label: "family",
        },
        {
          id: 5,
          name: "Noel",
          email: "fred@gmail.com",
          number: "0249254896",
          date: "29/05/2020",
          label: "family",
        },
        {
          id: 6,
          name: "Seth",
          email: "seth@gmail.com",
          number: "0249900071",
          date: "25/05/2020",
          label: "customer",
        },
        {
          id: 7,
          name: "henry",
          email: "henry@gmail.com",
          number: "0249450071",
          date: "25/05/2020",
          label: "customer",
        },
      ],
      result: "",
    };
  }
  createContact = (contact) => {
    contact.id = this.state.contacts.length + 1;
    const contacts = [...this.state.contacts, contact];
    this.setState({ ...this.state, contacts: contacts });
  };

  deleteContact = (id) => {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.id !== id;
    });
    this.setState({ ...this.state, contacts: contacts });
  };
  editContact = (contact) => {
    console.log(contact);
  };

  searchContact = (searchValue) => {
    let searchCapital = searchValue.toUpperCase();
    this.setState({
      result: searchCapital,
    });
    this.props.history.push("/search");
  };

  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <SideBar contacts={this.state.contacts} />
            <div className="col-md-10">
              <SearchBar searchContact={this.searchContact} />
              <table className="contactTable table-responsive">
                <thead>
                  <tr className="borderBottomLine">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Date</th>
                    <th>Label</th>
                    <th></th>
                  </tr>
                </thead>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ContactsPage
                      {...props}
                      contacts={this.state.contacts}
                      deleteContact={this.deleteContact}
                      editContact={this.editContact}
                    />
                  )}
                />
                <Route
                  exact
                  path="/family"
                  render={(props) => (
                    <FamilyPage
                      {...props}
                      contacts={this.state.contacts}
                      deleteContact={this.deleteContact}
                      editContact={this.editContact}
                    />
                  )}
                />
                <Route
                  exact
                  path="/friends"
                  render={(props) => (
                    <FriendsPage
                      {...props}
                      contacts={this.state.contacts}
                      deleteContact={this.deleteContact}
                      editContact={this.editContact}
                    />
                  )}
                />
                <Route
                  exact
                  path="/customers"
                  render={(props) => (
                    <CustomerPage
                      {...props}
                      contacts={this.state.contacts}
                      deleteContact={this.deleteContact}
                      editContact={this.editContact}
                    />
                  )}
                />
                <Route
                  exact
                  path="/search"
                  render={(props) => (
                    <SearchPage
                      {...props}
                      contacts={this.state.contacts}
                      deleteContact={this.deleteContact}
                      editContact={this.editContact}
                      searchValue={this.state.result}
                    />
                  )}
                />

                <tfoot></tfoot>
              </table>
            </div>

            <CreateContact createContact={this.createContact} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);
