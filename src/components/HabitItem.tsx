import { eachDayOfInterval, endOfWeek, format, startOfWeek } from "date-fns";
import { Button } from "./Button";
import type { Habit } from "./HabitList";

type HabitItemProps = {
    habit: Habit
}

const HabitItem = ({ habit }: HabitItemProps) => {
    const visibleDates = eachDayOfInterval({start: startOfWeek(new Date(), { weekStartsOn: 1 }),
        end: endOfWeek(new Date(), { weekStartsOn: 1 })
    })
  return (
   <div className="rounded-xl bg-foreground text-white p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
            <div className="flex gap-3 items-center">
                <span className="font-medium">{habit.name}</span>
                <span className="text-sm text-amber-400">❤️‍🔥 3</span>
            </div>
            <Button variant="ghost-desctructive" className="text-sm">Delete</Button>
        </div>
        <div className="flex gap-1.5">
            {visibleDates.map(date => (
                <Button className="flex flex-1 flex-col items-center gap-0.5 rounded-lg" key={date.toISOString()}>
                    <span className="font-medium">{format(date, "EEE")}</span>
                    <span>{format(date, "d")}</span>
                </Button>
            ))}
        </div>
   </div>
  )
}

export default HabitItem