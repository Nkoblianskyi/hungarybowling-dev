import type { Metadata } from 'next'
import Link from 'next/link'
import { cikkek } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog és cikkek | Hungary Bowling',
  description:
    'Bowlingról szóló cikkek, elemzések és tippek. Technika, felszerelés, versenyélet és bowlingkultúra Magyarországon.',
}

const tagColors: Record<string, string> = {
  Technika: 'bg-blue-50 text-blue-700',
  Felszerelés: 'bg-amber-50 text-amber-700',
  Kultúra: 'bg-emerald-50 text-emerald-700',
  Kezdőknek: 'bg-purple-50 text-purple-700',
  Haladóknak: 'bg-red-50 text-red-700',
  Pszichológia: 'bg-indigo-50 text-indigo-700',
  Szórakozás: 'bg-pink-50 text-pink-700',
  Versenyélet: 'bg-orange-50 text-orange-700',
}

export default function BlogPage() {
  const featured = cikkek[0]
  const rest = cikkek.slice(1)

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="section-label mb-5" style={{ color: 'oklch(0.63 0.11 72)' }}>
            Cikkek és írások
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance max-w-2xl">
            Blog
          </h1>
          <p className="mt-6 text-primary-foreground/60 max-w-xl leading-relaxed text-lg">
            Technika, felszerelés, versenyélet és bowlingkultúra egyhelyen.
          </p>
        </div>
      </section>

      {/* KIEMELT CIKK */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-5 gap-10 lg:gap-16 items-start pb-14 border-b border-border mb-14"
          >
            <div className="lg:col-span-3">
              <span className="section-label mb-3 block">{featured.tag}</span>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-5 group-hover:text-gold transition-colors duration-200">
                {featured.cim}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {featured.kivonat}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-gold transition-colors duration-200">
                Teljes cikk olvasása
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <div className="lg:col-span-2 bg-surface rounded-lg p-8 h-full flex flex-col justify-center">
              <span className="font-serif text-6xl font-bold text-border/50 block mb-3 leading-none">01</span>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                A felszerelés kiválasztása meghatározza az egész játékélményt. Ez az egyik
                legmeghatározóbb döntés, amelyet egy bowlingjátékos meghozhat.
              </p>
            </div>
          </Link>

          {/* Cikkek rácsa */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {rest.map((cikk, i) => (
              <article key={cikk.slug}>
                <Link href={`/blog/${cikk.slug}`} className="group block border-t border-border pt-6 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="section-label">{cikk.tag}</span>
                    <span className="text-xs text-muted-foreground/40 italic">{cikk.hossz}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-foreground leading-snug mb-3 text-balance group-hover:text-gold transition-colors duration-200">
                    {cikk.cim}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {cikk.kivonat}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                    Olvasd el
                    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TEMAK */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="section-label mb-3">Böngésszen témák szerint</p>
            <h2 className="font-serif text-3xl font-bold text-foreground">Témakörök</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {['Technika', 'Felszerelés', 'Szabályok', 'Kezdőknek', 'Haladóknak', 'Versenyélet', 'Kultúra', 'Szórakozás', 'Pszichológia'].map(
              (tema) => (
                <div
                  key={tema}
                  className="px-5 py-2.5 bg-background border border-border rounded-full text-sm text-muted-foreground"
                >
                  {tema}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}
