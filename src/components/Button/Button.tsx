import s from "./Button.module.css";

type Props = {
  title: string;
  className?: string;
};

export const Button = (props: Props) => {
  
  const buttonClassName = `${s.button} ${
    props.className ? props.className : ""
  }`;

  return (
    <div>
      <button className={buttonClassName}>{props.title}</button>
    </div>
  );
};
