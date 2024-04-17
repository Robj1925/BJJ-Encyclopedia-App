import React, { Fragment, useEffect, useState } from "react";
import TodoItem from "./todoItem";

export function Todo() {
  const [todoItems, setTodoItems] = useState(null);
  useEffect(() => {
    //do something load
    console.log("Hey, ive loaded up");
    if (!todoItems) {
      fetch("http://localhost:8081/tasks")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodoItems(data);
        });
    }
  }, [todoItems]);

  //ternary operator
  // if (something)
  //    od item 1
  // else
  //    do item 2
  //
  //condition ? do item1 : do item2
  return (
    <div>
      {todoItems
        ? todoItems.map((todoItem) => {
            return (
              <TodoItem key={todoItem.id} data={todoItem} />
            );
          })
        : "loading data..."}
    </div>
  );
}

export default Todo;
