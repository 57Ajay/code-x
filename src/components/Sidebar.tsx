import { Fragment } from 'react'
import TodoForm from './TodoForm';
import Button from './Button';

import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

const Sidebar = () => {
  const { login, register, logout, isAuthenticated, user } = useKindeAuth();
  return (
    <Fragment>
        <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l border-black/[0.08] px-[25px] pt-[18px] pb-[28px]">
          <TodoForm />
          <div className='mt-auto space-y-2'>

            {
              isAuthenticated ? (
                <Fragment>
                  <p>Welcome {user?.email}</p>
                  <Button text='Logout' type='button' buttonType='Secondary' onClick={logout} />
                </Fragment>
              ):(
                <Fragment>
                  <Button text='Login' type='button' buttonType='Secondary' onClick={login} />
                  <Button text='Register' type='button' buttonType='Secondary' onClick={register} />
                </Fragment>
              )
            }
          </div>
        </section>
    </Fragment>
  );
};

export default Sidebar;