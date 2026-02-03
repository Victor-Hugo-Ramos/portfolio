'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { TypingText } from '@/components/ui/typing-text'
import { ParticlesBackground } from '@/components/ui/particles-background'

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const socials = [
    { icon: Github, href: 'https://github.com/vhugo1234', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/victor-hugo-ramos-7275949a', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' }
  ]

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)',
      overflow: 'hidden'
    }}>
      <ParticlesBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '900px'
        }}
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
            style={{
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '9999px',
              color: '#60a5fa',
              fontSize: '0.875rem',
              fontWeight: '500',
              marginBottom: '2rem'
            }}
          >
            👋 Bem-vindo ao meu portfólio
          </motion.span>
        </motion.div>

        {/* Titulo com efeito gradiente animado */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: '800',
            marginBottom: '1.5rem',
            background: 'linear-gradient(to right, #ffffff, #60a5fa, #ffffff)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          <motion.span
            animate={{
              backgroundPosition: ['0% center', '200% center', '0% center']
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear'
            }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(to right, #ffffff, #60a5fa, #ffffff)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Victor Hugo Ramos Almeida
          </motion.span>
        </motion.h1>

        {/* Texto digitando */}
        <motion.div
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1.25rem, 4vw, 2rem)',
            color: '#9ca3af',
            marginBottom: '2rem',
            minHeight: '3rem'
          }}
        >
          <TypingText
            texts={[
              'Desenvolvedor Full Stack',
              'Criador de Experiências Web',
              'Apaixonado por Tecnologia',
              'Construindo o Futuro'
            ]}
            speed={100}
            delay={2000}
          />
        </motion.div>

        {/* Descricao */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: '1.125rem',
            color: '#d1d5db',
            lineHeight: '1.8',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}
        >
          Transformo ideias em código e código em soluções inovadoras que fazem a diferença.
        </motion.p>

        {/* Botoes */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              color: 'white',
              borderRadius: '0.75rem',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Ver Projetos
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '1rem 2rem',
              background: 'transparent',
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '0.75rem',
              fontWeight: '600',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Entre em Contato
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '4rem'
          }}
        >
          {socials.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              style={{
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
              aria-label={social.label}
            >
              <social.icon style={{ width: '1.25rem', height: '1.25rem' }} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}
          >
            <span>Role para baixo</span>
            <ArrowDown style={{ width: '1.25rem', height: '1.25rem' }} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Efeito de brilho no fundo */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          pointerEvents: 'none'
        }}
      />
    </section>
  )
}