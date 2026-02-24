'use client'

import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { PrivacyPolicyModal, SecurityPolicyModal, TermsOfServiceModal } from '@/components/policy-modals'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const params = useParams()
  const locale = params?.locale || 'en'

  return (
    <footer className="w-full bg-foreground/5 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href={`/${locale}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity inline-flex">
              <div className="w-8 h-8 relative">
                <img src="/android-chrome-512x512.png" alt="mBiz Logo" className="w-full h-full object-contain rounded-lg" />
              </div>
              <span className="text-lg font-bold text-foreground">mBiz</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Smart Inventory & POS for Growing Businesses
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <Link href={`/${locale}/security`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/roadmap`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Legal</h4>
            <ul className="space-y-2">
              <li>
                <PrivacyPolicyModal />
              </li>
              <li>
                <TermsOfServiceModal />
              </li>
              <li>
                <SecurityPolicyModal />
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} mBiz. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Status
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Support
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              System Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
