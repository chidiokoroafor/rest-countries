import { useEffect, useState } from 'react'
import { HiOutlineMoon } from "react-icons/hi";
import { IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = () => {
     const [isDarkMode, setIsDarkMode] = useState(false);

    // Update `isDarkMode` based on localStorage or default to system setting
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
    }
  }, []);
    
    useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    }, [isDarkMode]);
    

  return (
   <div  onClick={()=>setIsDarkMode(!isDarkMode)} className="flex items-center gap-4 cursor-pointer ">
          {isDarkMode ? <IoSunnyOutline /> : <HiOutlineMoon className="font-[600]" />}
    <p className="font-[600] text-lg">{isDarkMode ? 'Light':'Dark'} Mode</p>
    </div>
  )
}

export default ThemeToggle