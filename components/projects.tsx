"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Folder, Star, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = ["All", "AI/ML", "Full Stack", "Automation"]

const projects = [
  {
    title: "AI Helpdesk System",
    description: "An intelligent helpdesk system using RAG (Retrieval-Augmented Generation) for semantic search and context-aware responses. Features vector embeddings for efficient document retrieval.",
    technologies: ["NestJS", "React.js", "PostgreSQL", "pgvector", "AWS Bedrock", "Docker"],
    category: "AI/ML",
    
    impact: "Reduced response time by 60% and improved customer satisfaction",
    github: "#",
    demo: "#",
  },
  {
    title: "AI Call Agent Automation",
    description: "Real-time AI-powered call agent with natural language understanding and automated booking capabilities. Integrates with calendar systems for seamless scheduling.",
    technologies: ["n8n", "AI Agents", "NLP", "API Integration", "Real-time Processing"],
    category: "Automation",
    
    impact: "Automated 40% of customer calls with booking functionality",
    github: "#",
    demo: "#",
  },
  {
    title: "eSim Customer Service Chatbot",
    description: "Intelligent chatbot for eSim customer support with multi-language capabilities and seamless API integrations for account management and troubleshooting.",
    technologies: ["Chatbot", "NLP", "API Integration", "Multi-language"],
    category: "AI/ML",
    featured: false,
    impact: "Handles 500+ daily customer queries with 85% resolution rate",
    github: "#",
    demo: "#",
  },
  {
    title: "Hospital Management System",
    description: "Comprehensive healthcare management platform with patient records, appointment scheduling, billing, and reporting modules. Built with security and HIPAA compliance in mind.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "REST API"],
    category: "Full Stack",
    featured: false,
    impact: "Streamlined operations for 200+ daily patients",
    github: "#",
    demo: "#",
  },
  {
    title: "Pharmacy Website",
    description: "E-commerce platform for pharmaceutical products with prescription management, inventory tracking, and secure payment processing.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Stripe"],
    category: "Full Stack",
    featured: false,
    impact: "Increased online sales by 150%",
    github: "#",
    demo: "#",
  },
  {
    title: "Narcis Jewelry E-commerce",
    description: "Luxury jewelry e-commerce website with product customization, 3D product views, and integrated payment solutions.",
    technologies: ["React.js", "Node.js", "MongoDB", "Payment Gateway"],
    category: "Full Stack",
    featured: false,
    impact: "Generated $50K+ in first quarter sales",
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
            >
              <Folder className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Projects</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Featured <span className="text-gradient">work</span>
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
              A collection of projects showcasing my expertise in AI, full-stack development, and automation
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground mr-2" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category 
                    ? "bg-primary text-primary-foreground" 
                    : "border-border hover:border-primary/50 hover:text-primary"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative rounded-2xl bg-card border border-border hover:border-primary/50 card-shadow hover:card-shadow-lg transition-all duration-300 overflow-hidden ${
                    project.featured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                        <Star className="w-3 h-3 fill-primary" />
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10 p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:glow-sm transition-all">
                        <Folder className="w-6 h-6 text-primary" />
                      </div>
                      {/* <div className="flex items-center gap-2">
                        <a
                          href={project.github}
                          className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                          aria-label="View GitHub repository"
                        >
                          <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                        </a>
                        <a
                          href={project.demo}
                          className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-primary" />
                        </a>
                      </div> */}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Impact */}
                    <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                      <p className="text-xs text-primary font-medium">
                        📈 {project.impact}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
