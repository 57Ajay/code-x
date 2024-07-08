import React from 'react'

const Container = ({ children  }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d4b3] min-h-screen flex-col"> 
      {children}
    </div>
  )
}

export default Container