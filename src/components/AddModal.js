import React from 'react';


const AddModal = ({ handleClose, handleInputChange, handleAdd, show, tool }) => {
    var showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <h6>+ Add new Tool</h6>
                
                <div className="submit-form">
                    <div className="form-group">
                        <label htmlFor="name">Tool Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            required
                            value={tool && tool.title}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="link">Tool Link</label>
                            <input
                                type="text"
                                className="form-control"
                                id="link"
                                required
                                value={tool && tool.link}
                                onChange={handleInputChange}
                                name="link"
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Tool Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={tool && tool.description}
                                onChange={handleInputChange}
                                name="description"
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tags">Tags</label>
                            <input
                                type="text"
                                className="form-control"
                                id="tags"
                                required
                                value={tool && tool.tags}
                                onChange={handleInputChange}
                                name="tags"
                            />
                    </div>
                </div>

                <button onClick={handleClose}>Cancel</button>
                <button onClick={handleAdd}>Add Tool</button>
            </section>
        </div>
     );
}

export default AddModal;