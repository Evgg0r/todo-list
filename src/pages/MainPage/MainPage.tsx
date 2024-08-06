import { useState } from "react";
import s from "./MainPage.module.css";
import { TaskType, Todolist } from "./Todolist";
import { nanoid } from '@reduxjs/toolkit'


export type FilterValuesType = "all" | "completed" | "active"



function MainPage() {

  let [tasks, setTasks] = useState<Array<TaskType>>([
    { id: nanoid(), title: "CSS", isDone: true },
    { id: nanoid(), title: "JS", isDone: true },
    { id: nanoid(), title: "ReactJS", isDone: false },
    { id: nanoid(), title: "Redux", isDone: false },
  ])
  

  let [filter, setFilter] = useState<FilterValuesType>("all");

  function removeTask(id: string) {
    let filteredTasks = tasks.filter( t => t.id !== id)
    setTasks(filteredTasks)
  }

  function addTask(title: string) {
    let newTask = {
      id: nanoid(), 
      title: title, 
      isDone: false};
    let newTasks = [newTask, ...tasks];
    setTasks(newTasks)
  }

  function changeFilter(value: FilterValuesType) {
    setFilter(value);
  }


  let tasksForTodolist = tasks;
  if (filter === "completed") {
    tasksForTodolist = tasks.filter(t => t.isDone === true);
  }
  if (filter === "active") {
    tasksForTodolist = tasks.filter(t => t.isDone === false);
  }
  

  return (
    <div className={s.main}>
      <Todolist title="What to learn" 
      tasks={tasksForTodolist}
      removeTask={removeTask}
      changeFilter={changeFilter}
      addTask={addTask}
      />
    </div>
  );
}

export default MainPage;