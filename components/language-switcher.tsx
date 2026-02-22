'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

export function LanguageSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()

  const getLocalizedPath = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '')
    return `/${newLocale}${pathWithoutLocale || ''}`
  }

  return (
    <div className="flex gap-2">
      <Link href={getLocalizedPath('en')}>
        <Button
          variant={locale === 'en' ? 'default' : 'outline'}
          size="sm"
          className="text-xs"
        >
          English
        </Button>
      </Link>
      <Link href={getLocalizedPath('sw')}>
        <Button
          variant={locale === 'sw' ? 'default' : 'outline'}
          size="sm"
          className="text-xs"
        >
          Swahili
        </Button>
      </Link>
    </div>
  )
}
