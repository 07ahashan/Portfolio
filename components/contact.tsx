import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, Phone, Award } from "lucide-react"
import Link from "next/link"

export function Contact() {
  const achievements = [
    "Problem-solving score of 356 on GeeksforGeeks",
    "Solved 237 coding problems on CodeChef",
    "3-Star rating on HackerRank",
    'Second Prize in "Crack The Code" programming competition',
  ]

  const certifications = [
    "Programming in Java - NPTEL (IIT Kharagpur)",
    "Android Application Development - Great Learning",
    "Java Problem Solving – I - CodeChef",
    "Spring Boot - Udemy",
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 bg-card border-border">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              <Link
                href="mailto:dev.ahashan@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>dev.ahashan@gmail.com</span>
              </Link>
              <Link
                href="tel:+917766095511"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+91 7766095511</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ahashan-ali-bb765321b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn Profile</span>
              </Link>
              <Link
                href="https://github.com/07ahashan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub Profile</span>
              </Link>
            </div>
          </Card>

          <div className="space-y-8">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <ul className="space-y-2">
                {achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            © 2025 Ahashan Ali. Built with Next.js and deployed on Vercel.
          </p>
        </div>
      </div>
    </section>
  )
}
