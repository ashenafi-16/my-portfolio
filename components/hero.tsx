"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { SpaceBackground } from "@/components/space-background"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToNext = () => {
    const nextSection = document.getElementById("about")
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900"
      ref={scrollRef}
    >
      <div className="dark:block hidden">
        <SpaceBackground />
      </div>
      <Header />
      <div className="container mx-auto px-4 pt-16 flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="inline-block rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-medium mb-3">
            Welcome to my portfolio
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 text-slate-900 dark:text-white"
        >
          <span className="text-blue-600 dark:text-blue-400">Ashenafi Mulugeta</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed"
        >
          A passionate <span className="text-slate-800 dark:text-slate-200 font-semibold">Backend Developer</span> and
          Software Engineering student building scalable solutions
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-16"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToNext}
            className="animate-bounce hover:animate-none bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition-all duration-200"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
