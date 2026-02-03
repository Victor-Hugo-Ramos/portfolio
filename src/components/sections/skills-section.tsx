'use client'

import { motion } from 'framer-motion'
import { Code2, Server, Wrench, Users } from 'lucide-react'
import { theme } from '@/styles/theme'

export function SkillsSection() {
  const skills = [
    {
      title: 'Desenvolvimento Frontend',
      icon: Code2,
      gradient: theme.gradients.blue,
      description: 'Criação de interfaces modernas e responsivas com React, Next.js e TypeScript.',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'HTML5', 'CSS3']
    },
    {
      title: 'Desenvolvimento Backend',
      icon: Server,
      gradient: theme.gradients.purple,
      description: 'APIs robustas e escaláveis com Node.js, Python e bancos de dados.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Ferramentas & DevOps',
      icon: Wrench,
      gradient: theme.gradients.orange,
      description: 'Git, Docker e deploy em plataformas cloud como Vercel e AWS.',
      technologies: ['Git', 'Docker', 'VS Code', 'Figma', 'Vercel', 'AWS']
    },
    {
      title: 'Soft Skills',
      icon: Users,
      gradient: theme.gradients.success,
      description: 'Trabalho em equipe, comunicação e resolução criativa de problemas.',
      technologies: ['Equipe', 'Comunicação', 'Problemas', 'Aprendizado']
    }
  ]

  return (
    <section style={{
      position: 'relative',
      padding: '6rem 1.5rem',
      background: theme.background.lightGradient,
      overflow: 'hidden'
    }}>
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        backgroundImage: 'linear-gradient(to right, #80808008 1px, transparent 1px), linear-gradient(to bottom, #80808008 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      <div style={{ position: 'relative', maxWidth: '1400px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <span style={{
            fontSize: '0.875rem',
            fontWeight: '600',
            color: theme.primary[600],
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Expertise
          </span>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: '700',
            marginTop: '1rem',
            marginBottom: '1rem',
            color: theme.text.dark
          }}>
            Minha Expertise
          </h2>
          <p style={{ fontSize: '1.25rem', color: theme.text.muted }}>
            Áreas de conhecimento e especialização
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div style={{
                position: 'relative',
                height: '100%',
                background: theme.glass.light,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                borderRadius: '1rem',
                padding: '1.5rem',
                border: `1px solid ${theme.border.medium}`,
                boxShadow: theme.shadows.md,
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: skill.gradient,
                  borderRadius: '1rem 1rem 0 0'
                }} />

                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{
                    display: 'inline-flex',
                    padding: '0.75rem',
                    borderRadius: '0.75rem',
                    background: skill.gradient,
                    boxShadow: theme.shadows.lg
                  }}>
                    <skill.icon style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                  </div>
                </div>

                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem',
                  color: theme.text.dark
                }}>
                  {skill.title}
                </h3>

                <p style={{
                  fontSize: '0.875rem',
                  color: theme.text.muted,
                  lineHeight: '1.6',
                  marginBottom: '1.25rem'
                }}>
                  {skill.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '0.375rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        borderRadius: '9999px',
                        background: 'rgba(243, 244, 246, 0.8)',
                        color: theme.text.muted,
                        transition: 'background 0.2s'
                      }}
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
    </section>
  )
}