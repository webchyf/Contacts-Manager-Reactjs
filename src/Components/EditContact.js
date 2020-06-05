import React from 'react';
import '../App.css';

class EditContact extends React.Component {
    
    constructor({contact}) {
        
        super()
        this.state = {
            name: contact.name,
            email: contact.email,
            number: contact.number,
            date: contact.date,
            label: contact.label,
            id: contact.id,

        };
        

    };
    

    handleChange = () => {
        
        this.setState({
            name: document.querySelector(".name").value,
            number: document.querySelector(".number").value,
            email: document.querySelector(".email").value,
            date: this.state.date,
            label: this.state.label,
        });

    }



    handleSubmit = (e) => {

        this.props.editContact(this.state);
        e.preventDefault();

    }





    render() {


        return (
            <div className="modal fade" id="editModal" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel">Edit Contact<span><i className="far fa-caret-square-right"></i>{this.state.label}</span></h4>                           
                        </div>
                        <div className="modal-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label><i className="fas fa-user-circle"></i></label>
                                    <input type="text" className="form-control name" onChange={this.handleChange} value={this.state.name}></input>
                                </div>
                                <div className="form-group">
                                    <label><i className="fas fa-phone-alt"></i></label>
                                    <input type="number" className="form-control number" onChange={this.handleChange} value={this.state.number}></input>
                                </div>
                                <div className="form-group">
                                    <label><i className="far fa-envelope"></i></label>
                                    <input type="email" className="form-control email" onChange={this.handleChange} value={this.state.email}></input>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


export default EditContact;
