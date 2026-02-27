'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { useParams } from 'next/navigation'

export function Hero() {
  const params = useParams()
  const locale = params?.locale || 'en'

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
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <Link href="https://web.mbizapp.com/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <div className="flex gap-4">
                <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Features
                </a>
                <span className="text-border">|</span>
                <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
                <span className="text-border">|</span>
                <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Watch Demo
                </button>
              </div>
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
          <div className="relative h-[400px] md:h-[500px] w-full group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-2xl -rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
            <div className="absolute inset-2 bg-white border border-border rounded-xl shadow-2xl overflow-hidden rotate-1 group-hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full relative">
                <img 
                  src="/dashboard-preview.png" 
                  alt="mBiz Dashboard Preview" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-xl border border-border animate-bounce-slow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">Real-time Revenue</p>
                  <p className="text-sm font-bold text-foreground">Tracked Live</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
