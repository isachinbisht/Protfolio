"use client"

import type React from "react"
import { useState } from "react"

const fields = [
  { name: "name", label: "name, surname", placeholder: "sachin bisht", required: true, type: "text" },
  { name: "company", label: "company", placeholder: "apple computer, inc.", required: false, type: "text" },
  { name: "email", label: "email", placeholder: "example@example.com", required: true, type: "email" },
  { name: "phone", label: "phone", placeholder: "+91___________", required: false, type: "tel" },
  { name: "subject", label: "subject", placeholder: "web app, mobile app, ui/ux design", required: false, type: "text" },
] as const

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "35ed5b18-3424-44af-bbc1-f538d79b93d1")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setSubmitted(true)
        e.currentTarget.reset()
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-2">
          <label htmlFor={field.name} className="text-lg font-medium text-foreground">
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            required={field.required}
            placeholder={field.placeholder}
            className="w-full border-b border-foreground/15 bg-transparent pb-2 text-base text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary"
          />
        </div>
      ))}

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-lg font-medium text-foreground">
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          placeholder="describe whatever you want."
          className="w-full resize-none border-b border-foreground/15 bg-transparent pb-2 text-base text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-primary"
        />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading || submitted}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
        >
          <span>&#9679;</span>
          {loading ? "sending..." : submitted ? "thanks, i'll reach out!" : "let's get started"}
        </button>
      </div>
    </form>
  )
}
