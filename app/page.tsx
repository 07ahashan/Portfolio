import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { ScrollIndicator } from "@/components/scroll-indicator"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <ScrollIndicator />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  )
}
