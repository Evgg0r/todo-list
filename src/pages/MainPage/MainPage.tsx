import { useState } from "react";
import s from "./MainPage.module.css";
import { Todolist } from "./Todolist";

function useState2(data: any) {
  return [ data, () => {}]
}

let arr = useState2([ {}, {}, {}])

let tasks = arr[0];
let setTasks = arr[1];


function MainPage() {
  let initTasks = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "ReactJS", isDone: false },
    { id: 4, title: "Redux", isDone: false },
  ]

    let arr = useState(init)

    let tasks = arr[0];
    let setTasks = arr[1]

  function removeTask(id: number) {
    let filteredTasks = tasks.filter( t => t.id !== id)
    setTasks(filteredTasks)
  }
    
  

  return (
    <div className={s.main}>
      <Todolist title="What to learn" 
      tasks={tasks}
      removeTask={removeTask}/>
    </div>
  );
}

export default MainPage;
