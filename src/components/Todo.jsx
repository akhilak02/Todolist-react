import { useState } from "react";
import "./Todo.css";
import Singletodo from "./Singletodo";
function Todo() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");
  //  console.log(inputValue);
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      let flag = false;
      task.forEach((ele) => {
        if (ele.text === inputValue) {
          flag = true;
        }
      });
      if (flag) {
        alert("Task Already in progress!");
      } else {
        setTask([
          ...task,
          { id: task.length + 1, text: inputValue, checked: false },
        ]);
        setInputValue("");
      }
    } else {
      alert("input can not be empty");
    }
  };
 
  

  console.log(task);
  return (
    <div className="container container-fluid">
      <div className="form">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            id="inputValue"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />

          <button type="submit" className="btn btn-outline-secondary btn-lg  ">
            <i className="fa-solid fa-plus"></i>
          </button>
        </form>
      </div>
      <ul id="listItem ">
        {task.map((ele) => (
          <Singletodo key={ele.id} ele={ele} task={task} setTask={setTask} />
        ))}
      </ul>
    </div>
  );
}
export default Todo;
