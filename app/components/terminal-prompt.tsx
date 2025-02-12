import type React from "react"

interface TerminalPromptProps {
  children: React.ReactNode
  theme: {
    promptColor: string
  }
}

export default function TerminalPrompt({ children, theme }: TerminalPromptProps) {
  return (
    <div className={`flex items-center ${theme.promptColor} mb-2`}>
      <span>{children}</span>
    </div>
  )
}

