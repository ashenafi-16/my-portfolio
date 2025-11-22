"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Mail, Phone, User, Shield, Zap, Code } from "lucide-react"
import { useEffect, useState } from "react"

export default function About() {
  const [baseUrl, setBaseUrl] = useState("")

  useEffect(() => {
    // Set the base URL once component mounts on client side
    setBaseUrl(window.location.origin)
  }, [])

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault()
    // Use absolute URL for the PDF
    const pdfUrl = `${baseUrl}/downloads/resume.pdf`
    window.open(pdfUrl, '_blank')
  }

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-4xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            Passionate Full-Stack Developer specializing in building scalable, high-performance systems. With expertise in 
            <span className="font-semibold text-slate-900 dark:text-white"> Python, Django, React, and distributed systems</span>, 
            I create robust solutions that handle real-world challenges. From optimizing ERP systems managing 1000+ monthly transactions 
            to developing real-time collaboration platforms, I thrive on solving complex problems with elegant, efficient code.
          </p>
          
          {/* Download Resume Button */}
          <div className="mt-8">
            <Button 
              onClick={handleDownload}
              className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 text-base font-medium"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8"
          >
            {/* Key Highlights */}
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  Key Achievements
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium">
                        700+ Algorithmic Problems Solved
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                        Codeforces & LeetCode - Advanced problem-solving skills
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium">
                        Backend Development Excellence
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                        ALX & A2SV certified - Mastered Python, Django, System Design
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium">
                        Production System Optimization
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                        80% faster processing, 99.9% security improvement in real projects
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 mt-2"></div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium">
                        Scalable Architecture Design
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                        Microservices, Docker, Kubernetes, CI/CD pipelines
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Focus */}
            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 shadow-sm">
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  Technical Focus
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Backend</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Django • FastAPI</p>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Frontend</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">React • JavaScript</p>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Databases</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">PostgreSQL • Redis</p>
                  </div>
                  <div className="text-center p-3 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">DevOps</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Docker • AWS • K8s</p>
                  </div>
                </div>
              </div>

              {/* Contact & Availability */}
              <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                      <User className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400">Full Name</p>
                      <p className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">Ashenafi Mulugeta</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                      <p className="font-medium text-slate-900 dark:text-white text-xs sm:text-sm break-all">
                        ashumulugeta016@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400">Phone</p>
                      <p className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">+251 942 233 079</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400">Location</p>
                      <p className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-400 rounded-lg">
                      <Shield className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-900 dark:text-green-100 text-sm sm:text-base">
                        Open to Opportunities
                      </h4>
                      <p className="text-green-700 dark:text-green-300 text-xs mt-1">
                        Available for full-stack and backend development roles
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}