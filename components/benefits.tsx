'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export function Benefits() {
  const benefits = [
    {
      title: 'Save Time',
      description: 'Automate routine tasks and spend less time on paperwork. Focus on growing your business.'
    },
    {
      title: 'Reduce Errors',
      description: 'Eliminate manual mistakes with automated calculations and real-time inventory tracking.'
    },
    {
      title: 'Increase Revenue',
      description: 'Identify trends, optimize pricing, and make data-driven decisions to boost sales.'
    },
    {
      title: 'Better Organization',
      description: 'Keep everything organized in one place. No more scattered notes or lost records.'
    },
    {
      title: 'Happy Customers',
      description: 'Provide better service with quick checkouts, loyalty rewards, and personalized experience.'
    },
    {
      title: 'Scale with Confidence',
      description: 'Grow from one shop to multiple locations without losing control or visibility.'
    },
  ]

  return (
    <section id="benefits" className="w-full py-20 md:py-32 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Why Choose mBiz?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed specifically for Kenyan shop owners to succeed in the modern marketplace.
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
