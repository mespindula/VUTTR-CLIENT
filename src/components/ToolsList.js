import React, { useState, useEffect } from "react";
import ToolDataService from "../services/ToolService";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal";

ToolDataService.doLogin();


const ToolsList = () => {
  const initialToolState = {
    id: null,
    name: "",
    email: ""
  };

  const [tools, setTools] = useState([]);
  const [tool, setTool] = useState(initialToolState);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    retrieveTools();
  });

  const retrieveTools = () => {
    ToolDataService.getAll()
      .then(response => {
        setTools(response.data);
        console.log(response.data);
      })
      .catch(e => {
        retrieveTools();
        console.log(e);
      });
  };

  const setActiveModalDelete = (tool) => {
    setShowModalDelete(true);
    setTool(tool)
  };

  const setInativeModalDelete = () => {
    setShowModalDelete(false);
  };

  const deleteTool = () => {
    ToolDataService.remove(tool.id)
      .then(response => {
        retrieveTools();
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
      setInativeModalDelete();
  };

  const setActiveModalAdd = () => {
    setTool(initialToolState);
    setShowModalAdd(true);
  };

  const setInativeModalAdd = () => {
    setShowModalAdd(false);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTool({ ...tool, [name]: value });
  };

  const saveTool = () => {
    if (tool.tags) {

      var tag_conc = [];

      tool.tags.split(" ").forEach((tag) => {
        tag_conc.push(tag);
      });

      var data = {
        title: tool.name,
        link: tool.link,
        description: tool.description,
        tags: tag_conc
      };

      ToolDataService.create(data)
        .then(response => {
          retrieveTools();
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
    setInativeModalAdd();
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      var value = event.target.value;

      if (checked) {
        ToolDataService.getByTag(value)
        .then(response => {
          setTools(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      } else if (value) {
        ToolDataService.getByTitle(value)
        .then(response => {
          setTools(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
      } else {
        retrieveTools();
      }
    }
  }

  return (
    <div>
      <div className="col-md-5">
        <div className="input-group mb-1">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onKeyDown={handleKeyDown}
          />
          <input
            type="checkbox" 
            className="form-control"
            id="srcTagOnly"
            defaultChecked={checked} 
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="srcTagOnly">Search in tags only</label>
          <div className="mb-5">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={() => setActiveModalAdd()}
            >
              + Add
            </button>
          </div>
          </div>
      </div>

    <div className="list row">
      <div className="col-md-7">

        <ul className="list-group">
          {tools && tools.map((tool, index) => (
            <li
            className={"list-group-item"}
            key={index}
            >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">
                <Link to={tool.link}>
                {tool.title}
                </Link>
              </h5>
              <small>
                <Link to="#" onClick={() => setActiveModalDelete(tool)} className="badge">
                  X Remover
                </Link>
              </small>
            </div> 
            <p class="mb-1">
              <p>{tool.description}</p>

              {tool.tags.map((tag, index2) => { return(<b> #{tag}</b>) })}
            </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <DeleteModal show={showModalDelete} tool={tool} handleClose={setInativeModalDelete} handleDelete={deleteTool} />
    <AddModal show={showModalAdd} tool={tool} handleClose={setInativeModalAdd} handleInputChange={handleInputChange} handleAdd={saveTool}/>
    </div>
  );
};

export default ToolsList;