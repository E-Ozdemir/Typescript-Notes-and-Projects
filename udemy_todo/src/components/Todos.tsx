import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

interface Props {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}
const Todos: React.FC<Props> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        <TodoItem
          text={item.text}
          key={item.id}
          // onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          onRemoveTodo={() => props.onRemoveTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
