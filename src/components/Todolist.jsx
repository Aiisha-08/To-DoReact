import React from "react";

function Todolist(props){

  return  <div onClick={() => {
    props.delete(props.id)
    }}>
    <li>{props.items}</li>
  </div>

}

export default Todolist;