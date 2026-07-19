"use client"

import type React from "react"
import { useState } from "react"

const fields = [
  { name: "name", label: "name, surname", placeholder: "yunus emre korkmaz", required: true, type: "text" },
  { name: "company", label: "company", placeholder: "apple computer, inc.", required: false, type: "text" },
  { name: "email", label: "email", placeholder: "example@example.com", required: true, type: "email" },
  { name: "phone", label: "phone", placeholder: "+90 (5__) ___ __ __", required: false, type: "tel" },
  { name: "subject", label: "subject", placeholder: "web app, mobile app, ui/ux design", required: false, type: "text" },
] as const

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
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
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
        >
          <span>&#9679;</span>
          {submitted ? "thanks, i'll reach out!" : "let's get started"}
        </button>
      </div>
    </form>
  )
}
