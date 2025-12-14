import { Card } from "@/components/ui/card"
import { Code2, Layers, Wrench } from "lucide-react"

export function TechStack() {
  const techCategories = [
    {
      icon: Code2,
      title: "Programming",
      description: "Building robust and scalable Android applications",
      skills: ["Java", "Kotlin", "SQL", "XML", "HTML", "CSS", "Bootstrap"],
    },
    {
      icon: Layers,
      title: "Frameworks & Libraries",
      description: "Creating modern Android apps with industry-standard tools",
      skills: [
        "MVVM Architecture",
        "Navigation Component",
        "Retrofit",
        "Firebase (Auth & FCM)",
        "RoomDB",
        "SQLite",
        "Coroutines",
        "Google Maps SDK",
        "Gson/JSON Parsing",
        "Glide",
        "Picasso",
      ],
    },
    {
      icon: Wrench,
      title: "Tools",
      description: "Leveraging development tools for efficiency and collaboration",
      skills: ["Android Studio", "Postman", "IntelliJ IDEA", "VS Code", "MySQL Workbench", "Git/GitHub", "GitLab"],
    },
  ]

  return (
    <section id="tech-stack" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          From Android frameworks to modern development tools, this is my technical toolkit for building
          high-performance mobile applications.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {techCategories.map((category) => (
            <Card key={category.title} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
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
