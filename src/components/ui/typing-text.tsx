'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface TypingTextProps {
  texts: string[]
  speed?: number
  delay?: number
  style?: React.CSSProperties
}

export function TypingText({ texts, speed = 100, delay = 2000, style }: TypingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentText = texts[currentTextIndex]

    if (!isDeleting && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[charIndex])
        setCharIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }

    if (!isDeleting && charIndex === currentText.length) {
      const timeout = setTimeout(() => setIsDeleting(true), delay)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
        setCharIndex(prev => prev - 1)
      }, speed / 2)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
    }
  }, [charIndex, isDeleting, currentTextIndex, texts, speed, delay])

  return (
    <span style={style}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ display: 'inline-block', width: '2px', marginLeft: '4px' }}
      >
        |
      </motion.span>
    </span>
  )
}