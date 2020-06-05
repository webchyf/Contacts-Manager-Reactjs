import React from 'react';
import '../App.css';

const DeleteContact = ({deleteContact,id}) => {
   
    return (
        <div className="modal fade" id="deleteModal" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabel">Delete this Contact?</h4>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>{deleteContact(id)}}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )

}






export default DeleteContact;
