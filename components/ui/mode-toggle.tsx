"use client"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useRef, KeyboardEvent, useState, useEffect } from "react"
import DeviceIcon from "../icons/device"
import { Label } from "./label"

const THEMES = ["system", "light", "dark"] as const
type Theme = (typeof THEMES)[number]

export function ModeToggle() {
    const groupRef = useRef<HTMLDivElement>(null)
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // 🚨 Prevent hydration mismatch
    if (!mounted) {
        return (
            <div className="flex h-[32px] w-[90px] rounded-full bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
        )
    }


    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return

        e.preventDefault()
        const currentIndex = THEMES.indexOf((theme as Theme) ?? "system")
        const nextIndex =
            e.key === "ArrowRight"
                ? (currentIndex + 1) % THEMES.length
                : (currentIndex - 1 + THEMES.length) % THEMES.length

        const nextTheme = THEMES[nextIndex]
        setTheme(nextTheme)

        // Move focus to the newly selected label
        const labels = groupRef.current?.querySelectorAll<HTMLElement>("[role='radio']")
        labels?.[nextIndex]?.focus()
    }

    return (
        <div
            ref={groupRef}
            role="radiogroup"
            aria-label="Color theme"
            onKeyDown={handleKeyDown}
            className="flex justify-self-start items-start border border-neutral-200 dark:border-neutral-800 rounded-full"
        >
            {/* System */}
            <Label
                role="radio"
                aria-checked={theme === "system"}
                aria-label="System theme"
                tabIndex={theme === "system" ? 0 : -1}
                onClick={() => setTheme("system")}
                onKeyDown={(e) => e.key === " " && setTheme("system")}
                className="flex p-1.5 cursor-pointer rounded-full border-r border-transparent aria-checked:border-r aria-checked:border-neutral-200 dark:aria-checked:border-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500"
            >
                <DeviceIcon />
                <span className="sr-only">System</span>
            </Label>

            {/* Light */}
            <Label
                role="radio"
                aria-checked={theme === "light"}
                aria-label="Light theme"
                tabIndex={theme === "light" ? 0 : -1}
                onClick={() => setTheme("light")}
                onKeyDown={(e) => e.key === " " && setTheme("light")}
                className="flex p-1.5 cursor-pointer rounded-full border border-transparent aria-checked:border-neutral-200 dark:aria-checked:border-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500"
            >
                <Sun className="h-4 w-4" />
                <span className="sr-only">Light</span>
            </Label>

            {/* Dark */}
            <Label
                role="radio"
                aria-checked={theme === "dark"}
                aria-label="Dark theme"
                tabIndex={theme === "dark" ? 0 : -1}
                onClick={() => setTheme("dark")}
                onKeyDown={(e) => e.key === " " && setTheme("dark")}
                className="flex p-1.5 cursor-pointer rounded-full border-l border-transparent aria-checked:border-l aria-checked:border-neutral-200 dark:aria-checked:border-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-500"
            >
                <Moon className="h-4 w-4" />
                <span className="sr-only">Dark</span>
            </Label>
        </div>
    )
}
