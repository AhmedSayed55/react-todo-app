import React from "react";
import { GoHeart } from "react-icons/go";
import PropTypes from "prop-types";

 function TodoItem(props){
    const {todo,deleteTodo,doneTodo,favTodo}= props;

        const askForDelete=()=>{
            let text="Are you sure that you want to delete "+todo.activityName+" ? enter yes if you are sure";
            let ask = prompt(text,"yes");
            if (ask === "yes") {
                deleteTodo(todo.key);
            } 
            }
            

    return(
        <div className="todo-row">
           <p className={todo.isDone ? "todo-row complete" : "todo-row"}>
            {todo.activityName}
            <br/>
            {todo.isDone}
            {todo.date}
            </p>
            <div className="input-buttons">
            <GoHeart className={todo.isFav?"icon-clicked":"icon-not-clicked"} onClick={()=>{favTodo(todo.key);}}/>
            <button onClick={()=>doneTodo(todo.key)} className="btn-mark">mark</button>
            <button onClick={()=>{askForDelete()}} className="btn-delete">delete</button>
            </div>
        </div>
    );
}

TodoItem.propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    doneTodo: PropTypes.func.isRequired,
    favTodo: PropTypes.func.isRequired,
    todo:PropTypes.object.isRequired,
};

export default TodoItem