"use client"

import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    company: "Hirlytics",
    position: "Full-Stack Developer",
    period: "February 2025 – Present",
    location: "Remote",
    description:
      "Developing comprehensive web applications with modern technologies, focusing on user experience and scalable architecture.",
    technologies: ["React", "TypeScript", "PHP", "MySQL", "API Integration"],
    achievements: [
      "Built responsive user interfaces with React and TypeScript",
      "Developed robust backend APIs with PHP and MySQL",
      "Implemented seamless third-party API integrations",
      "Optimized application performance and user experience",
    ],
    current: true,
  },
  {
    company: "The Pixel Company",
    position: "Frontend Developer",
    period: "August 2024 – September 2024",
    location: "Beirut, Lebanon",
    description: "Focused on creating pixel-perfect, responsive web interfaces using modern frontend technologies.",
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    achievements: [
      "Developed responsive web layouts using Bootstrap framework",
      "Implemented modern CSS techniques for enhanced user interfaces",
      "Collaborated with design team to ensure pixel-perfect implementations",
      "Optimized websites for cross-browser compatibility",
    ],
    current: false,
  },
  {
    company: "Coding and Create",
    position: "React.js Developer",
    period: "June 2024 – August 2024",
    location: "Beirut, Lebanon",
    description:
      "Specialized in React.js development, creating interactive web applications and reusable component libraries.",
    technologies: ["React.js", "JavaScript", "CSS3", "Git"],
    achievements: [
      "Developed 7+ mini projects showcasing React.js capabilities",
      "Created reusable component libraries for faster development",
      "Implemented state management solutions for complex applications",
      "Mentored junior developers on React best practices",
    ],
    current: false,
  },
]

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Experiences</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            My professional journey as a software developer, building innovative solutions and growing with each
            project.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`bg-card/50 border-border/50 hover:border-primary/20 transition-all duration-300 ${
                  exp.current ? "ring-1 ring-primary/20" : ""
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-semibold">{exp.position}</h3>
                        {exp.current && (
                          <span className="text-xs bg-green-400/10 text-green-400 px-2 py-1 rounded border border-green-400/20">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-medium text-primary">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h5 className="font-medium mb-2 text-sm">Technologies</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="font-medium mb-2 text-sm">Key Achievements</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
