"use client"

import { motion } from "framer-motion"
import { FileText, Scale, AlertTriangle, Shield, Mail, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const sections = [
  {
    icon: Scale,
    title: "Acceptance of Terms",
    content: [
      "By accessing and using this website, you accept and agree to be bound by these terms",
      "If you do not agree to these terms, please do not use this website",
      "These terms may be updated periodically, and continued use constitutes acceptance",
      "You are responsible for reviewing these terms regularly",
    ],
  },
  {
    icon: Shield,
    title: "Use of Website",
    content: [
      "This website is for informational and professional purposes only",
      "You may not use this website for any unlawful or prohibited activities",
      "Content may not be reproduced without explicit written permission",
      "You agree not to interfere with the website's functionality or security",
    ],
  },
  {
    icon: FileText,
    title: "Intellectual Property",
    content: [
      "All content, including text, images, and code, is owned by Mohammad Joumaa",
      "Project code shown is for demonstration purposes and may have separate licenses",
      "You may not copy, modify, or distribute content without permission",
      "Trademarks and logos remain the property of their respective owners",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Disclaimers",
    content: [
      "Information is provided 'as is' without warranties of any kind",
      "I am not liable for any damages arising from use of this website",
      "External links are provided for convenience and I'm not responsible for their content",
      "Professional services are subject to separate agreements and terms",
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold">
              Terms of <span className="text-gradient">Service</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These terms and conditions govern your use of this website and outline the rules and regulations for using
            Mohammad Joumaa's professional portfolio.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last updated: January 2025</span>
          </div>
        </motion.div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border/50 hover:border-primary/20 transition-colors">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <section.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-orange-500/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Questions About These Terms?</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms of Service, please don't hesitate to contact me. I'm here to
                help clarify any concerns you may have.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">mohammad.joumaa@example.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                  <p className="text-muted-foreground">Within 24-48 hours</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Governing Law */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="bg-card/30 border-border/50">
            <CardContent className="p-6 text-center">
              <Scale className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold mb-2">Governing Law</h4>
              <p className="text-sm text-muted-foreground">
                These terms are governed by the laws of Lebanon. Any disputes will be resolved in the courts of Beirut,
                Lebanon.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
