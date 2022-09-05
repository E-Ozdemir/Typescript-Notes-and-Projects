import React, { useState } from "react";
import classes from "./TodoItem.module.css";
interface Props {
  text: string;
  onRemoveTodo: () => void;
}

const TodoItem: React.FC<Props> = (props) => {
  // const [isDone, setIsDone] = useState<boolean>(false);

  // const changeStatus = () => {
  //   setIsDone(!isDone);
  // };

  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
  // return (
  //   <>
  //     {!isDone && (
  //       <li className={classes.item} onClick={changeStatus}>
  //         {props.text}
  //       </li>
  //     )}
  //   </>
  // );
};

export default TodoItem;
