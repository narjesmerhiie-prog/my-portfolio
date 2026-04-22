"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Cloud, Code2, Sparkles } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI Systems",
    description: "RAG-based systems, intelligent chatbots, and workflow automation",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description: "AWS infrastructure including EC2, ECS, RDS, and Bedrock",
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "React.js, NestJS, and modern web technologies",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">About Me</span>
            </motion.div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Passionate about building{" "}
              <span className="text-gradient">intelligent systems</span>
            </h2>
          </div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto text-pretty">
              I&apos;m a motivated Computer Science graduate specializing in AI, machine learning, 
              and cloud-based intelligent systems. With hands-on experience in building scalable 
              AI applications, I focus on creating RAG-based systems, intelligent chatbots, and 
              workflow automation tools that solve real-world problems. My expertise spans from 
              designing robust backend architectures to deploying production-ready solutions on AWS.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 card-shadow hover:card-shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-sm transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
