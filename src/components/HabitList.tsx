const HabitList = () => {
    const habits = [
        { id: 1, name: "Coding" }, 
        { id: 2, name: "Watching netflix" }, 
        { id: 3, name: "Hiking" }
    ]
    if (habits.length === 0) {
        return (
            <p className="text-center text-xl py-12">No habits yet. Add one above to get started!
            </p>
        )
    }
    return (
        <div className="flex flex-col gap-3">
          {habits.map(habit => (
            <h1 key={habit.id}>{habit.name}</h1>
          ))}
        </div>
    )
}

 

export default HabitList