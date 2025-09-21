"use client"

import { useState } from "react"
import { Moon, Sun, Github, Linkedin } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"

export default function Newspaper() {
  const { theme, setTheme } = useTheme()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-amber-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Theme Toggle */}
        <div className="absolute right-4 top-4 z-10">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full border-gray-800 dark:border-gray-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </Button>
        </div>

        {/* Newspaper Header */}
        <div className="border-b-4 border-double border-gray-900 dark:border-gray-100 pb-4 mb-6">
          <div className="text-center">
            <p className="text-sm font-serif italic mb-2">Est. MMXXIV | {currentDate}</p>
            <h1 className="font-old-english text-6xl sm:text-6xl font-black tracking-tight mb-2 leading-none">
              THE DEVELOPER CHRONICLE
            </h1>
            <div className="flex justify-center items-center gap-2 text-xs uppercase tracking-widest font-serif">
              <span>Vol. XXIV</span>
              <span className="w-1 h-1 rounded-full bg-gray-900 dark:bg-gray-100"></span>
              <span>No. 42</span>
              <span className="w-1 h-1 rounded-full bg-gray-900 dark:bg-gray-100"></span>
              <span>Price: Your Attention</span>
            </div>
          </div>
        </div>

        {/* Headline Section */}
        <div className="border-b-2 border-gray-900 dark:border-gray-100 mb-6">
          <h2 className="font-bold font-serif text-4xl sm:text-4xl text-center mb-4 uppercase tracking-tight">
            Arushi Agarwal Takes Tech World By Storm
          </h2>
          <p className="text-center font-serif italic mb-4">
            "Versatile talent combines AI, frontend, and full-stack expertise"
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
          {/* Profile Image Column */}
          <div className="md:col-span-4 lg:col-span-3 space-y-6">
            <div className="border-2 border-gray-900 dark:border-gray-100 p-2 bg-white dark:bg-gray-800">
              <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center p-4">
                  <img
                    src="/avatar.png"
                    alt="Profile photo of Arushi"
                    className="mx-auto w-full h-full object-cover border-4 border-gray-300 dark:border-gray-600 shadow-md"
                  />
                  <p className="text-sm mt-2 font-serif">Arushi Agarwal, Software Engineer</p>
                </div>
              </div>
              <p className="text-xs font-serif text-center mt-2 italic">
                Ms. Agarwal, pictured above, has established herself as a leading innovator in the tech industry.
              </p>
            </div>

            <div className="border-t-2 border-b-2 border-gray-900 dark:border-gray-100 py-4">
              <h3 className="font-serif text-xl font-bold uppercase text-center mb-2">About The Engineer</h3>
              <p className="font-serif leading-tight text-sm">
                <span className="float-left text-4xl font-bold mr-1 mt-1 font-serif">V</span>
                ersatile Software Engineer specializing in frontend, full-stack, and AI-driven applications. Passionate
                about seamless user experiences, automation, and solving complex technical challenges.
              </p>
              <div className="flex justify-center items-center mt-2">
                <a
                  href="https://github.com/arushia14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/arushia14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="border-2 border-gray-900 dark:border-gray-100 p-4 bg-white dark:bg-gray-800">
              <h3 className="font-serif text-lg font-bold uppercase text-center mb-2">Weather Forecast</h3>
              <p className="font-serif text-sm text-center">
                The tech climate remains favorable for innovation, with occasional bursts of inspiration and steady
                streams of productivity.
              </p>
            </div>
          </div>

          {/* Main Articles Column */}
          <div className="md:col-span-8 lg:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Work Experience - Takes 2 columns on large screens */}
              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl font-bold uppercase border-b-2 border-gray-900 dark:border-gray-100 pb-1">
                  Distinguished Career Path Revealed
                </h3>

                <div className="space-y-4 font-serif text-sm [column-count:1] sm:[column-count:2] [column-rule:1px_solid_#1f2937] dark:[column-rule:1px_solid_#f3f4f6] [column-gap:2rem]">
                  <div className="break-inside-avoid-column mb-4">
                    <h4 className="text-base font-bold">
                      <a
                        href="#"
                        className="underline hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        Prompt360.ai
                      </a>
                    </h4>
                    <p className="italic mb-1 text-xs">Software Engineer</p>
                    <p className="leading-tight">
                    At a fledgling pre-seed startup shrouded in stealth, she crafted the product's entire frontend (from wireframes to polished designs in Figma) and then brought it to life with a modular NextJS interface. Tightly coupled with backend APIs and websockets, her work powered key features like LLM responses and connectors. Working hand-in-hand with founders, she swiftly refined the MVP through user tests and investor demos.
                    </p>
                  </div>

                  <div className="break-inside-avoid-column mb-4">
                    <h4 className="text-base font-bold">
                      <a
                        href="https://chaossearch.io"
                        className="underline hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        ChaosSearch
                      </a>
                    </h4>
                    <p className="italic mb-1 text-xs">Software Engineer</p>
                    <p className="leading-tight">
                      In a remarkable display of technical prowess, Arushi developed and improved OpenSearch
                      Dashboards, successfully migrated critical APIs, and implemented key scalability features that
                      industry analysts are calling "game-changing."
                    </p>
                  </div>

                  <div className="break-inside-avoid-column mb-4">
                    <h4 className="text-base font-bold">
                      <a href="https://tesla.com" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        Tesla
                      </a>
                    </h4>
                    <p className="italic mb-1 text-xs">Software Engineer Intern</p>
                    <p className="leading-tight">
                      Our sources confirm a complete redesign of the DataViz app under Arushi's direction,
                      significantly improving data visualization capabilities for all Tesla factories worldwide.
                      Additionally, API performance enhancements have resulted in measurable productivity gains.
                    </p>
                  </div>

                  <div className="break-inside-avoid-column mb-4">
                    <h4 className="text-base font-bold">
                      <a href="https://amazon.com" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        Amazon Robotics
                      </a>
                    </h4>
                    <p className="italic mb-1 text-xs">Software Engineer Co-op</p>
                    <p className="leading-tight">
                      In what industry insiders are calling a technological breakthrough, Arushi created a proprietary
                      React component library that revolutionized real-time robot data visualizations. The
                      TypeScript-based scalable UIs have set new standards for efficiency and usability.
                    </p>
                  </div>

                  <div className="break-inside-avoid-column mb-4">
                    <h4 className="text-base font-bold">
                      <a
                        href="https://northeastern.edu"
                        className="underline hover:text-gray-600 dark:hover:text-gray-300"
                      >
                        Northeastern University IT Services
                      </a>
                    </h4>
                    <p className="italic mb-1 text-xs">UX Research</p>
                    <p className="leading-tight">
                      Through rigorous UX research, Arushi improved the student portal experience by an impressive 16%,
                      according to university metrics. Student satisfaction ratings have reached all-time highs
                      following these enhancements.
                    </p>
                  </div>

                  <div className="break-inside-avoid-column mb-4">
                    <h4 className="text-base font-bold">
                      <a href="https://csir.res.in" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        Council of Scientific and Industrial Research
                      </a>
                    </h4>
                    <p className="italic mb-1 text-xs">Machine Learning Intern</p>
                    <p className="leading-tight">
                      In a breakthrough for medical research, Arushi built ML models for cancer research that reduced
                      wet lab experiment time by 40%. Scientists have praised this contribution as "potentially
                      life-saving" by accelerating the research process.
                    </p>
                  </div>

                  <div className="break-inside-avoid-column mb-4">
                    <h4 className="text-base font-bold">
                      <a href="https://tum.de" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        Technical University of Munich
                      </a>
                    </h4>
                    <p className="italic mb-1 text-xs">Machine Learning Intern</p>
                    <p className="leading-tight">
                      Developing cutting-edge survival prediction models for fish in hydroelectric turbines using
                      TensorFlow, Arushi's work has been recognized as a significant contribution to sustainable energy
                      practices and wildlife conservation efforts.
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects Column - Takes 1 column on large screens */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold uppercase border-b-2 border-gray-900 dark:border-gray-100 pb-1">
                  Notable Projects
                </h3>

                <div className="space-y-4 font-serif text-sm">
                  <div className="mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <h4 className="text-base font-bold">
                      <a href="https://huggingface.co/spaces/arushia14/arushis_career_agent" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        Arushi's Career Agent
                      </a>
                    </h4>
                    <p className="leading-tight">
                      An agent made in Python that specializes in Arushi's career journey and skills. 
                    </p>
                  </div>
                  
                  <div className="mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <h4 className="text-base font-bold">
                      <a href="https://github.com/arushia14/eli5-chrome-extension" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        ELI5 Chrome Extension
                      </a>
                    </h4>
                    <p className="leading-tight">
                      AI-powered text simplifier making complex content accessible to all reading levels.
                    </p>
                  </div>

                  <div className="mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <h4 className="text-base font-bold">
                      <a href="https://github.com/arushia14/llm-book-recommender" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        LLM Book Recommender
                      </a>
                    </h4>
                    <p className="leading-tight">
                      Deployed using Gradio, this NLP-powered system provides intelligent book suggestions.
                    </p>
                  </div>

                  <div className="mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <h4 className="text-base font-bold">
                      <a href="https://github.com/arushia14/personal-ai-assistant" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        Personal AI Assistant
                      </a>
                    </h4>
                    <p className="leading-tight">
                      OpenAI-powered chatbot answering recruiter queries with remarkable efficiency.
                    </p>
                  </div>

                  <div className="mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <h4 className="text-base font-bold">
                      <a href="https://github.com/arushia14/flappy-space-game" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        Flappy Space Game
                      </a>
                    </h4>
                    <p className="leading-tight">
                      A space-themed version of the classic game that critics are calling "addictively challenging."
                    </p>
                  </div>

                  <div className="mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <h4 className="text-base font-bold">
                      <a href="https://github.com/arushia14/mp3-player-project" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        MP3 Player Project
                      </a>
                    </h4>
                    <p className="leading-tight">
                      JavaScript-based MP3 player featuring custom UI and advanced playback features.
                    </p>
                  </div>

                  <div className="mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <h4 className="text-base font-bold">
                      <a href="https://github.com/arushia14/pixale-photo-share" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        Pixale Photo Share
                      </a>
                    </h4>
                    <p className="leading-tight">JavaScript app enabling efficient photo search and download.</p>
                  </div>

                  <div className="mb-3 pb-3 border-b border-gray-300 dark:border-gray-700">
                    <h4 className="text-base font-bold">
                      <a href="https://github.com/arushia14/heart-failure-prediction" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        Heart Failure Prediction
                      </a>
                    </h4>
                    <p className="leading-tight">
                      Machine learning model using Python for heart failure risk analysis.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base font-bold">
                      <a href="https://github.com/arushia14/simple-mini-shell" className="underline hover:text-gray-600 dark:hover:text-gray-300">
                        Mini Shell
                      </a>
                    </h4>
                    <p className="leading-tight">A minimal shell program written in C for command-line execution.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Classifieds Section */}
        <div className="border-t-4 border-b-4 border-double border-gray-900 dark:border-gray-100 py-6 my-8">
          <h2 className="font-serif text-3xl font-bold uppercase text-center mb-6">Technical Classifieds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 font-serif text-xs">
            <div className="border border-gray-900 dark:border-gray-100 p-2">
              <p className="font-bold">FRONTEND SPECIALIST</p>
              <p>Expert in React, TypeScript, and modern CSS. Responsive design solutions for all screen sizes.</p>
            </div>
            <div className="border border-gray-900 dark:border-gray-100 p-2">
              <p className="font-bold">AI/ML CONSULTANT</p>
              <p>Experienced in TensorFlow, PyTorch, and NLP. Custom ML solutions for complex problems.</p>
            </div>
            <div className="border border-gray-900 dark:border-gray-100 p-2">
              <p className="font-bold">FULL STACK DEVELOPER</p>
              <p>End-to-end application development with modern frameworks. Scalable architecture design.</p>
            </div>
            <div className="border border-gray-900 dark:border-gray-100 p-2">
              <p className="font-bold">DATA VISUALIZATION</p>
              <p>Transform complex data into intuitive visualizations. Custom dashboards and reporting tools.</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mb-8">
          <div className="border-b-2 border-gray-900 dark:border-gray-100 pb-2 mb-6">
            <h2 className="font-serif text-2xl font-bold uppercase">Correspondence</h2>
            <p className="font-serif italic">Letters to the Engineer</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-6 border-2 border-gray-900 dark:border-gray-100">
            {formSubmitted ? (
              <div className="text-center font-serif">
                <h3 className="text-xl font-bold mb-2">Message Received!</h3>
                <p>
                  Thank you for your correspondence. Ms. Arushi will review your message and respond at her earliest
                  convenience.
                </p>
              </div>
            ) : (
              <ContactForm onSubmitSuccess={() => setFormSubmitted(true)} />
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-10 pt-6 border-t-2 border-gray-900 dark:border-gray-100 text-center font-serif text-xs">
          <p>© {new Date().getFullYear()} The Arushi Herald. All Rights Reserved.</p>
          <p className="mt-2">This newspaper-styled portfolio was crafted with Next.js and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  )
}
