'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function Header() {
  const params = useParams()
  const locale = params?.locale || 'en'

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 relative">
              <img src="/android-chrome-512x512.png" alt="mBiz Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
            <span className="text-xl font-bold text-foreground">mBiz</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-foreground hover:text-primary transition-colors">
              Pricing
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
