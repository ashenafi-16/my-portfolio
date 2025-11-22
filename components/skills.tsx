"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const technicalSkills = [
    "Python", "Django", "FastAPI", "Java", "JavaScript", "SQL", "C++", 
    "HTML/CSS", "React", "Git", "GitHub", "Docker", "Celery", "Redis", 
    "PostgreSQL", "MySQL", "Linux", "K6", "Kubernetes", "CI/CD", "AWS"
  ]

  const conceptsSkills = [
    "Clean Architecture", "Microservices", "System Design", "Operating Systems",
    "Data Structures & Algorithms", "Object-Oriented Programming", 
    "Database Systems", "Leadership", "Team Work"
  ]

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Programming languages, frameworks, tools, and concepts I work with
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white text-center">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {technicalSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Concepts & Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-white text-center">
              Concepts & Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {conceptsSkills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="px-3 sm:px-4 py-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full text-xs sm:text-sm font-medium hover:bg-green-50 dark:hover:bg-slate-700 hover:text-green-700 dark:hover:text-green-400 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}