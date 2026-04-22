"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Calendar } from "lucide-react"

const education = [
  {
    type: "degree",
    title: "BSc in Computer Science",
    institution: "Lebanese International University",
    period: "2022 - 2025",
    description: "Specializing in Artificial Intelligence and Machine Learning with a focus on practical applications and cloud technologies.",
    highlights: ["AI & Machine Learning", "Software Engineering", "Database Systems", "Cloud Computing"],
  },
  {
    type: "certification",
    title: "Cybersecurity Certification",
    institution: "Semi Colon Academy",
    period: "2024",
    description: "Comprehensive cybersecurity training covering penetration testing, network security, and vulnerability assessment.",
    highlights: ["Penetration Testing", "Network Security", "Security Auditing", "Ethical Hacking"],
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              <GraduationCap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Education</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Academic <span className="text-gradient">background</span>
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Building a strong foundation in computer science and specialized certifications
            </p>
          </div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 card-shadow hover:card-shadow-lg transition-all duration-300"
              >
                {/* Background Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:glow-sm transition-all">
                      {item.type === "degree" ? (
                        <GraduationCap className="w-6 h-6 text-primary" />
                      ) : (
                        <Award className="w-6 h-6 text-primary" />
                      )}
                    </div>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-primary/80 font-medium mb-3">{item.institution}</p>
                  <p className="text-sm text-muted-foreground mb-4 text-pretty">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
