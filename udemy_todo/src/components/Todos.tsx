import React from "react";
import Todo from "../models/todo";

interface Props {
  items: Todo[];
}
const Todos: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
