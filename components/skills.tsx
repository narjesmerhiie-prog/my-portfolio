"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Code, Cloud, Wrench, Shield, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "AI & Data Science",
    icon: Brain,
    skills: ["Machine Learning", "RAG Systems", "Embeddings", "Semantic Search", "NLP", "LLM Integration"],
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "TypeScript", "PHP", "SQL"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: ["TensorFlow", "Keras", "scikit-learn", "React.js", "NestJS", "Node.js"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["AWS EC2", "AWS ECS", "AWS ECR", "AWS RDS", "AWS Bedrock", "Docker"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["n8n", "Supabase", "Postman", "Git", "GitHub", "pgvector"],
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Penetration Testing", "Network Security", "Security Auditing", "Vulnerability Assessment"],
    color: "from-red-500/20 to-orange-500/20",
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
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
              <Code className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Skills</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Technical <span className="text-gradient">expertise</span>
            </h2>
            
            <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
              A comprehensive toolkit for building modern AI-powered applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 card-shadow hover:card-shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:glow-sm transition-all">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-secondary/80 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
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
