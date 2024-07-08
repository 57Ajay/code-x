import { Fragment } from "react/jsx-runtime";


const Button = ({text, type, buttonType, onClick}: {text: string, type: "submit" | "reset" | "button" | undefined, buttonType: 'Secondary' | 'Primary' | undefined, onClick: () => void}) => {

  return (
    <Fragment>
        <button type={type} onClick={onClick} className={`${buttonType === 'Primary' ? 'h-[45px] bg-[#473a2b] text-white rounded-[5px] w-full curser-pointer hover:bg-[#351f07]' : 'h-[45px] bg-[#84613a] text-white rounded-[5px] w-full curser-pointer hover:bg-[#351f07]'}`}>{text}</button>
    </Fragment>
  );
};

export default Button;