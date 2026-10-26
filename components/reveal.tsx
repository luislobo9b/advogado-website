"use client"

import * as React from "react"

import { motion } from "motion/react"

import { cn } from "cn"

import {
  fadeIn,
  fadeUp,
  scaleIn,
  staggerContainer,
} from "@/styles/animations"

const VARIANTS = {
  fadeUp,
  fadeIn,
  scaleIn,
  stagger: staggerContainer,
}

type RevealVariant = keyof typeof VARIANTS

type RevealProps = Omit<React.ComponentProps<typeof motion.div>, "variants"> & {
  variant?: RevealVariant
  /** Atraso, em segundos, aplicado à entrada do conteúdo. */
  delay?: number
}

function Reveal({
  variant = "fadeUp",
  delay = 0,
  className,
  children,
  ...props
}: RevealProps) {
  return (
    <motion.div
      data-slot="reveal"
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0, margin: "0px 0px -80px 0px" }}
      custom={delay}
      variants={VARIANTS[variant]}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { Reveal }
