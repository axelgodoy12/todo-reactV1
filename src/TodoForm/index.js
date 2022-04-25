import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'
function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');


    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onSubmit = (event) => {
        event.preventDefault(event);
        addTodo(newTodoValue);
        setOpenModal(false)
    }



    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                placeholder="Agrega tu tarea o objetivo ✌🏼✌🏼"
                onChange={onChange}
            />
            <div className="TodoForm-buttonContainer">
                <button
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                    type="button"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };