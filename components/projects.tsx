import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "TANKSPOTTER – Fuel Delivery App",
      period: "2024 - Ongoing",
      description: "Native Android driver application for on-demand fuel delivery used in the USA market",
      highlights: [
        "Built the driver app using Java/Kotlin with Retrofit and SQLite for secure API integration and offline-ready local storage",
        "Implemented Google Maps for real-time location tracking, along with WorkManager for background tasks and smooth operations",
        "Integrated Firebase Cloud Messaging (FCM) for push notifications and added scheduling features for daily operations",
        "Delivered a responsive, production-grade app with demo training videos and web-scheduled job coordination",
      ],
      tags: ["Java", "Kotlin", "Google Maps", "Firebase FCM", "WorkManager", "SQLite"],
    },
    {
      title: "Custom Fuel App (CFA)",
      period: "2024 - Ongoing",
      description: "Enterprise fuel ordering application with dynamic catalog and integrated payments",
      highlights: [
        "Implemented a dynamic catalog with 100+ fuel variants across multiple locations",
        "Designed a responsive UI with integrated payment gateways for seamless fuel ordering",
        "Engineered scalable architecture utilizing Retrofit for REST API integration and SQLite for local storage",
      ],
      tags: ["Android", "Retrofit", "SQLite", "Payment Gateway", "REST API"],
    },
    {
      title: "AAHAR App – A Hand Towards the Needy",
      period: "Feb. 2025",
      description: "Android application connecting donors with NGOs to reduce food wastage",
      highlights: [
        "Developed the app using Kotlin and MVVM architecture for clean, scalable, and maintainable code",
        "Integrated RESTful APIs with Retrofit and implemented Firebase Authentication for secure user onboarding",
        "Designed smooth donation and pickup workflows using RecyclerView and modern Material UI components",
        "Enabled real-time coordination between donors and NGOs, helping minimize food wastage",
      ],
      tags: ["Kotlin", "MVVM", "Retrofit", "Firebase Auth", "Material UI", "RecyclerView"],
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects</h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="p-6 md:p-8 bg-card border-border hover:border-primary/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.period}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
