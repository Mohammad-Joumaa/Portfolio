"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Smartphone, Cloud, Palette } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Frontend Development",
    description: "Creating beautiful, responsive user interfaces with React, TypeScript, and modern CSS frameworks.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Building robust server-side applications with Node.js, PHP, and database management.",
    technologies: ["Node.js", "PHP", "MySQL", "MongoDB"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with React Native and modern mobile technologies.",
    technologies: ["Java", "Mobile UI/UX"],
  },
  {
    icon: Cloud,
    title: "Full-Stack Solutions",
    description: "Delivering complete web applications from concept to deployment with clean, scalable code.",
    technologies: ["MERN Stack", "API Design", "AWS"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful user experiences with modern design principles.",
    technologies: ["Figma", "Design Systems", "Canva"],
  },
  {
    icon: Code,
    title: "Code Review & Consulting",
    description: "Providing code reviews, architecture consulting, and technical guidance for your projects.",
    technologies: ["Code Quality", "Architecture", "Best Practices"],
  },
]

export default function ServicesPage() {
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
            <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            I offer comprehensive development services to help bring your digital ideas to life with modern technologies
            and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-card/50 border-border/50 hover:border-primary/20 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-orange-500/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Let's discuss your requirements and create something amazing together. I'm here to help turn your vision
                into reality.
              </p>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
