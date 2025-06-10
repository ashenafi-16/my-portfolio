"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, MapPin, Mail, Phone, User } from "lucide-react"

export default function About() {
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
          
          {/* Download Resume Button */}
          <div className="mt-8">
            <a href="/Ashenafi-Mulugeta.pdf" download>
              <Button className="gap-2 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 px-6 py-3 text-base">
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </a>
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