"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  once?: boolean
}

const directionMap = {
  up:    { y: 32,  x: 0   },
  down:  { y: -32, x: 0   },
  left:  { x: 40,  y: 0   },
  right: { x: -40, y: 0   },
  none:  { x: 0,   y: 0   },
}

/**
 * FadeIn – wraps children in a scroll-triggered Framer Motion fade.
 * Defaults to upward fade with a stagger-friendly delay prop.
 */
export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: FadeInProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: "-80px" })

  const { x, y } = directionMap[direction]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  )
}
