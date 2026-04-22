'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const links = [
  { href: '/', label: 'Főoldal' },
  { href: '/tortenet', label: 'Történet' },
  { href: '/felszereles', label: 'Felszerelés' },
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/technika', label: 'Technika' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || !isHome
          ? 'bg-background/97 backdrop-blur-sm border-b border-border shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="flex items-baseline gap-[0.18em] leading-none"
            aria-label="Hungary Bowling - Főoldal"
          >
            <div className="flex items-center gap-[0.18em] leading-none">
              <Image src="/favicon.ico" alt="Hungary Bowling" width={32} height={32} />
              <span
              className={cn(
                'font-serif font-bold text-[1.35rem] tracking-tight transition-colors duration-300',
                scrolled || open || !isHome ? 'text-foreground' : 'text-white'
              )}
            >
              Hungary
            </span>
            <span
              className={cn(
                'font-serif font-bold text-[1.35rem] tracking-tight transition-colors duration-300',
                scrolled || open || !isHome ? 'text-gold' : 'text-white/70'
              )}
            >
              Bowling
            </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Fő navigáció">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm tracking-wide transition-colors duration-200 relative pb-0.5',
                    'after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300',
                    active
                      ? scrolled || !isHome
                        ? 'text-foreground after:w-full after:bg-gold'
                        : 'text-white after:w-full after:bg-white/70'
                      : scrolled || !isHome
                        ? 'text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full after:bg-gold'
                        : 'text-white/70 hover:text-white after:w-0 hover:after:w-full after:bg-white/50'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className={cn(
              'lg:hidden p-2 transition-colors',
              scrolled || open || !isHome ? 'text-foreground' : 'text-white'
            )}
            aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-background border-b border-border',
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1" aria-label="Mobil navigáció">
          {links.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'py-2.5 text-sm tracking-wide border-b border-border/50 last:border-0',
                  active ? 'text-foreground font-medium' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
