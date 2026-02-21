'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'KES 999',
      period: '/month',
      description: 'Perfect for small shops just getting started',
      features: [
        'Up to 1,000 products',
        'Basic inventory tracking',
        'Sales reports',
        'Up to 500 customer profiles',
        'Email support',
        'Mobile app access'
      ],
      cta: 'Start Free Trial',
      highlighted: false
    },
    {
      name: 'Professional',
      price: 'KES 2,999',
      period: '/month',
      description: 'For growing businesses with multiple needs',
      features: [
        'Unlimited products',
        'Advanced analytics',
        'Multi-location support',
        'Unlimited customer profiles',
        'Priority email & chat support',
        'Mobile app access',
        'Loyalty program',
        'Staff management',
        'Custom reports'
      ],
      cta: 'Get Started',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large retailers with advanced needs',
      features: [
        'Everything in Professional',
        'Advanced integrations',
        'Dedicated account manager',
        'Phone support',
        'Custom features',
        'API access',
        'Training & onboarding',
        'Multi-user teams'
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
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business. Upgrade or downgrade anytime, no long-term contracts.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`relative p-8 border transition-all ${
                plan.highlighted
                  ? 'border-primary bg-primary/5 lg:scale-105 shadow-lg'
                  : 'border-border bg-white hover:border-primary/30'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Most Popular
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
                    {plan.period !== 'pricing' && (
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    First month free, then billed monthly
                  </p>
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
