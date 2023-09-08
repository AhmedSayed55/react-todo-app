import React,{useState} from 'react';
import './App.css';
import Head from './components/Head';
import MyButton from './components/MyButton';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem'
import TodoItemFav from './components/TodoItemFav';
import Footer from './components/Footer';

function App() {
  const [inputValue, getInputValue] =useState({});
  const [todos,setTodos] =useState([]); 

  const setValue=(obj)=>{
    getInputValue(obj);
  }

  const addTodo=(obj)=>{
    obj.key=Math.floor(Math.random()*10000+1000);
    setTodos([...todos,obj]);
/*      const jsonString = JSON.stringify([...todos,obj]);
    localStorage.setItem("tasks", jsonString); */ 
  }

  const deleteTodo = (id)=>{
    let updateTodos=[...todos].filter((todo)=>todo.key !==id);
    setTodos(updateTodos);
  }

  const doneTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.key === id) {
        todo.isDone = !todo.isDone
      }
      return todo;
    })
    setTodos(updatedTodos)
  }

  const favTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.key === id) {
        todo.isFav = !todo.isFav
      }
      return todo;
    })
    setTodos(updatedTodos)
  }
 
/*   const storageFun=()=>{
    localStorage.setItem('myData',JSON.stringify({data:todos}))
  }
   */
  return (
    <div>
    <Head mystyle="header" text="Todo App"/>
    <nav></nav>
    <main className="todo-app">
      <section className='left-container'>
        <h2>Todo list</h2>
    {todos.map((todo,index) => {
        return (
          <TodoItem  todo={todo} key={index} deleteTodo={deleteTodo} doneTodo={doneTodo} favTodo={favTodo} />
        );
      })}
      </section>
      <section className='rigth-container'>
      <TodoInput 
      getValue={(obj)=>setValue(obj)}
      myStyle="input" 
      hint1="enter todo name" 
      hint3="enter todo date"
      text="Add a task"
      />
      <MyButton text="Add" myStyle="btn" handleClick={() => addTodo(inputValue)} />
      <hr/>
      <h4>Favourite list</h4>
      {todos.filter((value)=>value.isFav).map((todo,index) => {
        return (
          <TodoItemFav  todo={todo} key={index}  deleteTodo={deleteTodo} doneTodo={doneTodo} favTodo={favTodo}   />
        );
      })}
      </section>
    </main>
    <footer>
    <Footer mystyle="footer"
     text1="What is the use of todo app?"  
     text2=" ToDo List App is a kind of app that generally used to maintain our day-to-day tasks or list everything that we have to do, 
     with the most important tasks at the top of the list, and the least important tasks at the bottom. It is helpful in planning 
     our daily schedules." />
    </footer>
    </div>
  );
}

export default App;
