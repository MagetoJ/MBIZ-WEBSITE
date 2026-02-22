'use client'

import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { BarChart3, Users, Package, TrendingUp, Smartphone, Lock } from 'lucide-react'

export function Features() {
  const t = useTranslations('features')

  const features = [
    {
      icon: Package,
      title: t('smart_inventory'),
      description: t('smart_inventory_desc')
    },
    {
      icon: TrendingUp,
      title: t('sales_analytics'),
      description: t('sales_analytics_desc')
    },
    {
      icon: Users,
      title: t('customer_mgmt'),
      description: t('customer_mgmt_desc')
    },
    {
      icon: BarChart3,
      title: t('financial_reports'),
      description: t('financial_reports_desc')
    },
    {
      icon: Smartphone,
      title: t('mobile_app'),
      description: t('mobile_app_desc')
    },
    {
      icon: Lock,
      title: t('secure_reliable'),
      description: t('secure_reliable_desc')
    },
  ]

  return (
    <section id="features" className="w-full py-20 md:py-32 bg-background">
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
