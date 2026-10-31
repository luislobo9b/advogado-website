import { cn } from "cn"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ_ITEMS = [
  {
    question: "Quanto custa uma consulta?",
    answer:
      "O valor da consulta é informado antes do atendimento, junto com o que está incluído. Quando o caso pede análise de documentos, escopo e custo são definidos antes de eu começar.",
  },
  {
    question: "Preciso pagar alguma coisa para falar com você?",
    answer:
      "Não existe obrigação de contratação para você tirar uma dúvida. O valor da consulta e dos honorários é apresentado com clareza antes de você decidir contratar.",
  },
  {
    question: "Em quanto tempo meu caso é resolvido?",
    answer:
      "Cada caso tem o seu próprio ritmo, que depende do tipo de demanda, da documentação e do trâmite do processo. Depois da análise, você recebe uma estimativa realista de prazo — e eu aviso se ela mudar.",
  },
  {
    question: "Quais documentos devo levar?",
    answer:
      "Depende do caso, mas normalmente ajudam: documentos de identificação, contrato ou cobranças envolvidas e registros de comunicação. Não junte nada antes de falarmos — eu digo o que é útil.",
  },
  {
    question: "Você atende pessoas de outra cidade?",
    answer:
      "Sim. Boa parte do atendimento pode ser remota, por mensagem e por videochamada, conforme o caso. A presença física é combinada quando faz sentido para a fase do processo.",
  },
  {
    question: "Como funciona o pagamento dos honorários?",
    answer:
      "Os honorários e a forma de pagamento são definidos por escrito antes do início do trabalho, em valores e parcelas combinados com você.",
  },
] as const

type FaqSectionProps = React.ComponentProps<"section">

function FaqSection({ className, ...props }: FaqSectionProps) {
  const CLASSES = {
    section: cn("grid min-h-dvh place-items-center"),
    colors: cn("bg-background text-foreground"),
    container: cn(
      "container mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"
    ),
    spacing: cn("gap-12 px-5 py-20 md:px-8 md:py-28 lg:px-16 lg:py-36"),
  }

  return (
    <section
      id="duvidas"
      data-slot="faq-section"
      className={cn(CLASSES.section, CLASSES.colors, className)}
      {...props}
    >
      <div
        data-slot="faq-section-container"
        className={cn(CLASSES.container, CLASSES.spacing)}
      >
        <Reveal>
          <SectionHeading
            eyebrow="Dúvidas"
            title="Perguntas que aparecem antes da primeira conversa."
            description="Se a sua dúvida não está aqui, pergunte direto no WhatsApp — respondemos sem compromisso."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="font-heading text-2xl text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}

export { FaqSection }
