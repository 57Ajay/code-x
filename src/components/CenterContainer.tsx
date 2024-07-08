import React from 'react'

const CenterContainer = ({ children  }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-[972px] h-[636px] bg-slate-100 rounded-[8px] shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden"> 
      {children}
    </div>
  );
};

export default CenterContainer;