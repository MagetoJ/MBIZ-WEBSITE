'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

export function PrivacyPolicyModal() {
  return (
    <a
      href="https://statbricks.com/privacy"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
    >
      Privacy Policy
    </a>
  )
}

export function SecurityPolicyModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        Security Policy
      </button>

      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Security Policy</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4 text-sm text-foreground">
            <p><strong>Last Updated: February 2026</strong></p>

            <div>
              <h3 className="font-bold mb-2">1. Overview</h3>
              <p>mBiz is committed to maintaining the highest standards of information security. This policy outlines our commitment to protecting user data and systems.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">2. Security Principles</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Confidentiality:</strong> Only authorized users can access sensitive information</li>
                <li><strong>Integrity:</strong> Data is protected from unauthorized modification</li>
                <li><strong>Availability:</strong> Services are accessible when needed</li>
                <li><strong>Accountability:</strong> All security actions are logged and monitored</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">3. Data Protection</h3>
              <p><strong>3.1 Encryption:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>In Transit: TLS 1.2+ encryption</li>
                <li>At Rest: AES-256 encryption</li>
                <li>Passwords: Hashed using bcrypt</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">3.2 Access Controls</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Two-Factor Authentication (2FA) available</li>
                <li>Role-based access control (RBAC)</li>
                <li>Automatic session timeout after 30 minutes</li>
                <li>Strong password requirements</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">4. Infrastructure Security</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Multi-layered firewalls</li>
                <li>DDoS attack protection</li>
                <li>Regular security updates and patches</li>
                <li>Continuous system monitoring</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">5. Application Security</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Code review before deployment</li>
                <li>Regular vulnerability scanning</li>
                <li>Annual penetration testing</li>
                <li>OWASP Top 10 prevention</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">6. Incident Response</h3>
              <p>We maintain a 24/7 incident response team. In case of a data breach, we notify affected users within 24-72 hours.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">7. Compliance</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>GDPR compliant</li>
                <li>ISO 27001 certified</li>
                <li>PCI DSS Level 1 compliant</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">11. Contact Us</h3>
              <p>For security concerns: <strong>support@mbizapp.com</strong></p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}

export function TermsOfServiceModal() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        onClick={() => setOpen(true)}
        className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        Terms of Service
      </button>

      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogClose />
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4 text-sm text-foreground">
            <p><strong>Last Updated: February 2026</strong></p>

            <div>
              <h3 className="font-bold mb-2">1. Acceptance of Terms</h3>
              <p>By accessing and using mBiz, you agree to be bound by these Terms. If you do not agree, you may not use the Service.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">2. Service Description</h3>
              <p>mBiz provides a digital business management platform for retailers to manage inventory, track sales, maintain customer relationships, and generate business reports.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">3. Eligibility & Account Registration</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>You must be at least 18 years old</li>
                <li>You are responsible for account security and credentials</li>
                <li>You agree to provide accurate information</li>
                <li>Notify us immediately of unauthorized access</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">4. User Conduct & Prohibited Activities</h3>
              <p>You agree NOT to:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Engage in illegal activities</li>
                <li>Attempt fraudulent transactions</li>
                <li>Harass or threaten others</li>
                <li>Hack or exploit the Service</li>
                <li>Upload malware or harmful code</li>
                <li>Interfere with Service operations</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">5. Subscription Plans & Billing</h3>
              <p><strong>Pricing:</strong></p>
              <ul className="list-disc pl-5 space-y-1">
                <li>3-Month: KES 10,500 (KES 3,500/month)</li>
                <li>6-Month: KES 18,000 (KES 3,000/month)</li>
                <li>Annual: KES 30,000 (KES 2,500/month)</li>
              </ul>
              <p className="mt-2"><strong>No refunds</strong> for partial periods or unused service. Prepaid plans cannot be refunded.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">6. Intellectual Property Rights</h3>
              <p>All content and features are owned by mBiz and protected by copyright and trademark laws. You may not reproduce, modify, or distribute without permission.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">7. User Data & Ownership</h3>
              <p>You retain ownership of your business data. We have a license to store, process, and backup your data for service delivery.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">8. Limitation of Liability</h3>
              <p>THE SERVICE IS PROVIDED "AS-IS" WITHOUT WARRANTIES. We are NOT liable for indirect, consequential, or punitive damages exceeding fees paid in the past 12 months.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">9. Termination</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>You may cancel anytime; takes effect at billing period end</li>
                <li>We may terminate for Terms violations or illegal activity</li>
                <li>Upon termination, your data is retained for 30 days</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">10. Governing Law</h3>
              <p>These Terms are governed by the laws of Kenya. Disputes are resolved in courts located in Nairobi, Kenya.</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">11. Contact Us</h3>
              <p>For questions: <strong>support@mbizapp.com</strong></p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
