'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

export function Pricing() {
  const plans = [
    {
      name: '3-Month',
      price: 'KES 10,500',
      period: '/3 months',
      monthlyRate: 'KES 3,500/mo',
      description: '2 branches included free',
      savings: null,
      features: [
        '2 branches included free',
        'Automated analytics',
        'Data security & backup',
        'And more'
      ],
      cta: 'Select 3-Month',
      highlighted: false
    },
    {
      name: '6-Month',
      price: 'KES 18,000',
      period: '/6 months',
      monthlyRate: 'KES 3,000/mo',
      description: 'Save KES 3,000 vs shorter plans',
      savings: 'SAVE KES 3,000',
      features: [
        '2 branches included free',
        'Automated analytics',
        'Data security & backup',
        'And more'
      ],
      cta: 'Select 6-Month',
      highlighted: false
    },
    {
      name: 'Annual',
      price: 'KES 30,000',
      period: '/year',
      monthlyRate: 'KES 2,500/mo',
      description: 'Save KES 6,000 vs shorter plans',
      savings: 'SAVE KES 6,000',
      features: [
        '2 branches included free',
        'Automated analytics',
        'Data security & backup',
        'And more'
      ],
      cta: 'Select Annual',
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
        'Multi-branch support',
        'Automated analytics',
        'Data security & backup',
        'Custom deployment',
        'Dedicated support'
      ],
      cta: 'Custom pricing',
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

                {/* Price Box */}
                <div className="bg-primary p-6 rounded-xl text-primary-foreground shadow-inner -mx-2">
                  <div className="space-y-1 text-center">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-primary-foreground/80 text-sm">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    {plan.monthlyRate && (
                      <p className="text-xs text-primary-foreground/90 font-medium">
                        ({plan.monthlyRate})
                      </p>
                    )}
                  </div>
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
