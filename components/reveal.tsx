"use client"

import * as React from "react"

import { motion } from "motion/react"

import { cn } from "cn"

type RevealProps = React.ComponentProps<typeof motion.div> & {
  delay?: number
}

function Reveal({ delay = 0, className, children, ...props }: RevealProps) {
  return (
    <motion.div
      data-slot="reveal"
      className={cn(className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { Reveal }
