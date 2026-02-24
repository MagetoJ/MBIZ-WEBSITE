import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card } from '@/components/ui/card'
import { CheckCircle2, Circle } from 'lucide-react'

export default function RoadmapPage() {
  const milestones = [
    { title: "MFA/2FA Implementation", status: "Completed", desc: "Secure access for all user roles using industry-standard authenticator apps." },
    { title: "Multi-Branch Isolation", status: "Completed", desc: "Complete data separation and subdomain isolation for businesses with multiple locations." },
    { title: "Advanced Analytics", status: "In Progress", desc: "Deep-dive reports for real-time revenue, staff performance, and inventory trends." },
    { title: "Offline Mode POS", status: "Planned", desc: "Ability to continue sales and record transactions during internet outages with automatic sync." },
    { title: "M-Pesa Integration", status: "Planned", desc: "Seamless payment reconciliation directly within the POS checkout flow." }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow p-8 md:p-24">
        <h1 className="text-4xl font-bold text-foreground mb-12 text-center">Product Roadmap</h1>
        <div className="max-w-3xl mx-auto space-y-6">
          {milestones.map((m, i) => (
            <Card key={i} className="p-6 flex gap-4 items-start border-border bg-white shadow-sm">
              {m.status === "Completed" ? (
                <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
              ) : (
                <Circle className="text-muted-foreground w-6 h-6 shrink-0" />
              )}
              <div>
                <h3 className="text-xl font-bold text-foreground">{m.title}</h3>
                <p className="text-sm font-semibold text-primary mb-2">{m.status}</p>
                <p className="text-muted-foreground">{m.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
