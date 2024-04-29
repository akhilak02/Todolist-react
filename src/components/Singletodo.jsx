/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Todo.css";
function Singletodo({ ele, task, setTask }) {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState(ele.text);
  const deleteHandler = (id) => {
    // setTask(task.filter((ele) => ele.id !== id));
    setTask(task.filter((ele) => ele.id !== id));
  };
  const statusHandler = (nid) => {
    //change cheyytha id return cheyytha pore
    setTask(
      task.map((ele) => {
        if (ele.id === nid) {
          return { ...ele, checked: !ele.checked };
        } else {
          return ele;
        }
      })
    );
  };
  const updateTodo = (data) => {
    setTask(
      task.map((ele) => {
        if (ele.id === data.id) {
          return data;
        } else {
          return ele;
        }
      })
    );
  };
  return (
    <li>
      {editable ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <i
            className="fa-regular fa-floppy-disk"
            onClick={() => {
              updateTodo({ ...ele, text: inputValue });
              setEditable(false);
            }}
          ></i>
        </div>
      ) : (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <input
            type="checkbox"
            onChange={() => {
              statusHandler(ele.id);
            }}
            checked={ele.checked}
          />
          {ele.checked ? (
            <h3>
              <del>{ele.text}</del>
            </h3>
          ) : (
            <h3>{ele.text}</h3>
          )}
          {/* {ele.text} */}
          <i
            className="fa-regular fa-pen-to-square"
            onClick={() => setEditable(true)}
          ></i>

          <i
            className="fa-solid fa-trash"
            onClick={() => deleteHandler(ele.id)}
          ></i>
        </div>
      )}
    </li>
  );
}
export default Singletodo;
