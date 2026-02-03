'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Play } from 'lucide-react'
import { useState } from 'react'

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: 'DiagPro',
      description: 'Plataforma completa de gerenciamento e diagramação de provas.',
      tags: ['Python', 'FastAPI', 'React', 'MySQL'],
      image: null,
      videoId: 'LDCOSAhfIEE',
      github: 'https://github.com/vhugo1234/diagproApi',
      demo: 'https://diagpro.vercel.app',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo com gráficos e visualização de dados em tempo real.',
      tags: ['React', 'Chart.js', 'Node.js', 'MongoDB'],
      image: null,
      videoId: 'rJQYPOtMlrI',
      github: 'https://github.com/vhugo1234/dashboard',
      demo: 'https://dashboard-analytics.vercel.app',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'TAFON - App de Tarefas',
      description: 'Aplicativo de gerenciamento de tarefas com drag-and-drop e sincronização.',
      tags: ['React', 'Firebase', 'DnD Kit', 'PWA'],
      image: null,
      videoId: null,
      github: 'https://github.com/vhugo1234/TAFON',
      demo: 'https://tafon.vercel.app',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Portfólio Pessoal',
      description: 'Meu portfólio pessoal desenvolvido com Next.js e animações elegantes.',
      tags: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind'],
      image: null,
      videoId: null,
      github: 'https://github.com/vhugo1234/portfolio',
      demo: 'https://victor-hugo-ramos.vercel.app',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 5,
      title: 'API RESTful',
      description: 'API RESTful completa com autenticação JWT e documentação Swagger.',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      image: null,
      videoId: null,
      github: 'https://github.com/vhugo1234/api-restful',
      demo: 'https://api-restful-docs.vercel.app',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 6,
      title: 'E-commerce Fullstack',
      description: 'Loja virtual completa com carrinho, checkout e integração com Stripe.',
      tags: ['Next.js', 'Stripe', 'Prisma', 'Tailwind'],
      image: null,
      videoId: null,
      github: 'https://github.com/vhugo1234/ecommerce',
      demo: 'https://ecommerce-vhugo.vercel.app',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ]

  return (
    <section id="projects" style={{
      position: 'relative',
      padding: '6rem 1.5rem',
      background: '#000000',
      color: '#ffffff'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1rem'
          }}>
            Projetos em Destaque
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#9ca3af'
          }}>
            Alguns dos meus trabalhos recentes
          </p>
        </motion.div>

        {/* Grid de Projetos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                position: 'relative',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              whileHover={{ y: -8, borderColor: 'rgba(255, 255, 255, 0.2)' }}
            >
              {/* Imagem/Vídeo Preview */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '250px',
                background: project.gradient,
                overflow: 'hidden'
              }}>
                {project.videoId ? (
                  // Se tiver vídeo do YouTube
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%'
                  }}>
                    {hoveredProject === project.id ? (
                      // Mostrar iframe do YouTube no hover
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1`}
                        title={project.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ border: 'none' }}
                      />
                    ) : (
                      // Thumbnail do YouTube
                      <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Play style={{
                          width: '4rem',
                          height: '4rem',
                          color: 'white',
                          background: 'rgba(0, 0, 0, 0.7)',
                          borderRadius: '50%',
                          padding: '1rem'
                        }} />
                      </div>
                    )}
                  </div>
                ) : (
                  // Se for imagem ou gradiente
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: project.image ? `url(${project.image})` : 'none',
                    backgroundColor: project.image ? 'transparent' : 'transparent',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    fontWeight: '700',
                    color: 'white'
                  }}>
                    {!project.image && project.id}
                  </div>
                )}

                {/* Overlay no hover */}
                {hoveredProject === project.id && !project.videoId && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0, 0, 0, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1rem'
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.2s'
                      }}
                    >
                      <Github style={{ width: '1.5rem', height: '1.5rem' }} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        padding: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        transition: 'all 0.2s'
                      }}
                    >
                      <ExternalLink style={{ width: '1.5rem', height: '1.5rem' }} />
                    </a>
                  </motion.div>
                )}
              </div>

              {/* Conteúdo */}
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '0.75rem'
                }}>
                  {project.title}
                </h3>

                <p style={{
                  fontSize: '0.9rem',
                  color: '#9ca3af',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '0.375rem 0.75rem',
                        fontSize: '0.75rem',
                        fontWeight: '500',
                        borderRadius: '9999px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: '#60a5fa',
                        border: '1px solid rgba(59, 130, 246, 0.2)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#9ca3af',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s'
                    }}
                  >
                    <Github style={{ width: '1rem', height: '1rem' }} />
                    Código
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#9ca3af',
                      fontSize: '0.875rem',
                      transition: 'color 0.2s'
                    }}
                  >
                    <ExternalLink style={{ width: '1rem', height: '1rem' }} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}