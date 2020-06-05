import React from 'react';
import '../App.css';

class CreateContact extends React.Component {
    constructor() {
        super()
        this.state = { 
            name : "Name",
            email: "Email",
            number: "Phone Number",
            date: "25/05/2020",
            label: "Family"
    
    };

    }


    handleChange=(e)=> {
        var x = document.querySelector("#label");
        var i = x.selectedIndex;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;

        this.setState({
            name: document.querySelector("#firstName").value +" "+document.querySelector("#lastName").value,
            number: document.querySelector("#number").value,
            email: document.querySelector("#email").value,
            date: today,
            label: x.options[i].text,
            

        });

    }

    

    handleSubmit=(e)=> {
             
        this.props.createContact(this.state);
        e.preventDefault();

    }





    render()
     {
        

    return (
        <div className="modal fade" id="createModal" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">Create New Contact</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label><i className="fas fa-user-circle"></i></label>
                                <input type="text" className="form-control firstName" onChange={this.handleChange} placeholder="First Name" id="firstName"></input>
                                <input type="text" className="form-control lastName" onChange={this.handleChange} placeholder="Last Name" id="lastName"></input>
                            </div>
                            <div className="form-group">
                                <label><i className="fas fa-phone-alt"></i></label>
                                <input type="number" className="form-control" onChange={this.handleChange} placeholder="Number" id="number"></input>
                            </div>
                            <div className="form-group">
                                <label><i className="far fa-envelope"></i></label>
                                <input type="email" className="form-control" onChange={this.handleChange} placeholder="Email" id="email"></input>
                            </div>
                            <div className="form-group">
                                <label><i className="far fa-caret-square-right"></i></label>
                                <select className="form-control" onChange={this.handleChange} id="label">
                                    <option>family</option>
                                    <option>friend</option>
                                    <option>customer</option>
                                </select>
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


export default CreateContact;
