"use client"

import { useState } from "react"
import { submitContactForm } from "../actions"
import TerminalPrompt from "./terminal-prompt"
import TerminalOutput from "./terminal-output"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setPending(true)
    try {
      const response = await submitContactForm(new FormData(e.target as HTMLFormElement))
      setMessage(response.message)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setMessage("Error: Message not sent. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <div>
      <TerminalPrompt>./send_message.sh</TerminalPrompt>
      <form onSubmit={handleSubmit} className="mb-4">
        <TerminalOutput>
          {`Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}

[Press Enter to submit]`}
        </TerminalOutput>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="bg-black text-green-400 w-full mb-2"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="bg-black text-green-400 w-full mb-2"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="bg-black text-green-400 w-full mb-2"
          placeholder="Message"
          required
        />
        <button type="submit" className="text-yellow-400" disabled={pending}>
          {pending ? "Sending..." : "Send"}
        </button>
      </form>
      {message && (
        <>
          <TerminalPrompt>echo $RESPONSE</TerminalPrompt>
          <TerminalOutput>{message}</TerminalOutput>
        </>
      )}
    </div>
  )
}

