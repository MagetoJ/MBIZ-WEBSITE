'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import Link from 'next/link'

export function CTA() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
  }

  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Main CTA */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of entrepreneurs using mBiz to grow their businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 items-center">
              <Link href="https://mbizapp.com/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Start Your Free Trial Today
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
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>

          {/* Email Signup */}
          <div className="bg-white border border-border rounded-xl p-8 md:p-12">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  Stay Updated
                </h3>
                
                <p className="text-muted-foreground">
                  Get exclusive tips, updates, and special offers delivered to your inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-border"
                />
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center">
                We respect your <a href="https://statbricks.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">privacy</a>. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* FAQ/Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Free 30-Day Trial
              </h4>
              <p className="text-sm text-muted-foreground">
                Full access to all features. No credit card required.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Easy Migration
              </h4>
              <p className="text-sm text-muted-foreground">
                Our team helps you import your existing data at no cost.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                24/7 Support
              </h4>
              <p className="text-sm text-muted-foreground">
                Get help when you need it in English and Swahili.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
