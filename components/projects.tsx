"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Task Management API",
      description:
        "Developed a RESTful API for task and category management using Django REST Framework. Implemented secure token-based user authentication and built endpoints for managing tasks and categories with CRUD operations. Created notification system for task events and activity logging.",
      technologies: ["Django", "Django REST Framework", "Token Authentication", "Python", "MySQL"],
      githubUrl: "https://github.com/ashenafi-16/Task_Management_API",
    },
    {
      id: 2,
      title: "Study Buddy - Academic Collaboration Platform",
      description:
        "Implemented JWT authentication and social login integration to ensure secure, flexible user access in a Django application. Developed a real-time chat feature using WebSockets and Redis, with RabbitMQ as a message broker for efficient asynchronous communication. Optimized application performance through database indexing and caching strategies.",
      technologies: ["Django", "WebSockets", "Redis", "RabbitMQ", "JWT", "PostgreSQL"],
      githubUrl: "https://github.com/ashenafi-16/StudyBuddy",
    },
    {
      id: 3,
      title: "AASTU ID Card Replacement System",
      description:
        "Developed and deployed a full-stack JavaFX application to manage student ID card replacements for 7,500+ students, reducing average processing time from 5 days to 1 day (80% faster). Implemented secure, role-based authentication and admin controls. Introduced real-time request tracking and reporting, decreasing administrative workload by 45%.",
      technologies: ["Java", "JavaFX", "MySQL", "Role-based Auth", "Reporting"],
      githubUrl: "https://github.com/ashenafi-16/ID-card-Replacement-system",
    },
    {
      id: 4,
      title: "Movie Recommendation System",
      description:
        "Built a scalable backend for a movie recommendation platform, delivering personalized suggestions to over 95% of users and supporting a 20% increase in premium subscriptions. Designed and secured RESTful APIs with Celery/Redis job processing, OTP verification, and rate-limiting, achieving a 30% reduction in response times.",
      technologies: ["Django", "Celery", "Redis", "REST APIs", "JWT", "Payment Integration"],
      githubUrl: "https://github.com/ashenafi-16/movie-recommendation",
    },
    {
      id: 6,
      title: "Inventory Management System",
      description:
        "Developed a retail inventory system using Python (OOP) and MySQL to manage products, suppliers, and sales. Implemented stock tracking, low-stock alerts, and demand forecasting with report generation.",
      technologies: ["Python", "MySQL", "OOP", "Data Analysis", "Report Generation"],
      githubUrl: "https://github.com/ashenafi-16/Inventory_management_system",
    },
    {
      id: 7,
      title: "Travel Habesha (Team Project)",
      description:
        "Collaborated in a cross-functional team to build and test features using PHP and modern web tools. Contributed to a travel planning web app providing booking and itinerary features.",
      technologies: ["PHP", "JavaScript", "MySQL", "HTML", "CSS"],
      githubUrl: "https://github.com/Amirabdela/Travel-web-backend",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real-world applications and systems I've built with measurable impact
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-l-blue-600 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed text-sm flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={project.githubUrl ? "outline" : "secondary"}
                      className={`gap-2 flex-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 ${
                        !project.githubUrl ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      asChild={!!project.githubUrl}
                      disabled={!project.githubUrl}
                    >
                      {project.githubUrl ? (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      ) : (
                        <>
                          <Github className="h-4 w-4" />
                          Code Private
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6">Want to see more of my work?</p>
          <Button
            variant="outline"
            className="gap-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
            asChild
          >
            <a href="https://github.com/ashenafi-16" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}