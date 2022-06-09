import React from "react";
import {v4 as uuidv4} from "uuid";
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';

function Grocery(){
    const [data,setData]=React.useState([])
  
    const handleAdd=(value)=>{
      const todoItem={
        title:value,
        status:false,
        id:uuidv4()
      };
      setData([...data, todoItem])
    };
    
    function handleDelete(id){
      const filteredData= data.filter((items)=>items.id!==id)
    //  console.log(id)
    setData(filteredData)
    }
  
    function handleStatus(id){
      // console.log(id)
     const updatedData= data.map((items)=>items.id===id ? { ...items, status: !items.status} : items)
  
  
     
     setData(updatedData)
  
    //  {updatedData.map((items)=>items.status?<h1>true</h1>:<h1>false</h1>)}
     console.log(data)
      
    }
  
    return(
      <>
    <GroceryInput handleAdd={handleAdd} />

    <GroceryList data={data} handleDelete={handleDelete} handleStatus={handleStatus}/>
    </>
    
    );
  }
  export default Grocery