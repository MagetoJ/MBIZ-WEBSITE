'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

export function Pricing() {
  const plans = [
    {
      name: '6-Month',
      price: 'KES 9,000',
      period: '/6 months',
      monthlyRate: 'KES 1,500/mo',
      description: 'Pay as you grow',
      savings: null,
      features: [
        'Per branch pricing',
        'Add unlimited staff',
        'Full feature access',
        'Email support',
        'Mobile app access'
      ],
      cta: 'Select 6-Month',
      highlighted: false
    },
    {
      name: 'Annual',
      price: 'KES 16,000',
      period: '/year',
      monthlyRate: 'KES 1,333/mo',
      description: 'Save KES 2,000 vs shorter plans',
      savings: 'SAVE KES 2,000',
      features: [
        'Per branch pricing',
        'Add unlimited staff',
        'Full feature access',
        'Priority email & chat support',
        'Mobile app access'
      ],
      cta: 'Select Annual',
      highlighted: false
    },
    {
      name: '3-Year',
      price: 'KES 45,000',
      period: '/3 years',
      monthlyRate: 'KES 1,250/mo',
      description: 'Save KES 9,000 vs shorter plans',
      savings: 'SAVE KES 9,000',
      features: [
        'Per branch pricing',
        'Add unlimited staff',
        'Full feature access',
        'Priority email & chat support',
        'Mobile app access',
        'Dedicated support'
      ],
      cta: 'Select 3-Year',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom pricing',
      period: '',
      monthlyRate: '',
      description: 'Tailored to your needs',
      savings: null,
      features: [
        'Custom on-premise installation',
        'Full data ownership',
        'Custom deployment',
        'Handover training',
        'Priority email & chat support'
      ],
      cta: 'Contact Sales',
      highlighted: false
    },
  ]

  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Pricing per Branch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            mBiz is priced per branch, not per user. Add as many staff as your business needs — you only pay for the locations you run.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative p-8 border transition-all ${
                plan.highlighted
                  ? 'border-primary bg-primary/5 lg:scale-105 shadow-lg'
                  : 'border-border bg-white hover:border-primary/30'
              }`}
            >
              {plan.savings && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {plan.savings}
                  </span>
                </div>
              )}

              <div className="space-y-6">
                {/* Plan Header */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  {plan.monthlyRate && (
                    <p className="text-xs text-muted-foreground">
                      ({plan.monthlyRate})
                    </p>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                      : 'border border-border text-foreground hover:bg-secondary'
                  }`}
                  variant={plan.highlighted ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>

                {/* Features */}
                <div className="space-y-3 pt-6 border-t border-border">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
