'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm text-accent-foreground">
                {t('badge')}
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
                {t('title')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl text-balance">
                {t('description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://mbizapp.com/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  {t('cta_primary')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                {t('cta_secondary')}
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{t('users_count')}</p>
                <p className="text-sm text-muted-foreground">{t('active_users')}</p>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{t('satisfaction_rate')}</p>
                <p className="text-sm text-muted-foreground">{t('satisfaction')}</p>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">{t('support_hours')}</p>
                <p className="text-sm text-muted-foreground">{t('support')}</p>
              </div>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative h-96 md:h-full min-h-[400px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl"></div>
            <div className="absolute inset-4 bg-white/50 rounded-xl backdrop-blur-sm flex items-center justify-center">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg"></div>
                </div>
                <p className="text-sm text-muted-foreground">{t('preview')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
