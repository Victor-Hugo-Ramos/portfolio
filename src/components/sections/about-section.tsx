'use client'

import { motion } from 'framer-motion'
import { Code, Lightbulb, Rocket, Users, Target, Zap } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: Code,
      title: 'Código Limpo',
      description: 'Escrevo código limpo, manutenível e seguindo as melhores práticas.'
    },
    {
      icon: Lightbulb,
      title: 'Soluções Criativas',
      description: 'Busco sempre as melhores soluções para problemas complexos.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Otimização e performance são prioridades em todos os projetos.'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalho bem em equipe e valorizo a comunicação clara.'
    },
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Orientado a entregar soluções que geram valor real para o negócio.'
    },
    {
      icon: Zap,
      title: 'Agilidade',
      description: 'Trabalho com metodologias ágeis e entregas contínuas.'
    }
  ]

  return (
    <section id="about" style={{
      position: 'relative',
      padding: '6rem 1.5rem',
      background: '#000000',
      color: '#ffffff'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header - Sobre Mim */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            Sobre Mim
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#d1d5db',
            lineHeight: '1.8',
            maxWidth: '800px'
          }}>
            Sou um desenvolvedor apaixonado por tecnologia e inovação. Com experiência em desenvolvimento full stack, 
            estou sempre buscando aprender novas tecnologias e aprimorar minhas habilidades para criar soluções inovadoras.
          </p>
        </motion.div>

        {/* Grid de Features */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '1rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              whileHover={{
                y: -8,
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderColor: 'rgba(255, 255, 255, 0.2)'
              }}
            >
              {/* Ícone */}
              <div style={{ marginBottom: '1.5rem' }}>
                <feature.icon style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  color: '#3b82f6'
                }} />
              </div>

              {/* Título */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.75rem'
              }}>
                {feature.title}
              </h3>

              {/* Descrição */}
              <p style={{
                fontSize: '0.9rem',
                color: '#9ca3af',
                lineHeight: '1.6'
              }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}