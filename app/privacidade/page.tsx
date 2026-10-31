import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Heading, Paragraph } from "@/components/typography"

export const metadata = {
  title: "Política de privacidade — Pedro Lucas",
  description:
    "Como os dados são tratados no site e no atendimento pelo WhatsApp, conforme a LGPD (Lei nº 13.709/2018).",
}

const TOPICS = [
  {
    title: "O que este site coleta",
    description:
      "Nada. O site é estático, não possui formulários de cadastro, não cria cookies de rastreamento e não guarda informação pessoal de quem navega por ele.",
  },
  {
    title: "Onde a conversa acontece",
    description:
      "O atendimento é feito pelo WhatsApp, fora do site. As mensagens que você envia são tratadas segundo a Lei nº 13.709/2018 (LGPD) e o sigilo profissional do advogado.",
  },
  {
    title: "Para que as informações são usadas",
    description:
      "Exclusivamente para analisar o seu caso, responder ao que você perguntou e, se houver contratação, prestar o serviço dentro do escopo combinado.",
  },
  {
    title: "Seus direitos",
    description:
      "Você pode pedir, a qualquer momento, acesso, correção, anonimização ou eliminação dos dados que enviou, bem como revogar o consentimento. Basta solicitar por mensagem.",
  },
  {
    title: "Antes da publicação",
    description:
      "Este site ainda não está no ar. A identificação profissional completa e o destino de deploy serão definidos e informados aqui antes da publicação.",
  },
] as const

function PrivacidadePage() {
  return (
    <>
      <SiteHeader />

      <main id="conteudo" className="pt-(--navbar-size)">
        <div className="container mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 lg:px-16">
          <Heading as="h1" size="lg" className="mb-4">
            Política de privacidade
          </Heading>

          <Paragraph tone="strong" className="mb-12">
            Explico aqui, em linguagem simples, quais dados existem, para que
            são usados e como você pode controlar isso.
          </Paragraph>

          <div className="flex flex-col gap-10">
            {TOPICS.map((topic) => (
              <section key={topic.title} className="flex flex-col gap-2">
                <Heading as="h2" size="sm" className="m-0">
                  {topic.title}
                </Heading>
                <Paragraph className="m-0">{topic.description}</Paragraph>
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  )
}

export default PrivacidadePage
