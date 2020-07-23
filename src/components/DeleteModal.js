import React from 'react';


const DeleteModal = ({ handleClose, handleDelete, show, tool }) => {
    var showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h6>X Remove Tool</h6>
                <br />
                <h5>Are you sure want to remove {tool && tool.title} ?</h5>
                <button onClick={handleClose}>Cancel</button>
                <button onClick={handleDelete}>Yes, remove</button>
            </section>
        </div>
     );
}

export default DeleteModal;