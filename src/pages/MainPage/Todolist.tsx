import {ChangeEvent, KeyboardEvent, useState } from "react";
import { FilterValuesType } from "./MainPage";
import s from "./MainPage.module.css";


export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

type PropsType = {
  title: string;
  tasks: Array<TaskType>;
  removeTask: (id: string) => void;
  changeFilter: (value: FilterValuesType) => void;
  addTask: (title: string) => void;
  changeTaskStatus: (taskId: string, isDone: boolean) => void
  filter: FilterValuesType
};

export function Todolist(props: PropsType) {
  const [title, setTitle] = useState("")
  const [error, setError] = useState<string | null>(null)

  const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget.value)}
  
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    setError(null);
    if (e.charCode === 13) { 
      addTask()
    }
  }
  const addTask = () => {
    if (title.trim() !== "") {
      props.addTask(title.trim());
      setTitle("")
    } else {
      setError("Title id required")
    }

  }
  const onAllClickHandler = () => {props.changeFilter("all");}
  const onActiveClickHandler = () => {props.changeFilter("active");}
  const onCompletedClickHandler = () => {props.changeFilter("completed");}

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input value={title}
        onChange={onNewTitleChangeHandler}
        onKeyPress={onKeyPressHandler}
        className={s.error ? "error": ""}
          />
        <button onClick={addTask}>+</button>
        {error && <div className={s["error-message"]}>{error}</div>}
      </div>
      <ul>
        {
            props.tasks.map(t => {
              const onRemoveHandler = () => {props.removeTask(t.id)}
              const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                props.changeTaskStatus(t.id, e.currentTarget.checked)
              }

              return <li key={t.id} className={t.isDone ? s["is-done"]: ""}>
              <input type="checkbox" 
              onChange={onChangeHandler}
              checked={t.isDone} />
              <span>{t.title}</span>
              <button onClick={onRemoveHandler}>X</button>
            </li>
          })
        }
      </ul>
      <div>
        <button className={props.filter === 'all' ? s["active-filter"]: ""} 
        onClick={onAllClickHandler}>All</button>
        <button className={props.filter === 'active' ? s["active-filter"]: ""} 
        onClick={onActiveClickHandler}>Active</button>
        <button className={props.filter === 'completed' ? s["active-filter"]: ""} 
        onClick={onCompletedClickHandler}>Completed</button>
        
      </div>
    </div>
  );
}
