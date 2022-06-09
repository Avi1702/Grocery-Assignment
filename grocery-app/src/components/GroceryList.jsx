import React from "react";

function GroceryList({data, handleDelete, handleStatus}){

   
    return(
    
    <>
   {
     data.map((item)=>{
  
     return (
      <>
      <div key={item.id}  style={{display:"flex",justifyContent:"space-around",alignItems:"center", width:"50%",margin:"auto"}}>
    <h2>{item.title}</h2>
    <div>-</div>
    <h3>{item.status? "Completed":"Not Completed"}</h3>
    <button onClick={()=>handleStatus(item.id)}>Mark As Done</button>
    <button onClick={()=>handleDelete(item.id)}>Delete</button>
   </div>
  
    </>
    )
     })} 

    </>
    );
 }

  export default GroceryList
  
  
  