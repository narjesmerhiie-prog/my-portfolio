"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageSquare, Phone, Linkedin, Github } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+961 81 687 152",
    href: "tel:+96181687152",
  },
]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/narjes-merhi" },
  { icon: Github, label: "GitHub", href: "https://github.com/narjesmerhiie-prog/" },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
            >
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Contact</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Let&apos;s <span className="text-gradient">connect</span>
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-8 text-center"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
                <p className="text-muted-foreground text-pretty">
                  I&apos;m currently available for freelance work and full-time opportunities. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex justify-center">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
