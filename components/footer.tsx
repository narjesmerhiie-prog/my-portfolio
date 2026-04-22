"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/narjesmerhiie-prog/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/narjes-merhi", label: "LinkedIn" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold text-gradient inline-block mb-4">
              NM
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI Engineer passionate about building scalable intelligent systems 
              that solve real-world problems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Narjes Merhi. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in Beirut
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
