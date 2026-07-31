import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
}


export function Button({ children } : ButtonProps) {
    return (
    <>
        <button className="bg-[#5B6F00] hover:bg-[#788C15] text-lg text-[#ffffff] disabled:opacity-30 disabled:cursor-not-allowed font-bold rounded-lg px-3 py-1">
            {children}
        </button>
    </>
       
    )
   
}