"use client"

import { Shadow , Fire } from "lucide-react"
import { useTheme } from "next-themes"

const ToggleDarkLightMode = () => {
  const { theme, setTheme } = useTheme()

  const handleToggleThemeMode = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const IconMode = theme === "dark" ? Shadow : Fire

  return <IconMode role="button" className="w-4 h-4" onClick={handleToggleThemeMode} />
}

export default ToggleDarkLightMode
