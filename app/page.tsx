import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Education from "@/components/education"

export const metadata: Metadata = {
  title: "Ashenafi Mulugeta - Backend Developer",
  description: "Ashenafi Mulugeta's portfolio - Backend Developer & Software Engineering Student",
  generator: "v0.dev",
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
