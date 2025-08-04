"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Database, Mail, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Personal information you provide when contacting me (name, email, message content)",
      "Technical information such as IP address, browser type, and device information",
      "Usage data including pages visited and time spent on the website",
      "Cookies and similar tracking technologies for website functionality",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "To respond to your inquiries and provide requested services",
      "To improve website functionality and user experience",
      "To analyze website traffic and usage patterns",
      "To send occasional updates about my services (with your consent)",
    ],
  },
  {
    icon: Lock,
    title: "Data Protection",
    content: [
      "All personal data is encrypted and stored securely",
      "We use industry-standard security measures to protect your information",
      "Access to personal data is limited to authorized personnel only",
      "Regular security audits and updates are performed",
    ],
  },
  {
    icon: Mail,
    title: "Third-Party Services",
    content: [
      "Google Analytics for website analytics (anonymized data)",
      "Email service providers for contact form submissions",
      "Hosting providers with appropriate data protection agreements",
      "No personal data is sold or shared with third parties for marketing",
    ],
  },
]

export default function PrivacyPage() {
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
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to me. This policy explains how I collect, use, and protect your personal
            information when you visit my website.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span>Last updated: January 2025</span>
          </div>
        </motion.div>

        {/* Privacy Sections */}
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

        {/* Additional Information */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-orange-500/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Your Rights</h3>
              <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Access & Correction</h4>
                  <p className="text-sm">
                    You have the right to access and correct your personal information at any time.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Data Deletion</h4>
                  <p className="text-sm">You can request deletion of your personal data by contacting me directly.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Opt-Out</h4>
                  <p className="text-sm">You can opt-out of any communications or data collection at any time.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contact</h4>
                  <p className="text-sm">For privacy concerns, contact me at mohammad.joumaa@example.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
