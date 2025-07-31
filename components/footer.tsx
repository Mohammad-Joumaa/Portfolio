"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone, Calendar, ExternalLink, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Experience", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

const services = [
  { name: "Web Development", href: "/services" },
  { name: "Mobile Apps", href: "/services" },
  { name: "API Development", href: "/services" },
  { name: "Database Design", href: "/services" },
  { name: "UI/UX Design", href: "/services" },
 
]

const socialLinks =[
  { icon: Github, href: "https://github.com/Mohammad-Joumaa", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-joumaa/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mohammadajoummaa@gmail.com", label: "Email" },
]


const contactInfo = [
  { icon: MapPin, label: "Location", value: "Nabatieh, Lebanon" },
  { icon: Phone, label: "Phone", value: "+961 76 624 296" },
  { icon: Mail, label: "Email", value: "mohammadajoummaa@gmail.com" },
  { icon: Calendar, label: "Availability", value: "Available for new projects" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-primary mb-4">Mohammad Joumaa</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Full-Stack Software Engineer specializing in modern web technologies. Building scalable applications and
                delivering exceptional user experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg border border-border/50 hover:border-primary/20 hover:bg-primary/10 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4">Quick Link</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link href={service.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-semibold mb-4">Get In Touch</h4>
              <ul className="space-y-3">
                {contactInfo.map((info) => (
                  <li key={info.label} className="flex items-start gap-3">
                    <info.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-medium">{info.label}</div>
                      <div className="text-sm text-muted-foreground">{info.value}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="w-full">
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-border/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
            <span>© {currentYear} Mohammad Joumaa. All rights reserved.</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
