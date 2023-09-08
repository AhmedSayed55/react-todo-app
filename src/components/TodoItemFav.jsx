import React from "react";
import PropTypes from "prop-types";

 function TodoItemFav(props){
    const {todo}= props;
    
    return(
        <div className={todo.isDone ? "todo-row complete" : "todo-row"}>
           <p>
            {todo.activityName}
            <br/>
            {todo.isDone}
            {todo.date}
            </p>
            
        </div>
    );
}


TodoItemFav.propTypes = {
    todo:PropTypes.object.isRequired,
};

export default TodoItemFav