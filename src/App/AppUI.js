import React from "react";
import './App.css';
import {TodoContext} from '../TodoContext'
import { TodoCounter } from '../TodoCounter/index.js'
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';



function AppUI() {

  const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        } = React.useContext(TodoContext);


    return (
        <React.Fragment>
          <TodoCounter />

          <TodoSearch />
            <TodoList>
              {loading && <p>Estamos cargando...</p>}
              {error && <p>ERROR...</p>}
              {(!loading && !searchedTodos.length) && <p>CREA TODO</p>}

              {searchedTodos.map(todo => (
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed} 
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

          {!!openModal && (
        <Modal>
            <TodoForm/>
        </Modal>          
          )}

          <CreateTodoButton 
          setOpenModal={setOpenModal}
          />
    </React.Fragment>
    );
}

export {AppUI}