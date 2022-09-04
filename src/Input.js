import React from "react";


function Input(props){
  return (
    <input className="todosLosInputs"
      name={`${props.nameParaInput}`}
      type="text"
      placeholder={`${props.campo}`}
      value={`${props.valor}`}
      onChange={props.funcion}
    ></input>

)
}

export default Input