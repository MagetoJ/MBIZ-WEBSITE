'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 bg-accent/20 rounded-full text-sm text-accent-foreground">
                ✨ Smart Inventory & POS for Growing Businesses
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
                Know your stock. Grow your sales.
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl text-balance">
                mBiz is built for small and medium enterprises that want real control over their business — without the complexity or cost of enterprise software.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://mbizapp.com/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">5,000+</p>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
              <div className="h-8 w-px bg-border"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">24/7</p>
                <p className="text-sm text-muted-foreground">Support</p>
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
                <p className="text-sm text-muted-foreground">Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
