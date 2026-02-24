'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      title: 'Retail & Supermarkets',
      description: 'Streamline checkout with POS, manage deep inventory, and prevent stock theft with full audit trails.'
    },
    {
      title: 'Wholesale Distributors',
      description: 'Full audit trails for stock movement and seamless branch management with centralized oversight.'
    },
    {
      title: 'Hardware & Pharmacies',
      description: 'Track accurate stock levels with barcode scanning and manage customer credit balances effectively.'
    },
    {
      title: 'Hotels & Restaurants',
      description: 'POS integration, expense tracking, and instant online storefront visibility for bookings and orders.'
    },
    {
      title: 'Boutiques & Fashion',
      description: 'Showcase products with high-quality images and launch your branded online shop in minutes.'
    },
    {
      title: 'Multi-Branch Businesses',
      description: 'Centralized reporting with strict branch data separation for clear oversight from any device.'
    },
  ]

  return (
    <section id="benefits" className="w-full py-20 md:py-32 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Who Is mBiz For?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Versatile enough for any SME, specialized enough for your unique business needs.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <Card key={idx} className="p-8 bg-white border border-border">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
