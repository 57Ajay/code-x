import React from "react";

const Container = ( { children }: {children: React.ReactNode})=>{
    return(
        <div className="flex-grow max-w-[1280px] mx-auto px-4 min-h-[88vh] shadow-lg bg-slate-600 text-zinc-300 rounded-md border border-zinc-800"> 
            {children}
        </div>
    )
};

export default Container;