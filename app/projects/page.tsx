"use client"

import { motion } from "framer-motion"
import { Github, Code, BookOpen, CreditCard, Plane } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Traveling with Safer",
    description:
      "A comprehensive travel safety application that helps users plan safer journeys by providing real-time safety information, emergency contacts, and travel advisories.",
    icon: Plane,
    image: "/travel.png",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Json", "Maps API"],
    category: "Full-Stack Web App",
    github: "https://github.com/Mohammad-Joumaa/Traveling-with-Safer",
  },
  {
    title: "Mobile Banking System",
    description:
      "A secure and user-friendly mobile banking application with comprehensive financial management features, transaction history, and advanced security measures.",
    icon: CreditCard,
    image: "/mobile.png",
    technologies: ["Java"],
    category: "Mobile Application",
    github: "https://github.com/Mohammad-Joumaa/Mobile_project",
  },
  {
    title: "Library Management System",
    description:
      "A complete library management solution for educational institutions, featuring book cataloging, member management, and automated lending processes.",
    icon: BookOpen,
    image: "/Library.png",
    technologies: ["HTMl", "MySQL", "PHP", "JavaScript", "CSS"],
    category: "Desktop Application",
    github: "https://github.com/Mohammad-Joumaa/Library_system",
  },
  {
    title: "React.js Mini Projects Collection",
    description:
      "A collection of 7 interactive mini-projects showcasing various React.js concepts, patterns, and best practices for modern web development.",
    icon: Code,
    image: "reactmini.png",
    technologies: ["React.js", "TypeScript", "CSS3", "Local Storage"],
    category: "Frontend Showcase",
    github: "https://github.com/Mohammad-Joumaa/React-Mini",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            My <span className="text-gradient">Work</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A showcase of my technical skills and creativity through various projects, from full-stack web applications
            to mobile solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card/50 border-border/50 hover:border-primary/20 transition-all duration-300 h-full overflow-hidden group">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                  {/* Project Icon Overlay */}
                  <div className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-xs bg-primary/90 text-primary-foreground px-3 py-1 rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button className="w-full group/btn" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Source Code
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-orange-500/5 border-primary/20">
            <CardContent className="p-8">
              <Github className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Explore More on GitHub</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Check out my GitHub profile for more projects, contributions, and code samples. I'm always working on
                something new and exciting!
              </p>
              <Button size="lg" asChild>
                <a href="https://github.com/Mohammad-Joumaa" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Visit GitHub Profile
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
