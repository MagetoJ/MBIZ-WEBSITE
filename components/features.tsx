'use client'

import { Card } from '@/components/ui/card'
import { BarChart3, Users, Package, TrendingUp, Smartphone, Lock } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Package,
      title: 'Stop Stock Theft',
      description: 'Full audit trails, barcode scanner integration, and role-based access to make theft hard to hide.'
    },
    {
      icon: TrendingUp,
      title: 'Sell Online Everywhere',
      description: 'Activate your own branded shop and marketplace listing with a single toggle. No extra fees.'
    },
    {
      icon: Smartphone,
      title: 'Monitor from Anywhere',
      description: 'Real-time revenue, top products, and staff performance visible from your phone, anywhere.'
    },
    {
      icon: BarChart3,
      title: 'Save Time Every Day',
      description: 'Replace slow, manual processes with barcode scanning, automated reporting, and digital receipts.'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Track purchase history, credit balances with due dates, and contact customers directly via WhatsApp.'
    },
    {
      icon: Lock,
      title: 'Secure & Multi-Branch',
      description: 'Role-based access, 2FA, and subdomain isolation for unlimited branches under one account.'
    },
  ]

  return (
    <section id="features" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Real Control for Growing Businesses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            mBiz replaces complexity with clarity, helping you run your business efficiently from day one.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon
            return (
              <Card key={idx} className="p-6 bg-white border border-border hover:border-primary/30 transition-colors hover:shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
