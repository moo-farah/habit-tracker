import HabitItem from "./HabitItem"

export type Habit = {id: string; name: string}

type HabitListProps = {
    habits: Habit[]
    deleteHabit: (id: string) => void
}

const HabitList = ({ habits, deleteHabit }: HabitListProps) => {
    if (habits.length === 0) {
        return (
            <p className="text-center text-xl py-12">
                No habits yet. Add one above to get started!
            </p>
        )
    }
    return (
        <div className="flex flex-col gap-3">
          {habits.map(habit => (
            <HabitItem deleteHabit={deleteHabit} key={habit.id} habit={habit} />
          ))}
        </div>
    )
}

 

export default HabitList