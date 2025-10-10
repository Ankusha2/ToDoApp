import React, { useState } from 'react';
import style from './HomePage.module.css';

const HomePage = () => {

  const[task,setTask]=useState('');
  const[list,setList]=useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // const submit=(e)=>{
  //   e.preventDefault()
  //   setList([...list,task])
  //   setTask('')
  // }

  const handleAddOrEdit=(e)=>{
    e.preventDefault()

    // If input field is empty
    if (task.trim()===''){
      alert("Enter a Task");
      return(null);
    }
    // if editing mode is on
    else if(isEditing){
      const updatedTask=[...list]
      updatedTask[editIndex]=task;
      setList(updatedTask);
      setIsEditing(false)
      setEditIndex(null)
    }
    // If ADD mode is on
    else{
       setList([...list,task])
       }
       
    setTask('')
  }

  const edit=(idx)=>{
     setTask(list[idx]);       // Put task in input field
     setIsEditing(true);          // Switch to Edit mode
     setEditIndex(idx);         // Store index to update later
  }

  const del= (idx)=>{
    const delTask=list.filter((_, i) => i !== idx)
    setList(delTask);
  }

  return (
    <div className={style.container}>
      <div className={style.main}>
        <h1>TO DO LIST</h1>
        <div className={style.task}>
          <form >
            <input type="text" placeholder='Enter your Task' value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleAddOrEdit}>  {isEditing ? 'Update' : 'Add'} </button>
          </form>
          <ul>
            {list.map((elem,idx)=>{
              return <>
              <div key={idx} className={style.displayItem}>
                <li className={style.list1}>  {elem}  </li>
                <li className={style.list2}>
                  <button onClick={() => edit(idx)}><i className="fa-solid fa-pen-to-square"></i></button>
                  <button onClick={() => del(idx)}><i className="fa-solid fa-trash"></i></button>
                </li>
              </div>
              </>
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
