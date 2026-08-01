import { useState, type SubmitEvent } from "react"
import { Button } from "./Button"

type HabitFormProps = {
  addHabit: (name: string) => void
}


const HabitForm = ({ addHabit} : HabitFormProps) => {
  const [name, setName] = useState("")

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault()

    if (name.trim() === "") return
      setName("")
      addHabit(name)
    
    console.log(name)
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      
        <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 rounded-lg bg-foreground text-white px-4 py-2 outline-none 
        focus-visible:ring-2 focus-visible:ring-[#5B6F00]"
        placeholder="New habit..."
        />
        <Button 
        disabled={name.trim() === ""}
        className="rounded-lg px-4 py-2 font-medium"
        >
          Add Habit
        </Button>
    </form>
  )
}

export default HabitForm