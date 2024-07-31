import s from "./MainPage.module.css";
import { Todolist } from "./Todolist";

const MainPage = () => {
  let tasks1: Array<TaskType> = [
    { id: 1, title: "CSS", isDone: true },
    { id: 1, title: "JS", isDone: true },
    { id: 1, title: "React", isDone: false },
  ]

  let tasks2: Array<TaskType> = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 1, title: "XXX", isDone: false },
    { id: 1, title: "Jentlments of fartune", idDone: true },
  ]

  return (
    <div className={s.main}>
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="Movies" tasks={tasks2} />
    </div>
  );
};

export default MainPage;
//
