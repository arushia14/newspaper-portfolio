"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface ContactFormProps {
  onSubmitSuccess: () => void
}

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch("https://formspree.io/f/xgvkdlep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        onSubmitSuccess()
      } else {
        alert("Failed to send message.")
      }
    } catch (err) {
      alert("An error occurred.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-serif">
      <h3 className="text-center text-lg font-bold mb-4">Send a Telegraph</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="name" className="font-bold text-sm">
            Your Name
          </Label>
          <Input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border-gray-900 dark:border-gray-100 bg-amber-50 dark:bg-gray-800 h-8"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email" className="font-bold text-sm">
            Telegraph Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border-gray-900 dark:border-gray-100 bg-amber-50 dark:bg-gray-800 h-8"
          />
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="subject" className="font-bold text-sm">
          Subject of Correspondence
        </Label>
        <Input
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="border-gray-900 dark:border-gray-100 bg-amber-50 dark:bg-gray-800 h-8"
        />
      </div>
      <div className="space-y-1">
        <Label htmlFor="message" className="font-bold text-sm">
          Your Message
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="border-gray-900 dark:border-gray-100 bg-amber-50 dark:bg-gray-800"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900 font-serif uppercase tracking-wider"
      >
        Send Telegraph
      </Button>
    </form>
  )
}
