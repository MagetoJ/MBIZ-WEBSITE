'use client'

import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { CheckCircle2 } from 'lucide-react'

export function Benefits() {
  const t = useTranslations('benefits')

  const benefits = [
    {
      title: t('easy_to_use'),
      description: t('easy_to_use_desc')
    },
    {
      title: t('affordable'),
      description: t('affordable_desc')
    },
    {
      title: t('support'),
      description: t('support_desc')
    },
    {
      title: t('growth'),
      description: t('growth_desc')
    },
    {
      title: t('secure'),
      description: t('secure_desc')
    },
    {
      title: t('offline'),
      description: t('offline_desc')
    },
  ]

  return (
    <section id="benefits" className="w-full py-20 md:py-32 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            {t('title')}
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
