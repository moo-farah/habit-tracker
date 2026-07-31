import { Button } from "./Button";

function Header() {
    return (
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-6xl">Habit Tracker</h1>
          <span>1 / 1 done today</span>
        </div>
  
        <div className="flex flex-col gap-1">
          <span className="">July 31 - Dec 12</span>
          <div className="flex items-center gap-3">
            <Button>Prev</Button>
            <Button>Next</Button>
          </div>
        </div>
      </header>
    )

}

export default Header;