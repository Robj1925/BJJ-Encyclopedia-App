import React, { useEffect, useState } from "react";

const TodoItem = (props) => {
  const { emitDeleteTodoItem } = props;
  const [todoItem, setTodoItem] = useState(props.data);
  const [isDirty, setDirty] = useState(false);

  useEffect(() => {
    if (isDirty) {
      fetch(`http://localhost:8081/tasks/${todoItem.id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(todoItem), // have to send in JSON, cant send objects
      })
        .then((response) => response.json())
        .then((data) => {
          setDirty(false);
          setTodoItem(data);
        });
    }
    console.log("Hey, the todo item has changed", todoItem);
  }, [todoItem, isDirty]); // when the todoitem changes, it calls the useEffect method, which tells our server it changed

  function updateTask(e) {
    setTodoItem({ ...todoItem, title: e.target.value }); //async
    setDirty(true);
  }
  function deleteTodoItem() {
    fetch(`http://localhost:8081/tasks/${todoItem.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(todoItem), // have to send in JSON, cant send objects
    })
      .then((response) => response.json())
      .then((data) => {
        emitDeleteTodoItem(todoItem);
      });
  }
  return (
    <div>
      <input
        type="checkbox"
        checked={todoItem.status}
        onChange={() => {
          setDirty(true);
          setTodoItem({ ...todoItem, status: !todoItem.status });
        }}
      />
      {todoItem.status ? (
        <span style={{ textDecoration: "line-through" }}>{todoItem.title}</span>
      ) : (
        <input type="text" value={todoItem.title} onChange={updateTask} />
      )}
      <span
        style={{ marginLeft: "2rem", cursor: "pointer" }}
        onClick={deleteTodoItem}
      >
        🗑️
      </span>
    </div>
  );
};

export default TodoItem;
