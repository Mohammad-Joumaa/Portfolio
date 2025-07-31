"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color = "#f97316" }) => {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = `${circumference} ${circumference}`
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-muted/20"
        />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-primary">{percentage}%</span>
      </div>
    </div>
  )
}

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: Globe,
    color: "#f97316",
    skills: [
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "JavaScript", level: 90 },
      { name: "HTML5/CSS3", level: 95 },
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "#10b981",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "PHP", level: 70 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Express.js", level: 75 },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "#8b5cf6",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
      { name: "PHP", level: 70 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Zap,
    color: "#f59e0b",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Linux", level: 70 },
     
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
    ],
  },
]

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Skills</span> & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across different technologies and
            tools I use to build exceptional applications.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <Card className="bg-card/50 border-border/50 hover:border-primary/20 transition-colors h-full">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold">{category.title}</h2>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="mb-4 flex justify-center">
                          <CircularProgress
                            percentage={skill.level}
                            size={100}
                            strokeWidth={6}
                            color={category.color}
                          />
                        </div>
                        <h3 className="font-medium text-sm">{skill.name}</h3>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Professional Development */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-orange-500/5 border-primary/20">
            <CardContent className="p-8">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Continuous Professional Development</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Technology evolves rapidly, and I stay ahead of the curve through continuous learning, attending
                conferences, and contributing to open-source projects.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Machine Learning",
                  "Cloud Architecture",
                  "Microservices",
                  "GraphQL",
                  "n8n",
                  "DevOps",
                  "AI",
                  
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="text-sm bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
