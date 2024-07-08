import { Fragment } from 'react'
import TodoForm from './TodoForm';
import Button from './Button';

const Sidebar = () => {
  return (
    <Fragment>
        <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
          <TodoForm />
          <div className='mt-auto space-y-2'>
            <Button text='Login' type='button' buttonType='Secondary' onClick={()=>void 0} />
            <Button text='Register' type='button' buttonType='Secondary' onClick={()=>void 0} />
          </div>
        </section>
    </Fragment>
  );
};

export default Sidebar;