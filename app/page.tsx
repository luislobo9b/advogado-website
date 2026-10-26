import { AboutSection } from "@/components/sections/about-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FaqSection } from "@/components/sections/faq-section"
import { HeroSection } from "@/components/sections/hero-section"
import { PracticeSection } from "@/components/sections/practice-section"
import { ProcessSection } from "@/components/sections/process-section"
import { ValuesSection } from "@/components/sections/values-section"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { WhatsAppButton } from "@/components/whatsapp-button"

function Page() {
  return (
    <>
      <SiteHeader />

      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <PracticeSection />
        <ProcessSection />
        <ValuesSection />
        <FaqSection />
        <ContactSection />
      </main>

      <SiteFooter />
      <WhatsAppButton />
    </>
  )
}

export default Page
