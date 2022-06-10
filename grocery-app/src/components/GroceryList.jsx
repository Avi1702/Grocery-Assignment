import React from "react";

function GroceryList({data, handleDelete, handleStatus}){

   
    return(
    
    <>
   {
     data.map((item)=>{
  
     return (
      <>
       
      <div key={item.id}  style={{display:"flex",justifyContent:"space-around",alignItems:"center", width:"50%",margin:"auto"}}>
     <div> {item.status?<h2 style={{color:"green"}}>{item.title}</h2>:<h2 style={{color:"red"}}>{item.title}</h2>}</div>
    <div>-</div>
    <div>{item.status?<h3 style={{color:"green"}}>Completed</h3>:<h3 style={{color:"red"}}>Not completed</h3>}</div>
    <div>{item.status?<button onClick={()=>handleStatus(item.id)}>Done</button>:<button onClick={()=>handleStatus(item.id)}>Mark as Done</button>}</div>
    <button onClick={()=>handleDelete(item.id)}>Delete</button>
   </div>
  
    </>
    )
     })} 

    </>
    );
 }

  export default GroceryList
  
  
  