'use client'

import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

export function Pricing() {
  const t = useTranslations('pricing')

  const plans = [
    {
      name: t('six_month'),
      price: t('six_month_price'),
      period: t('six_month_period'),
      monthlyRate: t('six_month_monthly'),
      description: t('six_month_desc'),
      savings: null,
      features: [
        t('unlimited_branches'),
        t('full_features'),
        t('email_support'),
        t('mobile_access'),
        t('basic_analytics')
      ],
      cta: `${t('select_btn').replace('{plan}', t('six_month'))}`,
      highlighted: false
    },
    {
      name: t('annual'),
      price: t('annual_price'),
      period: t('annual_period'),
      monthlyRate: t('annual_monthly'),
      description: t('annual_desc'),
      savings: t('annual_savings'),
      features: [
        t('unlimited_branches'),
        t('full_features'),
        t('priority_support'),
        t('mobile_access'),
        t('advanced_analytics')
      ],
      cta: `${t('select_btn').replace('{plan}', t('annual'))}`,
      highlighted: false
    },
    {
      name: t('three_year'),
      price: t('three_year_price'),
      period: t('three_year_period'),
      monthlyRate: t('three_year_monthly'),
      description: t('three_year_desc'),
      savings: t('three_year_savings'),
      features: [
        t('unlimited_branches'),
        t('full_features'),
        t('priority_support'),
        t('mobile_access'),
        t('advanced_analytics'),
        t('dedicated_support')
      ],
      cta: `${t('select_btn').replace('{plan}', t('three_year'))}`,
      highlighted: true
    },
    {
      name: t('enterprise'),
      price: t('enterprise_price'),
      period: '',
      monthlyRate: '',
      description: t('enterprise_desc'),
      savings: null,
      features: [
        t('multi_branch'),
        t('automated_analytics'),
        t('data_security'),
        t('custom_deployment'),
        t('dedicated_support'),
        t('priority_support')
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
            {t('title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('description')}
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
