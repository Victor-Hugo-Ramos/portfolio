'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 pt-24">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Olá, eu sou{' '}
              <span className="text-[--color-primary-600]">
                Victor Hugo
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl text-gray-600 dark:text-gray-300 md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Desenvolvedor Full Stack
            </motion.p>
            
            <motion.p 
              className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Apaixonado por criar experiências digitais incríveis e soluções
              inovadoras. Especializado em React, Next.js e tecnologias modernas
              da web.
            </motion.p>

            <motion.div 
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-[--color-primary-600] px-6 py-3 text-white font-medium hover:bg-[--color-primary-700] transition-colors"
              >
                Ver Projetos
                <ArrowDown className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 rounded-lg border-2 border-[--color-primary-600] px-6 py-3 font-medium text-[--color-primary-600] hover:bg-[--color-primary-50] dark:hover:bg-[--color-primary-950] transition-colors"
              >
                Entre em Contato
              </a>
            </motion.div>

            <motion.div 
              className="mt-8 flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href="https://github.com/vhugo1234"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:seu@email.com"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square w-full max-w-lg mx-auto">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[--color-primary-500] to-purple-600 flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
                VH
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}