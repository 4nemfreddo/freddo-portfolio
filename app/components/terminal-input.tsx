"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"

interface TerminalInputProps {
  onCommand: (command: string) => void
  currentPath: string
  theme: {
    promptColor: string
    text: string
  }
}

export default function TerminalInput({ onCommand, currentPath, theme }: TerminalInputProps) {
  const [input, setInput] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onCommand(input.trim())
      setInput("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <span className={`mr-2 ${theme.promptColor}`}>{currentPath}$</span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`flex-grow bg-transparent outline-none ${theme.text}`}
        autoFocus
      />
    </form>
  )
}

