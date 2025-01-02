import { Link, Outlet } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";
const App = () => {
  return (
    <div className="w-full min-h-screen bg-VeryLightGray dark:bg-VeryDarkBlueBg  font-NunitoSans text-VeryDarkBlueText">
      <header className="py-8 shadow bg-White dark:bg-DarkBlue dark:text-White">
        <div className="w-[80%] mx-auto flex justify-between items-center">
          <Link to={"/"} className="font-[800] text-2xl">Where in the world?</Link>
          
          <ThemeToggle />
        </div>
      </header>

      <main className="dark:bg-VeryDarkBlueBg">
        <Outlet />
      </main>

    </div>
  )
}

export default App