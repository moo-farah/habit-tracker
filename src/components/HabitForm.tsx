import { Button } from "./Button"

const HabitForm = () => {
  return (
    <form className="flex gap-2">
        <input className="flex-1 rounded-lg bg-[#292929] text-[#ffffff] px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-[#5B6F00]"
        placeholder="New habit..."
        />
        <Button>Add Habit</Button>
    </form>
  )
}

export default HabitForm