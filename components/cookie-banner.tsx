'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('hb_cookie_consent')
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 900)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('hb_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('hb_cookie_consent', 'declined')
    setVisible(false)
  }

  return (
    <div
      role="dialog"
      aria-label="Süti-hozzájárulás"
      aria-live="polite"
      className={cn(
        'fixed bottom-0 left-0 right-0 z-[100] transition-all duration-500',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      )}
    >
      <div className="bg-primary border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <p className="text-sm text-primary-foreground/75 leading-relaxed max-w-2xl">
            Ez a weboldal sütiket (cookie-kat) használ a jobb felhasználói élmény érdekében.{' '}
            <Link
              href="/cookie-iranyelvek"
              className="text-primary-foreground/90 underline underline-offset-2 hover:text-primary-foreground transition-colors"
            >
              Süti-irányelvek
            </Link>
            {' '}és{' '}
            <Link
              href="/adatvedelmi-iranyelvek"
              className="text-primary-foreground/90 underline underline-offset-2 hover:text-primary-foreground transition-colors"
            >
              adatvédelmi irányelvek
            </Link>
            .
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/75 transition-colors px-3 py-2"
            >
              Elutasítom
            </button>
            <button
              onClick={accept}
              className="text-xs font-medium bg-primary-foreground text-primary px-5 py-2 rounded transition-opacity hover:opacity-90"
            >
              Elfogadom
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
