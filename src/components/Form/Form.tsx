import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import s from "./Form.module.css";

export const Form = () => {
  return (
    <div className={s.main}>
      <div className={s.header}>Enter your data for log in</div>
      <div className={s.form}>
        <Input placeholder="Name" className={s.input} />
        <Input placeholder="Email" className={s.input} />
        <Input placeholder="Password" className={s.input} />
        <Link to={"/main"}>
          <Button title="LOG IN" className={s.button} />
        </Link>
      </div>
    </div>
  );
};

export default Form;
