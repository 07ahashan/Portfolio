import { Card } from "@/components/ui/card"
import { FileText, GraduationCap, Briefcase } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Bio</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Junior Software Engineer with hands-on experience building end-to-end Android applications using Kotlin
              and Java. Proficient in modern Android development with MVVM architecture, Retrofit, Firebase, RoomDB, and
              Google Maps SDK. Skilled in creating scalable modules for offline storage, background tasks, and real-time
              features with a strong focus on clean architecture, performance optimization, and modern Android best
              practices.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="h-5 w-5 text-primary" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <Card className="p-4 bg-card border-border mb-4">
              <h4 className="font-semibold mb-1">B.Tech, Computer Science and Engineering</h4>
              <p className="text-sm text-muted-foreground mb-1">Punjab Technical University</p>
              <p className="text-sm text-muted-foreground">2021 - 2025 (Expected) • CGPA: 8.33</p>
            </Card>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold">Experience</h3>
          </div>
          <Card className="p-6 bg-card border-border">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
              <div>
                <h4 className="font-semibold text-lg mb-1">Junior Software Engineer</h4>
                <p className="text-muted-foreground">SoftTech Nation Pvt. Ltd.</p>
              </div>
              <p className="text-sm text-muted-foreground mt-2 md:mt-0">October 2024 - Present</p>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>
                  Built end-to-end Android apps using Kotlin/Java with modern Material UI, RecyclerView, Navigation
                  Component, and MVVM architecture.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>
                  Integrated REST APIs (Retrofit/HTTP), Firebase Authentication, RoomDB, In-App Payments, Coroutines,
                  and real-time location with Google Maps SDK.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>
                  Developed scalable modules for offline storage, background tasks, push notifications, JSON/Gson
                  parsing, and reusable UI components.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary mt-1.5">•</span>
                <span>
                  Collaborated with senior developers to optimize lifecycle management, reducing crash rates by 30%
                  (Firebase Crashlytics) and improving overall app performance.
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
