import React, { useState } from 'react'
import './form.css'
const Form = () => {
    const [tasks,setTasks]=useState([]);
    const handlingSubmit=(ev)=>
    {
        ev.preventDefault();
        const obj={
            name:ev.target.name.value,
            description:ev.target.description.value,
            priority:ev.target.priority.checked,
            isCompleted:ev.target.completed.checked,        
        }
        setTasks([...tasks,obj]);
        ev.target.name.value="";
        ev.target.description.value="";
        ev.target.priority.checked=false;
        ev.target.priority1.checked=false;
        ev.target.completed.checked=false;
        ev.target.completed1.checked=false;
    }   
    // handlingFilter(e)
    // {
    
    // }
  return (
    <div className='container'>
        <form onSubmit={handlingSubmit}>
            <label className='lbl'>Task Name</label>
            <input type={"text"} name="name" className='txt'></input>
            <label className='lbl'>Task Description</label>
            <input type={"text"} name="description" className='txt'></input>
            <label className='lbl'>Priority</label>
            <input type={"checkbox"} name="priority" className='pro'></input>
            <label>Yes</label>
            <input type={"checkbox"} name="priority1" className='pro'></input>
            <label>No</label>
            <label className='lbl'>Completion</label>
            <input type={"checkbox"} name='completed'></input>
            <label>Yes</label>
            <input type={"checkbox"} name='completed1'></input>
            <label>No</label>
            <input type={"submit"} className='btn'></input>
            {/* <input type={"checkbox"} onChange={handlingFilter} name='priorityfilter'></input> */}
            <label>isPrority Filter</label>
            <input type={"checkbox"}></input>
            <label>isCompleted Filter</label>
        </form>
            {tasks.map((value,index)=>{
                if(tasks.name!=="" && tasks.description!=="")
                return(
                    <div key={index}>
                        <p><b>Task Name : </b>{value.name}</p>
                        <p><b>Task Description : </b>{value.description}</p>
                        <p><b>Is Priority</b><input type={"checkbox"} checked={true}></input>
                        {value.priority?<label>Yes</label>:<label>No</label>}</p>
                        <p><b>Is Completion</b><input type={"checkbox"} checked={true}></input>
                        {value.isCompleted?<label>Yes</label>:<label>No</label>}</p>
                    </div>
                )})
            }
        
    </div>
  )
}

export default Form