import React, { useState } from "react";
import "./form.css";
const Form = () => {
  var [tasks, setTasks] = useState([]);
  var [priority1, setPriority] = useState("");
  var [completion, setCompletion] = useState("");
  var [removeTask,setRemoveTask]=useState([]);
  const handlingSubmit = (ev) => {
    ev.preventDefault();
    const obj = {
      name: ev.target.name.value,
      description: ev.target.description.value,
      priority: ev.target.priority.checked,
      isCompleted: ev.target.completed.checked,
    };
    if (
      ev.target.name.value === "" ||
      ev.target.description.value === "" ||
      ev.target.priority.checked === "" ||
      ev.target.completed.checked === ""
    ) {
      return;
    }
    setTasks([...tasks, obj]);
    ev.target.name.value = "";
    ev.target.description.value = "";
    ev.target.priority.checked = false;
    ev.target.completed.checked = false;
  };
  let filterPriority = tasks.filter((value) => {
    return value.priority === true;
  });
  let filterCompleted = tasks.filter((value) => {
    return value.isCompleted === true;
  });
  const handleInput = (even) => {
    if (even.target.name === "priorityfilter") {
      setPriority(even.target.checked);
    } else {
      setCompletion(even.target.checked);
    }
  };
  const handlingRemove=(index)=>{
        removeTask=[...tasks]; 
        tasks.splice(index,1)
        setRemoveTask(removeTask);
  };
  const updateValues=(e,index)=>
  {
    // tasks[index].priority.checked;
    // setTasks(tasks[0].priority===false);
    //  setTasks(value[index].priority);
    // tasks[index].priority=e.target.checked;
    // tasks[index].isCompleted=e.target.checked;
    if(e.target.name==="updatePriority" || e.target.name==="updatePriority1")
    {
      tasks[index].priority=e.target.checked;
    }
    else if(e.target.name==="updatecompletion" || e.target.name==="updatecompletion1")
    {
      tasks[index].isCompleted=e.target.checked;
    }
    // console.log( tasks[index].priority);
    // console.log(tasks[index]);
    console.log(e.target.checked);
  }
  return (
    <div className="container">
      <form onSubmit={handlingSubmit} className="form-container">
        <label className="lbl">Task Name</label>
        <input type={"text"} name="name" className="txt"></input>
        <label className="lbl">Task Description</label>
        <input type={"text"} name="description" className="txt"></input>
        <label className="lbl">Priority</label>
        <input type={"checkbox"} name="priority"></input>
        <label className="lbl">Completion</label>
        <input type={"checkbox"} name="completed"></input>
        <input type={"submit"} className="btn"></input>
        <input
          type={"checkbox"}
          name="priorityfilter"
          onChange={handleInput}
        ></input>
        <label>isPrority Filter</label>
        <input
          type={"checkbox"}
          name="completionfilter"
          onChange={handleInput}
        ></input>
        <label>isCompleted Filter</label>

        {Boolean(priority1) === false && Boolean(completion) === false && (
          <div className="task-container">
            <h1>Task Details</h1>
            {tasks.map((value, index) => {
              return (
                <div key={index} className="list">
                  <p>
                    <b>Task Name : </b>
                    {value.name}
                  </p>
                  <p>
                    <b>Task Description : </b>
                    {value.description}
                  </p>
                  <p>
                    <b>Is Priority</b>
                    {value.priority ? (
                      <input type={"checkbox"} defaultChecked onChange={(e)=>updateValues(e,index)} name="updatePriority"></input>
                    ) : (
                      <input type={"checkbox"} onChange={(e)=>updateValues(e,index)} name="updatePriority1"></input>
                    )}
                  </p>
                  <p>
                    <b>Is Completion</b>
                    {value.isCompleted ? (
                      <input type={"checkbox"} defaultChecked onChange={(e)=>updateValues(e,index)} name="updatecompletion"></input>
                    ) : (
                      <input type={"checkbox"} onChange={(e)=>updateValues(e,index)} name="updatecompletion1"></input>
                    )}
                  </p>
                  <button onClick={()=>handlingRemove(index)}>DELETE</button>
                </div>
              );
            })}
          </div>
        )}

        {Boolean(priority1) === true && (
          <div>
            <h1>Priority Filter</h1>
            {filterPriority.map((value1, index1) => {
              return (
                <div key={index1}>
                  <p>
                    <b>Task Name : </b>
                    {value1.name}
                  </p>
                  <p>
                    <b>Task Description : </b>
                    {value1.description}
                  </p>
                  <p>
                    <b>Is Priority</b>
                    {value1.priority ? (
                      <input type={"checkbox"} defaultChecked></input>
                    ) : (
                      <input type={"checkbox"}></input>
                    )}
                  </p>
                  <p>
                    <b>Is Completion</b>
                    {value1.isCompleted ? (
                      <input type={"checkbox"} defaultChecked></input>
                    ) : (
                      <input type={"checkbox"}></input>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        {Boolean(completion) === true && (
          <div>
            <h1>Completion Filter</h1>
            {filterCompleted.map((value1, index1) => {
              return (
                <div key={index1}>
                  <p>
                    <b>Task Name : </b>
                    {value1.name}
                  </p>
                  <p>
                    <b>Task Description : </b>
                    {value1.description}
                  </p>
                  <p>
                    <b>Is Priority</b>
                    {value1.priority ? (
                      <input type={"checkbox"} defaultChecked></input>
                    ) : (
                      <input type={"checkbox"}></input>
                    )}
                  </p>
                  <p>
                    <b>Is Completion</b>
                    {value1.isCompleted ? (
                      <input type={"checkbox"} defaultChecked></input>
                    ) : (
                      <input type={"checkbox"}></input>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
