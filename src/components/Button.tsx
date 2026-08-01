import type { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"
type variant = "primary" | "secondary" | "ghost-desctructive"
type ButtonProps = {
    variant?: variant 
} & ComponentProps<"button">


export function Button({variant = "primary", className,  ...props } : ButtonProps) {
    return (
    <>
        <button
        {...props}
        className={twMerge(
            "transition-colors text-white rounded-lg px-3 py-1 disabled:opacity-30 disabled:cursor-not-allowed",
            getVariantStyles(variant),
            className,
          )}
        />
      
    </>
       
    )
}

function getVariantStyles(variant: variant) {
    switch (variant) {
        case "primary":
           return "bg-[#5B6F00] hover:bg-[#788C15]";
        case "secondary":
           return "bg-zinc-700 hover:bg-zinc-600 text-zinc-400";
        case "ghost-desctructive":
           return "hover:bg-red-800 text-red-800 hover:text-red-200";
    default:
      throw new Error(`Invalid variant: ${variant satisfies never}`);
  }
}