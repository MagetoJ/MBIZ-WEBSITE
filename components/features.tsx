'use client'

import { Card } from '@/components/ui/card'
import { BarChart3, Users, Package, TrendingUp, Smartphone, Lock } from 'lucide-react'

export function Features() {
  const features = [
    {
      icon: Package,
      title: 'Smart Inventory',
      description: 'Track stock levels in real-time, get low stock alerts, and manage multiple locations effortlessly.'
    },
    {
      icon: TrendingUp,
      title: 'Sales Analytics',
      description: 'Understand your sales patterns with detailed reports and insights to grow your business.'
    },
    {
      icon: Users,
      title: 'Customer Management',
      description: 'Build lasting relationships with customer profiles, purchase history, and loyalty tracking.'
    },
    {
      icon: BarChart3,
      title: 'Financial Reports',
      description: 'Generate comprehensive financial reports and manage invoicing with ease.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Manage your shop from anywhere with our powerful iOS and Android applications.'
    },
    {
      icon: Lock,
      title: 'Secure & Reliable',
      description: 'Bank-level security ensures your business data is always safe and protected.'
    },
  ]

  return (
    <section id="features" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Powerful Features for Modern Shops
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run and grow your business in one intuitive platform.
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
