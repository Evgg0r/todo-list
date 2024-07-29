import Form from "../../components/Form/Form";
import s from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <div className={s.title}>Todolist</div>
        <div className={s.text}>
          Create your own plans and follow to your goals
        </div>
      </div>
      <div className={s.formContainer}>
        <Form />
      </div>
    </div>
  );
};
