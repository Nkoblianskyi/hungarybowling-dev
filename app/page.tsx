import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-end pb-16 lg:pb-24 overflow-hidden">
        <Image
          src="/images/hero-bowling.jpg"
          alt="Bowling pálya Magyarországon"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/15 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-3xl">
            <p className="section-label mb-5" style={{ color: 'oklch(0.63 0.11 72)' }}>
              Magyarország &bull; Bowlingkultúra
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6">
              A bowling
              <br />
              <em className="not-italic" style={{ color: 'oklch(0.88 0.06 80)' }}>
                művészete
              </em>
              <br />
              Magyarországon
            </h1>
            <p className="text-white/65 text-lg leading-relaxed max-w-xl mb-10">
              Fedezze fel a bowling gazdag történetét, technikáját és kultúráját hazánkban.
              Kezdőknek és haladóknak egyaránt.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/tortenet"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary text-sm font-medium px-7 py-3.5 rounded transition-opacity hover:opacity-90"
              >
                Fedezze fel <ArrowRight size={15} />
              </Link>
              <Link
                href="/rolunk"
                className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium px-7 py-3.5 rounded transition-colors hover:bg-white/10"
              >
                Kapcsolat
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-10 lg:right-12 z-10 opacity-30">
          <div className="w-px h-14 bg-white" />
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <p className="section-label mb-4">A sportról</p>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-6">
                Bowling Magyarországon
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A bowling Magyarországon az egyik legnépszerűbb szabadidős és versenysport,
                  amely az elmúlt évtizedekben hatalmas fejlődésen ment keresztül. Az ország
                  számos pályával rendelkezik, ahol amatőrök és profi sportolók egyaránt
                  megmérethetik magukat.
                </p>
                <p>
                  A sport nemcsak szórakozást, hanem közösséget, versenyszellemet és fizikai
                  aktivitást nyújt minden korosztály számára. A pontosság, a koncentráció és a
                  technika tökéletes egysége teszi a bowlingot különlegessé.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { szam: '40+', felirat: 'Éve jelen van hazánkban' },
                { szam: '10 000+', felirat: 'Aktív játékos az országban' },
                { szam: '10', felirat: 'Pins egyszerre a pályán' },
                { szam: '300', felirat: 'A tökéletes játék pontszáma' },
              ].map((item) => (
                <div
                  key={item.szam}
                  className="bg-surface rounded-lg p-6 flex flex-col gap-1"
                >
                  <span className="font-serif text-3xl font-bold text-foreground">
                    {item.szam}
                  </span>
                  <span className="text-xs text-muted-foreground leading-snug">
                    {item.felirat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY PREVIEW */}
      <section className="py-16 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <p className="section-label mb-4">Múlt &bull; Jelen</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-5">
                A bowling történelme Magyarországon
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A bowling hazánkban több évtizedes múltra tekint vissza. A sport az 1980-as
                évektől kezdett elterjedni, és mára a szervezett versenyek és a rekreációs
                játék egyaránt mélyen beágyazódott a magyar sportéletbe.
              </p>
              <Link
                href="/tortenet"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/25 pb-0.5 hover:border-gold hover:text-gold transition-colors"
              >
                Teljes történet <ArrowRight size={14} />
              </Link>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2 relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/images/history-bowling.jpg"
                  alt="A bowling történelme"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-5 py-3 rounded">
                <span className="font-serif text-2xl font-bold block">1980</span>
                <span className="text-xs text-primary-foreground/60 block">Kezdetek Magyarországon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPMENT PREVIEW */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-3">Felszerelés</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Eszközök és felszereléslista
              </h2>
            </div>
            <Link
              href="/felszereles"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              Összes felszerelés <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                title: 'Bowlinglabda',
                desc: 'A megfelelő súly és anyag kiválasztása kulcsfontosságú a pontosság és a pályán lévő viselkedés szempontjából.',
                num: '01',
              },
              {
                title: 'Bowling cipő',
                desc: 'Speciálisan tervezett talpú lábbelik, amelyek lehetővé teszik a sima csúszást a dobbantásnál.',
                num: '02',
              },
              {
                title: 'Egyéb kellékek',
                desc: 'Csuklóvédők, ujjhüvelyek, tisztítószerek és tárolóeszközök a labda optimális karbantartásához.',
                num: '03',
              },
            ].map((item) => (
              <div key={item.num} className="bg-background p-8 lg:p-10 flex flex-col gap-4">
                <span className="font-serif text-4xl font-bold text-border">{item.num}</span>
                <h3 className="font-serif text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 relative rounded-lg overflow-hidden">
            <div className="aspect-[21/7] relative">
              <Image
                src="/images/equipment-bowling.jpg"
                alt="Bowling felszerelések"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-primary/50 flex items-center justify-center">
                <Link
                  href="/felszereles"
                  className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-medium px-8 py-4 rounded text-sm hover:opacity-90 transition-opacity"
                >
                  Teljes felszerelés-útmutató <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RULES PREVIEW */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="aspect-square max-w-sm relative rounded-lg overflow-hidden">
                <Image
                  src="/images/rules-bowling.jpg"
                  alt="Bowling bábuk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <p className="section-label mb-4">Szabályok</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-5">
                Szabályok és versenyformátumok
              </h2>
              <div className="space-y-4 mb-8">
                {[
                  { cim: 'Alapvetések', leiras: '10 frame, 2 dobás keretenkéntion strike esetén a pontszám módosul.' },
                  { cim: 'Pontozás', leiras: 'A strike és spare pontszámításának logikája befolyásolja a végeredményt.' },
                  { cim: 'Versenyformátumok', leiras: 'Egyszeres, páros és csapatversenyek különböző szabályrendszerrel.' },
                ].map((item) => (
                  <div key={item.cim} className="flex gap-4 py-4 border-b border-border last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground block mb-1">{item.cim}</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{item.leiras}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/szabalyok"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/25 pb-0.5 hover:border-gold hover:text-gold transition-colors"
              >
                Teljes szabályzat <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNIQUE PREVIEW */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4">Technika</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground leading-tight text-balance mb-5">
                Technika és hasznos tanácsok
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                A helyes állástól a célzáson át a labda elengedéséig minden mozdulatnak
                szerepe van. Tudja meg, hogyan fejlesztheti a játékát lépésről lépésre.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {['Állás', 'Lendület', 'Dobás', 'Célzás'].map((tema) => (
                  <div
                    key={tema}
                    className="bg-surface px-4 py-3 rounded text-sm font-medium text-foreground/70 text-center"
                  >
                    {tema}
                  </div>
                ))}
              </div>
              <Link
                href="/technika"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-7 py-3.5 rounded transition-opacity hover:opacity-90"
              >
                Részletes technika-útmutató <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
                <Image
                  src="/images/technique-bowling.jpg"
                  alt="Bowling technika"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <p className="section-label mb-3">Aktualitások</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
                Blog és cikkek
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors shrink-0"
            >
              Összes cikk <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hogyan válasszunk megfelelő bowlinglabdát?',
                excerpt: 'A labda súlya, anyaga és lyukainak elhelyezése mind befolyásolja a teljesítményt. Összefoglalónkban elmagyarázzuk a legfontosabb szempontokat.',
                tag: 'Felszerelés',
              },
              {
                title: 'A spare dobás titkai',
                excerpt: 'Sok játékos könnyen megszerzi az első strike-ot, de a spare konzisztens teljesítése teszi igazán jóvá a pontszámot.',
                tag: 'Technika',
              },
              {
                title: 'Miért népszerű a bowling minden korosztályban?',
                excerpt: 'A bowling egyike azon sportoknak, amelyek gyermektől idősig mindenkinek örömet és kihívást nyújtanak.',
                tag: 'Kultúra',
              },
            ].map((cikk) => (
              <article key={cikk.title} className="group">
                <div className="border-t-2 border-border group-hover:border-gold transition-colors pt-5">
                  <span className="section-label mb-3 block">{cikk.tag}</span>
                  <h3 className="font-serif text-lg font-semibold text-foreground leading-snug mb-3 text-balance">
                    {cikk.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {cikk.excerpt}
                  </p>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-gold hover:gap-2.5 transition-all"
                  >
                    Olvasson tovább <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-5" style={{ color: 'oklch(0.63 0.11 72 / 0.7)' }}>
            Lépjen kapcsolatba velünk
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold leading-tight text-balance mb-6">
            Kérdése van a bowlingról?
          </h2>
          <p className="text-primary-foreground/60 leading-relaxed mb-10">
            Írjon nekünk, és csapatunk segít Önnek minden kérdésben,
            legyen szó technikáról, felszerelésről vagy versenyekről.
          </p>
          <Link
            href="/rolunk"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary text-sm font-medium px-8 py-4 rounded transition-opacity hover:opacity-90"
          >
            Kapcsolatfelvétel <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
