import s from "./MainPage.module.css";
import { Todolist } from "./Todolist";

const MainPage = () => {
  return (
    <div className={s.main}>
      <Todolist/>
      <Todolist/>
      <Todolist/>
    </div>
  );
};

export default MainPage;
//
