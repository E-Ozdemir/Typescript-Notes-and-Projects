import { useRef } from "react";
import classes from "./NewTodo.module.css";
interface Props {
  onAddTodo: (text: string) => void;
}

const NewTodo: React.FC<Props> = (props) => {
  const refTodo = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inputText = refTodo.current!.value;
    // const inputText = refTodo.current!.value; //refTodo.current degerinin null olmayacagindan %100 eminsek bunu compiler'a ifade etmek icin '!' isaretini kullanabiliriz.
    props.onAddTodo(inputText);
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={refTodo} required />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
