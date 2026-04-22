import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const LEGACY_BLOG_SLUGS: Record<string, string> = {
  'miert-nepszeru-a-bowling-minden-korosztályban':
    'miert-nepszeru-a-bowling-minden-korosztalyban',
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (!pathname.startsWith('/blog/')) return NextResponse.next()

  const slug = pathname.slice('/blog/'.length).replace(/\/$/, '') || ''
  const normalized = slug.normalize('NFC')
  const targetSlug = LEGACY_BLOG_SLUGS[normalized] ?? LEGACY_BLOG_SLUGS[slug]
  if (!targetSlug) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/blog/${targetSlug}`
  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: '/blog/:path*',
}
