import Link from 'next/link'

const footerLinks = {
  tartalom: [
    { href: '/tortenet', label: 'Történet' },
    { href: '/felszereles', label: 'Felszerelés' },
    { href: '/szabalyok', label: 'Szabályok' },
    { href: '/technika', label: 'Technika' },
    { href: '/blog', label: 'Blog' },
  ],
  hasznos: [
    { href: '/rolunk', label: 'Rólunk' },
    { href: '/rolunk#kapcsolat', label: 'Kapcsolat' },
    { href: '/cookie-iranyelvek', label: 'Süti-irányelvek' },
    { href: '/adatvedelmi-iranyelvek', label: 'Adatvédelmi irányelvek' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center justify-center gap-2">
              <div className="mb-4 flex items-baseline gap-[0.18em] leading-none">
                <span className="font-serif font-bold text-2xl tracking-tight text-primary-foreground">
                  Hungary
                </span>
                <span className="font-serif font-bold text-2xl tracking-tight" style={{ color: 'oklch(0.63 0.11 72)' }}>
                  Bowling
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
              A bowling sport megismerésének és szeretetének forrása Magyarországon.
            </p>
            <div className="mt-6 text-xs text-primary-foreground/40">
              <a
                href="mailto:info@hungarybowling.com"
                className="hover:text-primary-foreground/70 transition-colors"
              >
                info@hungarybowling.com
              </a>
            </div>
          </div>

          <div>
            <p className="section-label mb-5" style={{ color: 'oklch(0.63 0.11 72 / 0.7)' }}>
              Tartalom
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.tartalom.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="section-label mb-5" style={{ color: 'oklch(0.63 0.11 72 / 0.7)' }}>
              Hasznos
            </p>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.hasznos.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/35">
            &copy; {year} hungarybowling.com. Minden jog fenntartva.
          </p>
          <div className="flex gap-5">
            <Link
              href="/cookie-iranyelvek"
              className="text-xs text-primary-foreground/35 hover:text-primary-foreground/60 transition-colors"
            >
              Süti-irányelvek
            </Link>
            <Link
              href="/adatvedelmi-iranyelvek"
              className="text-xs text-primary-foreground/35 hover:text-primary-foreground/60 transition-colors"
            >
              Adatvédelmi irányelvek
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
