"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Calendar, Award, Users, Quote } from "lucide-react"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const stats = [
  { label: "Years Experience", value: "3+", icon: Calendar },
  { label: "Projects Completed", value: "15+", icon: Award },
  { label: "Happy Clients", value: "10+", icon: Users },
]

const expertise = [
  "Full-Stack Development",
  "React & TypeScript",
  "Node.js & PHP",
  "Database Design",
  "API Development",
  "UI/UX Implementation",
]

const motivationalQuotes = [
  "Code is poetry written in logic.",
  "Innovation distinguishes between a leader and a follower.",
  "The best way to predict the future is to create it.",
  "Simplicity is the ultimate sophistication.",
  "Great software is built by great teams.",
]

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false)
  const [currentQuote, setCurrentQuote] = useState(0)

  const handleImageHover = () => {
    setIsHovered(true)
    setCurrentQuote(Math.floor(Math.random() * motivationalQuotes.length))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for new projects
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Mohammad</span>
              <br />
              <span className="text-gradient">Joumaa</span>
            </h1>

            <motion.h2
              className="text-2xl md:text-3xl text-muted-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full-Stack Software Engineer
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Specialized in building scalable web applications with modern technologies. Currently pursuing Master's
              degree while delivering innovative solutions for clients worldwide.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/projects" className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              
             <a href="/MohammadJoumaaCv.pdf" download>
  <Button variant="outline" size="lg" className="border-border hover:bg-muted bg-transparent flex items-center">
    <Download className="w-4 h-4 mr-2" />
    Download Resume
  </Button>
</a>
            </motion.div>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
  { icon: Github, href: "https://github.com/Mohammad-Joumaa", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-joumaa/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:mohammadajoummaa@gmail.com", label: "Email" },
]
.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Professional Photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Interactive Professional Photo */}
            <div className="relative mb-8">
              <motion.div
                className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-orange-500/20 border border-primary/20 flex items-center justify-center overflow-hidden cursor-pointer relative"
                onHoverStart={handleImageHover}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                  animate={{
                    backgroundPosition: isHovered ? ["0px 0px", "20px 20px"] : "0px 0px",
                  }}
                  transition={{ duration: 2, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                />

                {/* Main Content */}
                <AnimatePresence mode="wait">
                  {!isHovered ? (
                    <motion.div
                      key="photo"
                      className="text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Replace MJ with Actual Photo */}
                      <div className="w-32 h-37 rounded-full mx-auto mb-4 overflow-hidden border-4 border-white shadow-lg">
                        <img
                          src="/me.jpeg" // Place your image in public folder
                          alt="Mohammad Joumaa"  
                          className="w-full h-full object-cover"
                        />
                      </div>
                    
                    </motion.div>
                  ) : (
                    <motion.div
                      key="quote"
                      className="text-center p-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Quote className="w-12 h-12 text-primary mx-auto mb-4" />
                      <p className="text-lg font-medium text-foreground mb-2">"{motivationalQuotes[currentQuote]}"</p>
                      <p className="text-sm text-muted-foreground">- Mohammad Joumaa</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-primary/30"
                  animate={{
                    scale: isHovered ? [1, 1.05, 1] : 1,
                    opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Location Badge */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background border border-border rounded-full px-4 py-2 flex items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Nabatieh, Lebanon</span>
              </motion.div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                >
                  <Card className="bg-card/50 border-border/50 hover:border-primary/20 transition-colors">
                    <CardContent className="p-4 text-center">
                      <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 border-t border-border/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Core Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-card/30 border border-border/50 rounded-lg px-4 py-3 text-sm font-medium hover:border-primary/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
