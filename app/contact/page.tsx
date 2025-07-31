"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "mohammadajoummaa@gmail.com",
    href: "mailto:mohammadajoummaa@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+961 76 624 296",
    href: "tel:+96176624296",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nabatieh, Lebanon",
    href: "#",
  },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/Mohammad-Joumaa", label: "GitHub", name: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mohammad-joumaa/", label: "LinkedIn", name: "LinkedIn" },
  { icon: MessageCircle, name: "WhatsApp", href: `https://wa.me/96176624296`, label: "WhatsApp" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'
  
  const adminWhatsApp = "+96176624296" // Your WhatsApp number

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // WhatsApp message handler
  const handleWhatsAppSubmit = () => {
    if (!validateForm()) {
      return
    }

    // Format the WhatsApp message
    const whatsappMessage = `
🔵 *New Contact Form Submission*

👤 *Name:* ${formData.firstName} ${formData.lastName}
📧 *Email:* ${formData.email}
📋 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}
    `.trim()

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${adminWhatsApp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank')
    
    // Show success message and reset form
    setSubmitStatus('success')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const handleSubmit = handleWhatsAppSubmit

  return (
    <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Contact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? I'd love to hear from you. Let's discuss how we can work together to bring
            your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-8">Let's Connect</h2>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:bg-primary/5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-lg bg-primary/10">
                    <method.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{method.title}</h3>
                    <p className="text-muted-foreground">{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-medium mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-border/50 hover:border-primary/20 hover:bg-primary/10 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-card/50 border-border/50 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <MessageCircle className="w-5 h-5 text-orange-500" />
                  <h3 className="text-xl font-semibold">Send via WhatsApp</h3>
                </div>

                {/* WhatsApp Info */}
                <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MessageCircle className="w-4 h-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-800 dark:text-orange-200">Direct WhatsApp Contact</span>
                  </div>
                  <p className="text-xs text-orange-700 dark:text-orange-300">
                    Your message will be formatted and sent directly to my WhatsApp: <strong>{adminWhatsApp}</strong>
                  </p>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-orange-100 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg flex items-center gap-2 text-orange-800 dark:text-orange-200"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>WhatsApp opened! Your message is ready to send.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center gap-2 text-red-800 dark:text-red-200"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Please fill in all required fields correctly.</span>
                  </motion.div>
                )}

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="e.g. Mohammad" 
                        className={`bg-background/50 transition-all duration-200 ${
                          errors.firstName ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                      {errors.firstName && (
                        <p className="text-sm text-red-500">{errors.firstName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="e.g. Joumaa" 
                        className={`bg-background/50 transition-all duration-200 ${
                          errors.lastName ? 'border-red-500 focus:border-red-500' : ''
                        }`}
                        value={formData.lastName}
                        onChange={handleInputChange}
                      />
                      {errors.lastName && (
                        <p className="text-sm text-red-500">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="e.g. test@gmail.com" 
                      className={`bg-background/50 transition-all duration-200 ${
                        errors.email ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input 
                      id="subject" 
                      placeholder="e.g. Project Inquiry" 
                      className={`bg-background/50 transition-all duration-200 ${
                        errors.subject ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or how I can help you..."
                      rows={6}
                      className={`bg-background/50 resize-none transition-all duration-200 ${
                        errors.message ? 'border-red-500 focus:border-red-500' : ''
                      }`}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      {formData.message.length}/500 characters
                    </p>
                  </div>

                  <Button 
                    type="button" 
                    className="w-full transition-all duration-300 hover:shadow-lg bg-orange-500 hover:bg-orange-600 text-white" 
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}