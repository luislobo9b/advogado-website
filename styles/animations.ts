import type { motion } from "motion/react"

type Variants = NonNullable<
  React.ComponentProps<typeof motion.div>["variants"]
>

/** Duração padrão de animação do projeto (equivalente a `duration-400`). */
const DURATION = 0.4

/** Curva de desaceleração exponencial usada nas entradas de conteúdo. */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

/**
 * As variantes recebem o atraso via `custom`, permitindo encadear entradas
 * sem duplicar definições de transição.
 */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE, delay },
  }),
}

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    transition: { duration: DURATION, ease: EASE, delay },
  }),
}

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION, ease: EASE, delay },
  }),
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export { fadeUp, fadeIn, scaleIn, staggerContainer }
