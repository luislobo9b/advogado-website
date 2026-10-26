const SITE = {
  name: "Pedro Lucas",
  role: "Advogado",
  tagline: "O advogado que explica o seu processo em palavras simples.",
} as const

/**
 * Identificação profissional — placeholders.
 * DESIGN.md §8 e PRODUCT.md proíbem publicar número de OAB, endereço ou
 * e-mail antes da confirmação. Substituir pelos dados reais antes do lançamento.
 */
const PROFESSIONAL = {
  oab: "OAB/UF a confirmar",
  address: "Endereço profissional a confirmar",
  email: "E-mail a confirmar",
} as const

/**
 * Link de e-mail — só existe quando o endereço real já foi confirmado.
 * Enquanto for placeholder, o contato aparece apenas como texto.
 */
const PROFESSIONAL_EMAIL_LINK: string | null = PROFESSIONAL.email.includes(
  "@"
)
  ? `mailto:${PROFESSIONAL.email}`
  : null

/**
 * WhatsApp — placeholder no formato internacional (DDI + DDD + número).
 * Enquanto o número real não for confirmado, os CTAs apontam para a seção de
 * contato em vez de gerar um link quebrado. O canal é de atendimento: a
 * conversa acontece fora deste site (aviso LGPD).
 */
const WHATSAPP_NUMBER: string | null = null

const WHATSAPP_MESSAGE =
  "Olá, Pedro! Vim pelo site e gostaria de conversar sobre uma situação jurídica."

const WHATSAPP_LINK: string = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_MESSAGE
    )}`
  : "#contato"

/** `false` enquanto o número real não for confirmado: os CTAs permanecem internos. */
const HAS_WHATSAPP_NUMBER: boolean = WHATSAPP_NUMBER !== null

/**
 * Propriedades prontas do CTA de WhatsApp. Enquanto o número não estiver
 * confirmado, o link aponta para a seção de contato e não abre nova aba.
 */
const WHATSAPP_LINK_PROPS = {
  href: WHATSAPP_LINK,
  target: HAS_WHATSAPP_NUMBER ? ("_blank" as const) : undefined,
  rel: HAS_WHATSAPP_NUMBER ? ("noreferrer" as const) : undefined,
}

type NavLink = {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Passo a passo", href: "#passo-a-passo" },
  { label: "Valores", href: "#valores" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
]

const LGPD_NOTICE =
  "O atendimento acontece por mensagem no WhatsApp. As conversas são realizadas fora deste site, conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018)."

const PENDING_NOTICE =
  "Os dados de identificação profissional (OAB, endereço e e-mail) serão atualizados antes da publicação."

export {
  HAS_WHATSAPP_NUMBER,
  LGPD_NOTICE,
  NAV_LINKS,
  PENDING_NOTICE,
  PROFESSIONAL,
  PROFESSIONAL_EMAIL_LINK,
  SITE,
  WHATSAPP_LINK,
  WHATSAPP_LINK_PROPS,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
}

export type { NavLink }
