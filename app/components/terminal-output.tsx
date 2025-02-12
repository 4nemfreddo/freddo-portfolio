import React from "react"

interface TerminalOutputProps {
  children: React.ReactNode
  theme: {
    text: string
    highlightColor: string
  }
}

export default function TerminalOutput({ children, theme }: TerminalOutputProps) {
  return (
    <pre className={`${theme.text} mb-4 whitespace-pre-wrap text-sm`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === "strong") {
          return React.cloneElement(child, { className: theme.highlightColor })
        }
        return child
      })}
    </pre>
  )
}

