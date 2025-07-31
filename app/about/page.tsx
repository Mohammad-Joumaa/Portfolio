"use client"

import { motion } from "framer-motion"
import { GraduationCap, Heart, Languages, Target, Users, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <motion.div className="max-w-4xl mx-auto" variants={containerVariants} initial="hidden" animate="visible">
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">About</span> Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            A passionate full-stack developer with a strong foundation in computer Engineering and a drive for continuous
            learning and innovation.
          </p>
        </motion.div>

        {/* Education */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>

          <div className="space-y-6">
            <Card className="bg-card/50 border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Master of Science in Computer & Communication Engineering </h3>
                  <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded">Currently Pursuing</span>
                </div>
                <p className="text-muted-foreground">
                  Advanced studies in software engineering, algorithms, and system design.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Bachelor of Science in Computer Engineering</h3>
                  <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">Completed</span>
                </div>
                <p className="text-muted-foreground">
                  Strong foundation in programming, data structures, and software development principles.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Key Strengths */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Key Strengths</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Target, title: "Problem Solving", description: "Analytical thinking and creative solutions" },
              { icon: Zap, title: "Scalable Code", description: "Writing maintainable, efficient code" },
              { icon: Heart, title: "Clean UI", description: "Designing intuitive user experiences" },
              { icon: Users, title: "Time Management", description: "Delivering projects on time" },
            ].map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border/50 hover:border-primary/20 transition-colors h-full">
                  <CardContent className="p-6">
                    <strength.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{strength.title}</h3>
                    <p className="text-muted-foreground">{strength.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Languages */}
        <motion.section variants={itemVariants}>
          <div className="flex items-center gap-3 mb-8">
            <Languages className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Languages</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { language: "Arabic", level: "Native", flag: "🇱🇧" },
              { language: "English", level: "Fluent", flag: "🇺🇸" },
              { language: "French", level: "Conversational", flag: "🇫🇷" },
            ].map((lang, index) => (
              <motion.div
                key={lang.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border/50 hover:border-primary/20 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2">{lang.flag}</div>
                    <h3 className="font-semibold">{lang.language}</h3>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}
