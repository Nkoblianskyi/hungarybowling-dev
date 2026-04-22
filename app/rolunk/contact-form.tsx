'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface FormData {
  nev: string
  email: string
  targy: string
  uzenet: string
  beleegyek: boolean
}

const initialData: FormData = {
  nev: '',
  email: '',
  targy: '',
  uzenet: '',
  beleegyek: false,
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialData)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e: Partial<Record<keyof FormData, string>> = {}
    if (!form.nev.trim()) e.nev = 'Kérjük, adja meg a nevét.'
    if (!form.email.trim()) {
      e.email = 'Kérjük, adja meg az e-mail-címét.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Kérjük, érvényes e-mail-címet adjon meg.'
    }
    if (!form.targy.trim()) e.targy = 'Kérjük, adja meg az üzenet tárgyát.'
    if (!form.uzenet.trim()) e.uzenet = 'Kérjük, írja meg üzenetét.'
    if (!form.beleegyek)
      e.beleegyek = 'Az adatvédelmi irányelvek elfogadása szükséges az üzenet elküldéséhez.'
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
    setForm(initialData)
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Nev */}
        <div>
          <label
            htmlFor="nev"
            className="block text-xs font-semibold text-foreground/70 mb-1.5 tracking-wide uppercase"
          >
            Teljes név
          </label>
          <input
            id="nev"
            type="text"
            autoComplete="name"
            value={form.nev}
            onChange={(e) => setForm((f) => ({ ...f, nev: e.target.value }))}
            className={cn(
              'w-full bg-background border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-1 focus:ring-primary transition',
              errors.nev ? 'border-destructive' : 'border-input'
            )}
            placeholder="Az Ön neve"
            aria-describedby={errors.nev ? 'nev-err' : undefined}
          />
          {errors.nev && (
            <p id="nev-err" className="mt-1.5 text-xs text-destructive">
              {errors.nev}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold text-foreground/70 mb-1.5 tracking-wide uppercase"
          >
            E-mail-cím
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className={cn(
              'w-full bg-background border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-1 focus:ring-primary transition',
              errors.email ? 'border-destructive' : 'border-input'
            )}
            placeholder="pelda@email.hu"
            aria-describedby={errors.email ? 'email-err' : undefined}
          />
          {errors.email && (
            <p id="email-err" className="mt-1.5 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        {/* Targy */}
        <div>
          <label
            htmlFor="targy"
            className="block text-xs font-semibold text-foreground/70 mb-1.5 tracking-wide uppercase"
          >
            Tárgy
          </label>
          <input
            id="targy"
            type="text"
            value={form.targy}
            onChange={(e) => setForm((f) => ({ ...f, targy: e.target.value }))}
            className={cn(
              'w-full bg-background border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-1 focus:ring-primary transition',
              errors.targy ? 'border-destructive' : 'border-input'
            )}
            placeholder="Üzenet tárgya"
            aria-describedby={errors.targy ? 'targy-err' : undefined}
          />
          {errors.targy && (
            <p id="targy-err" className="mt-1.5 text-xs text-destructive">
              {errors.targy}
            </p>
          )}
        </div>

        {/* Uzenet */}
        <div>
          <label
            htmlFor="uzenet"
            className="block text-xs font-semibold text-foreground/70 mb-1.5 tracking-wide uppercase"
          >
            Üzenet
          </label>
          <textarea
            id="uzenet"
            rows={5}
            value={form.uzenet}
            onChange={(e) => setForm((f) => ({ ...f, uzenet: e.target.value }))}
            className={cn(
              'w-full bg-background border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:ring-1 focus:ring-primary transition resize-none',
              errors.uzenet ? 'border-destructive' : 'border-input'
            )}
            placeholder="Írja meg üzenetét..."
            aria-describedby={errors.uzenet ? 'uzenet-err' : undefined}
          />
          {errors.uzenet && (
            <p id="uzenet-err" className="mt-1.5 text-xs text-destructive">
              {errors.uzenet}
            </p>
          )}
        </div>

        {/* Checkbox */}
        <div>
          <label className="flex gap-3 items-start cursor-pointer">
            <div className="relative mt-0.5 shrink-0">
              <input
                type="checkbox"
                className="sr-only"
                checked={form.beleegyek}
                onChange={(e) => setForm((f) => ({ ...f, beleegyek: e.target.checked }))}
                aria-describedby={errors.beleegyek ? 'beleegyek-err' : undefined}
              />
              <div
                className={cn(
                  'w-4 h-4 rounded border flex items-center justify-center transition',
                  form.beleegyek
                    ? 'bg-primary border-primary'
                    : errors.beleegyek
                      ? 'border-destructive bg-background'
                      : 'border-input bg-background'
                )}
              >
                {form.beleegyek && (
                  <svg
                    width="9"
                    height="7"
                    viewBox="0 0 9 7"
                    fill="none"
                    aria-hidden="true"
                    className="text-primary-foreground"
                  >
                    <path
                      d="M1 3.5L3.5 6L8 1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-xs text-muted-foreground leading-relaxed">
              Elolvastam és elfogadom az{' '}
              <Link
                href="/adatvedelmi-iranyelvek"
                className="text-foreground underline underline-offset-2 hover:text-gold transition-colors"
                target="_blank"
                rel="noopener"
              >
                adatvédelmi irányelveket
              </Link>
              , és hozzájárulok személyes adataim kezeléséhez.
            </span>
          </label>
          {errors.beleegyek && (
            <p id="beleegyek-err" className="mt-1.5 text-xs text-destructive pl-7">
              {errors.beleegyek}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground text-sm font-medium py-3.5 rounded hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {loading ? 'Küldés...' : 'Üzenet elküldése'}
        </button>
      </form>

      {/* SUCCESS POPUP */}
      {sent && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Sikeres küldés"
          className="absolute inset-0 bg-background/95 backdrop-blur-sm flex items-center justify-center rounded-lg z-10"
        >
          <div className="text-center px-8 py-10 max-w-xs">
            <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center mx-auto mb-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="text-gold"
              >
                <path
                  d="M4 10L8 14L16 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-3">
              Üzenete megérkezett
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Köszönjük megkeresését. Hamarosan válaszolunk az{' '}
              <span className="text-foreground font-medium">info@hungarybowling.com</span>{' '}
              e-mail-fiókból.
            </p>
            <button
              onClick={() => setSent(false)}
              className="text-xs font-medium text-foreground border border-border px-6 py-2.5 rounded hover:bg-surface transition-colors"
            >
              Bezárás
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
