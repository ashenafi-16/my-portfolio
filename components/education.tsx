"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "Addis Ababa Science and Technology University",
      degree: "Bachelor of Science in Software Engineering",
      period: "September 2020 – August 2025",
      description: "Relevant coursework: Distributed Systems, Machine Learning, Programming, Networking, Operating Systems, Data Structures & Algorithms, Object-Oriented Programming, System Design & Analysis, Database Systems.",
    },
  ]

  const certifications = [
    {
      organization: "African Leadership X (ALX)",
      title: "Backend Development",
      period: "June 2024 – October 2025",
      description: "Intensive Backend Development Curriculum focused on mastering Python and Django, complemented by in-depth system design principles. Advanced studies include containerization with Docker, orchestration using Kubernetes, and sophisticated database optimization techniques for high performance.",
    },
    {
      organization: "Africa to Silicon Valley (A2SV)",
      title: "Data Structures and Algorithms",
      period: "March 2023 – March 2025",
      description: "Successfully completed a rigorous 30+ hours per week curriculum focused on DSA. Mastered advanced concepts through weekly lectures, contests, mock interviews, and pair programming. Solved 700+ Codeforces & LeetCode algorithmic problems.",
    },
  ]

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
            Education & Certifications
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Academic background and professional certifications
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-16"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
              <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              Education
            </h3>
            <div className="grid grid-cols-1 gap-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2 sm:gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-slate-900 dark:text-white leading-tight">
                        {edu.degree}
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-3">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="text-sm">{edu.period}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
              <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              Certifications & Training
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 shadow-sm h-full flex flex-col"
                >
                  <h4 className="text-base sm:text-lg font-semibold mb-2 text-slate-900 dark:text-white leading-tight">
                    {cert.title}
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-medium mb-3 text-sm sm:text-base">
                    {cert.organization}
                  </p>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-3">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{cert.period}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed flex-1">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}