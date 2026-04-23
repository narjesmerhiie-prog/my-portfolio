"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    company: "Zero & One",
    role: "AI Engineer Intern",
    location: "Beirut, Lrbanon",
    period: "2025",
    description: "Built an AI Helpdesk System from the ground up, focusing on semantic search and intelligent responses.",
    achievements: [
      "Developed a RAG-based AI helpdesk using pgvector + PostgreSQL for semantic search",
      "Integrated Amazon Bedrock for LLM inference and natural language understanding",
      "Built robust backend with NestJS and TypeORM for scalable data management",
      "Created responsive frontend using React.js with modern UI/UX practices",
      "Deployed the complete system on AWS (EC2, ECS, ECR, RDS, VPC) with Docker containerization",
    ],
    technologies: ["NestJS", "React.js", "PostgreSQL", "pgvector", "AWS Bedrock", "Docker", "TypeORM"],
  },
  {
    company: "Monty Mobile",
    role: "Software Development Intern",
    location: "Beirut, Lebanon",
    period: "2024",
    description: "Focused on AI workflow automation and conversational AI systems for telecommunications.",
    achievements: [
      "Built AI-powered workflows using n8n for process automation",
      "Developed an AI call agent with real-time booking capabilities",
      "Created an eSim customer service chatbot for automated support",
      "Integrated multiple APIs for seamless data flow and automation",
      "Streamlined internal processes through intelligent automation",
    ],
    technologies: ["n8n", "AI Agents", "API Integration", "Chatbots", "Workflow Automation"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 lg:py-32 relative">
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
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Experience</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Where I&apos;ve <span className="text-gradient">worked</span>
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              Hands-on experience building AI systems and automation solutions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className={`relative mb-12 last:mb-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute top-0 w-4 h-4 rounded-full bg-primary glow-sm ${
                    index % 2 === 0 
                      ? "left-0 md:left-auto md:-right-2 -translate-x-1/2 md:translate-x-1/2" 
                      : "left-0 md:-left-2 -translate-x-1/2"
                  }`} />

                  {/* Content Card */}
                  <div className="ml-8 md:ml-0 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 card-shadow hover:card-shadow-lg transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {exp.company}
                        </h3>
                        <p className="text-primary font-medium">{exp.role}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 text-pretty">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
