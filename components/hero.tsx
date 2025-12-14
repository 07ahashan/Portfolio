import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          An Amazing{" "}
          <span className="bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
            Android Developer
          </span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
          Hi 👋, My name is Ahashan Ali, and I am a Junior Software Engineer based in Mohali, Punjab. I specialize in
          building modern, scalable Android applications with Kotlin and Java.
        </p>
        <div className="flex items-center justify-center gap-4 mb-8">
          <Button asChild size="lg">
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="https://github.com/07ahashan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="h-6 w-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ahashan-ali-bb765321b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link
            href="mailto:dev.ahashan@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  )
}
