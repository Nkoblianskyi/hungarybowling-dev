import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { cikkek, getCikk } from '@/lib/blog-data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return cikkek.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const cikk = getCikk(slug)
  if (!cikk) return {}
  return {
    title: `${cikk.cim} | Hungary Bowling`,
    description: cikk.kivonat,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const cikk = getCikk(slug)
  if (!cikk) notFound()

  const currentIndex = cikkek.findIndex((c) => c.slug === slug)
  const prev = currentIndex > 0 ? cikkek[currentIndex - 1] : null
  const next = currentIndex < cikkek.length - 1 ? cikkek[currentIndex + 1] : null

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-20 bg-primary overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          aria-hidden="true"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 40px, oklch(1 0 0 / 0.3) 40px, oklch(1 0 0 / 0.3) 41px)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors duration-200 mb-8"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Vissza a bloghoz
          </Link>

          <span
            className="inline-block text-[10px] tracking-[0.18em] uppercase font-medium mb-5 px-3 py-1 rounded-full border"
            style={{ color: 'oklch(0.63 0.11 72)', borderColor: 'oklch(0.63 0.11 72 / 0.4)' }}
          >
            {cikk.tag}
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight text-balance mb-6">
            {cikk.cim}
          </h1>
          <p className="text-primary-foreground/60 text-lg leading-relaxed max-w-2xl">
            {cikk.kivonat}
          </p>
        </div>
      </section>

      {/* CIKK TARTALMA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="space-y-7">
            {cikk.tartalom.map((bekezdes, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-lg text-foreground leading-relaxed font-medium'
                    : 'text-base text-muted-foreground leading-relaxed'
                }
              >
                {bekezdes}
              </p>
            ))}
          </div>

          {/* Elválasztó */}
          <div className="mt-16 pt-10 border-t border-border">
            <p className="text-sm text-muted-foreground/60 mb-2">Témakör</p>
            <span className="inline-block px-4 py-1.5 bg-surface border border-border rounded-full text-sm text-muted-foreground">
              {cikk.tag}
            </span>
          </div>
        </div>
      </section>

      {/* NAVIGÁCIÓ ELŐZŐ / KÖVETKEZŐ */}
      <section className="py-12 bg-surface border-t border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row gap-6 justify-between">
            {prev ? (
              <Link
                href={`/blog/${prev.slug}`}
                className="group flex-1 flex flex-col gap-1 p-6 bg-background border border-border rounded-lg hover:border-gold/40 transition-colors duration-200"
              >
                <span className="text-xs text-muted-foreground/60 flex items-center gap-1.5">
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Előző cikk
                </span>
                <span className="font-serif text-sm font-semibold text-foreground leading-snug text-balance group-hover:text-gold transition-colors duration-200">
                  {prev.cim}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {next ? (
              <Link
                href={`/blog/${next.slug}`}
                className="group flex-1 flex flex-col gap-1 p-6 bg-background border border-border rounded-lg hover:border-gold/40 transition-colors duration-200 sm:items-end sm:text-right"
              >
                <span className="text-xs text-muted-foreground/60 flex items-center gap-1.5 sm:flex-row-reverse">
                  Következő cikk
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="font-serif text-sm font-semibold text-foreground leading-snug text-balance group-hover:text-gold transition-colors duration-200">
                  {next.cim}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M13 8H3M7 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Összes cikk
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
