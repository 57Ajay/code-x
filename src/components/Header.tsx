import { Fragment } from "react/jsx-runtime";
import Logo from "./Logo";
import Counter from "./Counter";

const Header = () => {
  return (
    <Fragment>
        <header className=" flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-black/[0.08]">
            <Logo />
            <Counter />
        </header>
    </Fragment>
  );
};

export default Header;