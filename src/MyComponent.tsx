import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

const MyComponent = () => {
  const { state, setState }: { state: string; setState: React.Dispatch<React.SetStateAction<string>> } = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState('Hello, React Context!')}>Change Text</button>
    </div>
  );
};

export default MyComponent;
