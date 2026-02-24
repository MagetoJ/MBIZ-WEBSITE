import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function SecurityPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow p-8 md:p-24">
        <h1 className="text-4xl font-bold text-foreground mb-8">System Security</h1>
        <section className="space-y-6 max-w-4xl bg-white border border-border p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-primary">Multi-Factor Authentication (2FA)</h2>
          <p className="text-muted-foreground">
            As a core feature of our POS system, we mandate or highly recommend Two-Factor Authentication (2FA) for all administrative and staff accounts to prevent unauthorized access.
          </p>
          
          <h2 className="text-2xl font-semibold text-primary">Data Protection</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li><strong>Encryption in Transit:</strong> All data is transmitted via TLS 1.2+ encryption.</li>
            <li><strong>Encryption at Rest:</strong> Sensitive database records use AES-256 encryption.</li>
            <li><strong>Password Security:</strong> We use industry-standard bcrypt hashing for all user credentials.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary">Infrastructure & Monitoring</h2>
          <p className="text-muted-foreground">
            Our systems are hosted in secure data centers with 24/7 monitoring, multi-layered firewalls, and regular security audits to ensure your business data remains safe and available.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
