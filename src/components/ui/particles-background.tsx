'use client'  // ← ADICIONE ESTA LINHA

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ParticlesBackground() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particles = Array.from({ length: 50 })

  useEffect(() => {
    // Define as dimensões apenas no cliente
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    })

    // Atualiza ao redimensionar
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Não renderiza até ter as dimensões
  if (dimensions.width === 0) return null

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }}>
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0
          }}
          animate={{
            y: [null, Math.random() * dimensions.height],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.5)'
          }}
        />
      ))}
    </div>
  )
}