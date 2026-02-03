'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface AnimatedLogoProps {
  onClick?: () => void
}

export function AnimatedLogo({ onClick }: AnimatedLogoProps) {
  const [animationType, setAnimationType] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationType((prev) => (prev + 1) % 5)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  // TAMANHO DA LOGO AUMENTADO PARA 65px
  const logoSize = 65

  if (animationType === 0) {
    return (
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.15, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
        style={{ cursor: 'pointer', display: 'inline-block' }}
      >
        <Image
          src="/logo.png"
          alt="Victor Hugo"
          width={logoSize}
          height={logoSize}
          style={{ borderRadius: '0.5rem', objectFit: 'contain' }}
          priority
        />
      </motion.div>
    )
  }

  if (animationType === 1) {
    return (
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: 'pointer', display: 'inline-block' }}
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            filter: [
              'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))',
              'drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))',
              'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/logo.png"
            alt="Victor Hugo"
            width={logoSize}
            height={logoSize}
            style={{ borderRadius: '0.5rem', objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </motion.div>
    )
  }

  if (animationType === 2) {
    return (
      <motion.div
        onClick={onClick}
        whileHover={{ y: -8, rotateY: 180 }}
        whileTap={{ scale: 0.9 }}
        style={{ cursor: 'pointer', display: 'inline-block' }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/logo.png"
            alt="Victor Hugo"
            width={logoSize}
            height={logoSize}
            style={{ 
              borderRadius: '0.5rem', 
              objectFit: 'contain',
              filter: 'drop-shadow(0 8px 15px rgba(0, 0, 0, 0.3))'
            }}
            priority
          />
        </motion.div>
      </motion.div>
    )
  }

  if (animationType === 3) {
    return (
      <motion.div
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          cursor: 'pointer',
          position: 'relative',
          display: 'inline-block',
          width: '80px',
          height: '80px'
        }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0
            }}
          >
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#3b82f6',
              position: 'absolute',
              top: '-4px',
              left: '50%',
              marginLeft: '-4px',
              boxShadow: '0 0 10px #3b82f6'
            }} />
          </motion.div>
        ))}

        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: 'relative',
            zIndex: 1,
            marginTop: '7px',
            marginLeft: '7px'
          }}
        >
          <Image
            src="/logo.png"
            alt="Victor Hugo"
            width={logoSize}
            height={logoSize}
            style={{ borderRadius: '0.5rem', objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </motion.div>
    )
  }

  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      style={{ cursor: 'pointer', position: 'relative', display: 'inline-block' }}
    >
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90px',
          height: '90px',
          borderRadius: '50%',
          border: '3px solid #3b82f6',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
        }}
      />

      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Image
          src="/logo.png"
          alt="Victor Hugo"
          width={logoSize}
          height={logoSize}
          style={{
            borderRadius: '0.5rem',
            objectFit: 'contain',
            position: 'relative',
            zIndex: 1
          }}
          priority
        />
      </motion.div>
    </motion.div>
  )
}