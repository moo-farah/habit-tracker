import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
}


export function Button({ children } : ButtonProps) {
    return (
        <>
         <button className="bg-[#5B6F00] text-lg text-[#ffffff] font-bold rounded-lg px-3 py-1">{children}</button>
        </>
       
    )
   
}