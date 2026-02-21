'use client'

import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">m</span>
            </div>
            <span className="text-xl font-bold text-foreground">mBiz</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-sm text-foreground hover:text-primary transition-colors">
              Benefits
            </a>
            <a href="#pricing" className="text-sm text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}
