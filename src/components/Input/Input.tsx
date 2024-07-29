import s from "./Input.module.css";

type Props = {
  placeholder: string;
  className?: string;
};

export const Input = (props: Props) => {
  const inputClassName = `${s.input} ${props.className ? props.className : ""}`;

  return (
    <div>
      <input placeholder={props.placeholder} className={inputClassName} />
    </div>
  );
};
