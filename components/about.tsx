"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Mail, Phone, User } from "lucide-react"
import jsPDF from "jspdf"

export default function About() {
  const handleDownloadResume = () => {
    // Create a new PDF document
    const pdf = new jsPDF()

    // Set font to a standard font
    pdf.setFont("helvetica")
    pdf.setFontSize(12)

    // The exact resume content as provided by the user
    const resumeContent = `ASEHNAFI MULUGETA 
Ethiopia | Addis Ababa, Ethiopia | +251942233079 
ashumulugeta016@gmail.com | LinkedIn ashenafi-mulugeta-08a0672a6 
 
SUMMARY 
I am a third-year Software Engineering student at Addis Ababa Science and Technology University with strong backend 
development skills and hands-on experience in building real-world applications. 
 
EDUCATION 
Addis ababa science and technology university  February 2023 – June 2027 
● Degree: Bachelor of Science in Software Engineering (In Progress) 
● Field of Study: Software Engineering 
 
CERTIFICATIONS & TRAINING 
African Leadership X(ALX)                                                                                                                 June 2024 - December 2024  
● Course: Backend Development. 
● Completed a full backend curriculum covering Python, Django, APIs, authentication, and system design. 
 
GDG AASTU Backend Development Certification December 2024 - June 2025 
● Recognized for backend development excellence by Google Developer Group – AASTU. 
● Actively collaborated in a real-time capstone project, applying Django best practices to solve real-world problems. 
● Maintained perfect attendance and consistently delivered quality code in a team setting, demonstrating strong 
commitment, communication, and engineering discipline. 
 
A2SV (Africa to Silicon Valley) – In Progress 
● Participating in an advanced training program focused on Data Structures and Algorithms. 
● Actively solving complex problems on Codeforces and LeetCode. 
● Solved over 700 problems. 
 
PROJECTS                                                                                                                            
Task Management API 
● Developed a RESTful API for task and category management using Django REST Framework. 
● Implemented secure token-based user authentication (login, logout, registration) and built endpoints for managing 
tasks and categories (CRUD operations). 
● Created a notification system for task events and added activity logging to track user actions. 
 
Inventory Management System 
● Developed a retail inventory system using Python (OOP) and MySQL to manage products, suppliers, and sales. 
Implemented stock tracking, low-stock alerts, and demand forecasting with report generation. 
 
Study Buddy (Team Project) 
● Developed real-time chat, Pomodoro timers, and progress tracking features. 
● Used React.js and Tailwind CSS for the frontend, Django and PostgreSQL on the backend. 
● Implemented secure authentication with Django Allauth and JWT. 
Travel Habesha (Team Project) 
● Collaborated in a cross-functional team to build and test features using php and modern web tools. 
● Contributed to a travel planning web app providing booking and itinerary features. 
 
ADDITIONAL iNFORMATION 
  
  
● Technical skills: Python, Java, C++, JavaScript 
● Web & Backend: HTML, CSS, Django, REST APIs, MySQL, React 
● Social Skills: Teamwork, Problem-Solving 
● Languages: Amharic -  (Native), English – (Proficient)`

    // Split the content into lines
    const lines = resumeContent.split("\n")

    // Set initial position
    let y = 20
    const lineHeight = 7
    const margin = 20
    const pageWidth = 210
    const textWidth = pageWidth - margin * 2

    // Process each line
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      // Check if we need a new page
      if (y > 280) {
        pdf.addPage()
        y = 20
      }

      // Add the line to the PDF
      pdf.text(line, margin, y)
      y += lineHeight
    }

    // Save the PDF
    pdf.save("Asehnafi_Mulugeta_Resume.pdf")
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
            About
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
            I'm a third-year Software Engineering student at Addis Ababa Science and Technology University with a strong
            focus on backend development. I have hands-on experience building scalable APIs and web applications using
            Python, Django, and REST. I've completed backend training through ALX and GDG AASTU and am currently
            sharpening my problem-solving skills with A2SV, having solved over 700 algorithmic challenges. I'm
            passionate about clean code, teamwork, and building tech solutions that make an impact.
          </p>
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
                <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white">
                  Key Highlights
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      700+ Algorithmic Problems Solved
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">ALX & GDG AASTU Certified</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      A2SV Training Program Participant
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                    <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
                      Scalable API Development Experience
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center xl:text-left">
                <Button
                  onClick={handleDownloadResume}
                  className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 sm:p-6 shadow-sm">
              <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-slate-900 dark:text-white">Contact Details</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg flex-shrink-0">
                    <User className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500 dark:text-slate-400">Full Name</p>
                    <p className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">Asehnafi Mulugeta</p>
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
                    <p className="font-medium text-slate-900 dark:text-white text-sm sm:text-base">+251942233079</p>
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
