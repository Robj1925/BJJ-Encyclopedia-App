import React, { useEffect, useState } from "react";

const TodoItem = (props) => {
    const [todoItem, setTodoItem] = useState(props.data);

    useEffect(() => {
      console.log("Hey, the todo item has changed", todoItem);
    }, [todoItem]);

    function updateIsDone () {
        setTodoItem({...todoItem, status: !todoItem.status});
    }
  return (
    <>
      <input type="checkbox" checked={todoItem.status} onChange={updateIsDone}/>
      <span>{todoItem.title}</span>
    </>
  );
};

export default TodoItem;
