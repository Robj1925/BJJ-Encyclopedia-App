import React, { Fragment, useEffect, useState } from "react";
import TodoItem from "./todoItem";

export function Todo() {
  //this is the "root", kind of like our controller
  const [todoItems, setTodoItems] = useState(null); //getter and setter
  useEffect(() => {
    //we use this once the app is loaded
    //do something load
    console.log("Hey, ive loaded up");
    if (!todoItems) {
      //if we dont have anything todo items
      fetch("http://localhost:8081/tasks") //then we go and fetch them
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodoItems(data); //populates view w/ items
        });
    }
  }, [todoItems]);

  function addNewTodoItem() {
    fetch("http://localhost:8081/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.json()) //take the response obj which is a string in jsonformat and turn it into JSON
      .then((data) => {
        setTodoItems([...todoItems, data]); //adds new item added
        console.log(data);
      });
  }
  function handleDeleteTodoItem(item) {
    const updateTodoItems = todoItems.filter(
      (aTodoItem) => aTodoItem.id !== item.id
    );
    setTodoItems([...updateTodoItems]);
  }
  return (
    // we can only return one parent tag
    <>
      <div>
        <button onClick={addNewTodoItem}>Add New Task</button>
      </div>
      <div>
        {todoItems //we are returning an array of todo items that we are fetching from the db
          ? todoItems.map((todoItem) => {
              //iterate thru array,
              return (
                <TodoItem
                  key={todoItem.id}
                  data={todoItem}
                  emitDeleteTodoItem={handleDeleteTodoItem}
                />
              );
            })
          : "loading data..."}
      </div>
    </>
  );
}

export default Todo;
