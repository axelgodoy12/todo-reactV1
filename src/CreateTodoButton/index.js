import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
        // estos valores terminan en true o false por eso se puede abrir o cerrar 
    };


    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
      
    );
}

export { CreateTodoButton };