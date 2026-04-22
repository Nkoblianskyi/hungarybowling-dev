import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technika és hasznos tanácsok',
  description:
    'Részletes bowling technika útmutató: helyes testtartás, lendület, dobásmechanika, célzás és haladó tippek minden szinten.',
}

const fazisok = [
  {
    szam: '01',
    cim: 'Kiindulóállás és fogás',
    szoveg:
      'A helyes kiindulóállás az egész dobásmechanika alapja. A labdát a test előtt, a mellkas magasságában tartjuk. A fogás lazán, de kontrolláltan biztosítja a labda megfelelő tartását anélkül, hogy az ujjak megfeszülnének.',
    pontok: [
      'Váll szélességű terpeszállás',
      'Testsúly egyenletesen elosztva',
      'Labda a domináns oldal mellkas magasságában',
      'Laza, természetes csuklótartás',
    ],
  },
  {
    szam: '02',
    cim: 'Megközelítés (approach)',
    szoveg:
      'A megközelítés az a mozgássorozat, amellyel a dobó vonal felé haladunk. Leggyakrabban 4 vagy 5 lépéses megközelítést alkalmaznak, ahol minden lépés szinkronban van a labda mozgásával.',
    pontok: [
      '4 vagy 5 lépéses megközelítés',
      'Az első lépésnél a labda előre indul',
      'A lendítési mozgás a hátsó lábbal szinkronizált',
      'Az utolsó lépés csúszva, stabilan ér véget',
    ],
  },
  {
    szam: '03',
    cim: 'Lendítés és hintamozgás',
    szoveg:
      'A labda hintamozgása fizikai egyensúlyon alapul. A gravitáció segíti a lendítést, így nem szükséges erőteljes izommunka. A könyök a test mellett marad, a kar szabadon lendül.',
    pontok: [
      'Gördülékeny, gravitáció vezérelte mozgás',
      'Könyök végig a test mellett',
      'Nincs erőteljes izommunka a lendítésben',
      'A hátralendítés ne vigye túl a vállmagasságon',
    ],
  },
  {
    szam: '04',
    cim: 'Az elengedés',
    szoveg:
      'A labda elengedése a legkritikusabb pillanat. A labdát az ujjak hüvelyk alól kigördítik, nem dobják. A csukló és az ujjak pozíciója meghatározza a labda forgásának irányát és sebességét.',
    pontok: [
      'Az ujjak alulról gördítik ki a labdát',
      'A hüvelykujj elsőként hagyja el a labdát',
      'A csukló pozíciója forgásirányt határoz meg',
      'Ne dobjuk, gördítsük a labdát',
    ],
  },
  {
    szam: '05',
    cim: 'Utókép (follow-through)',
    szoveg:
      'A dobás befejezése ugyanolyan fontos, mint maga az elengedés. A kar a cél irányába folytatja mozgását az elengedés után, ami segíti a következetes iránytartást.',
    pontok: [
      'A kar a cél felé emelkedik az elengedés után',
      'A test egyensúlyban marad',
      'A szem a nyílon vagy a célon marad',
      'Természetes befejező testtartás',
    ],
  },
  {
    szam: '06',
    cim: 'Célzás',
    szoveg:
      'A profi és haladó játékosok nem a bábukra, hanem a pályán lévő nyilakra céloznak (7 nyíl és 5 pont jelöli a pályát). A közelebb lévő célpont pontosabb irányzékot biztosít.',
    pontok: [
      'Célozzon a nyilakra, ne a bábukra',
      'A nyilak kb. 4,5 méterre találhatók a dobbantótól',
      'Minden pályán 7 nyíl és 5 pont van',
      'Hozzon létre állandó célzási pontot',
    ],
  },
]

const hibak = [
  {
    hiba: 'Túl erős fogás',
    megoldas: 'Lazítson a kézfején. A labdának lazán, de biztosan kell a kezében feküdnie.',
  },
  {
    hiba: 'Erőltetett dobás',
    megoldas: 'Hagyja a gravitációt dolgozni. A labda saját súlya elégséges a lendülethez.',
  },
  {
    hiba: 'Rossz lábmunka',
    megoldas: 'Lassítsa le a megközelítést. Gyakorolja a lépéseket labda nélkül.',
  },
  {
    hiba: 'A szem a bábukra szegezve',
    megoldas: 'Fókuszáljon a nyilakra. Ez közelebb van, így pontosabb célzást tesz lehetővé.',
  },
  {
    hiba: 'Feszült váll',
    megoldas: 'Vállait engedje lazán le. A feszültség megzavarja a természetes lendítő mozgást.',
  },
  {
    hiba: 'Következetlen megközelítés',
    megoldas: 'Jelöljön ki fix startpontot, és minden dobásnál ugyanarról a helyről induljon.',
  },
]

const szintek = [
  {
    szint: 'Kezdő',
    cim: 'Alapok elsajátítása',
    pontok: [
      'Tanuljon meg egyenesen görgetni',
      'Ismerkedjen az alapfogással',
      'Gyakorolja a 4-lépéses megközelítést',
      'Célozzon a középső nyílra',
    ],
  },
  {
    szint: 'Haladó',
    cim: 'Technika fejlesztése',
    pontok: [
      'Fejlesszen forgást az elengedésnél',
      'Tanulja meg a spare konvertálást',
      'Kísérletezzen különböző célzási vonalakkal',
      'Konzisztens pontszámok elérése a cél',
    ],
  },
  {
    szint: 'Versenyző',
    cim: 'Magasfokú pontosság',
    pontok: [
      'Olajmintázat-olvasás és alkalmazkodás',
      'Labdacsere stratégia kidolgozása',
      'Mentális játék és koncentráció fejlesztése',
      'Videóelemzés saját technikáról',
    ],
  },
]

export default function TechnikaPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="section-label mb-5" style={{ color: 'oklch(0.63 0.11 72)' }}>
            Technika
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance max-w-2xl">
            Technika és hasznos tanácsok
          </h1>
          <p className="mt-6 text-primary-foreground/60 max-w-xl leading-relaxed text-lg">
            A helyes állástól a célzásig, az elengedéstől az utóképig minden mozdulatnak
            jelentősége van.
          </p>
        </div>
      </section>

      {/* IMAGE */}
      <div className="relative h-56 lg:h-80 overflow-hidden">
        <Image
          src="/images/technique-bowling.jpg"
          alt="Bowling labda dobás közben"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* FAZISOK */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="section-label mb-3">A dobás lépései</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              A tökéletes dobás hat fázisa
            </h2>
          </div>

          <div className="space-y-16">
            {fazisok.map((fazis, i) => (
              <div
                key={fazis.szam}
                className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start pb-16 border-b border-border last:border-0 last:pb-0"
              >
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <span className="font-serif text-7xl font-bold text-border/50 block mb-4 leading-none">
                    {fazis.szam}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                    {fazis.cim}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{fazis.szoveg}</p>
                </div>
                <div className={`bg-surface rounded-lg p-7 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="text-xs font-semibold text-foreground/50 uppercase tracking-widest mb-4">
                    Fő szempontok
                  </p>
                  <ul className="flex flex-col gap-3">
                    {fazis.pontok.map((pont) => (
                      <li key={pont} className="flex gap-3 items-start text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                        {pont}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIBAK */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="section-label mb-3">Diagnosztika</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Leggyakoribb hibák és megoldásaik
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hibak.map((item) => (
              <div key={item.hiba} className="bg-background rounded-lg p-6">
                <div className="mb-4">
                  <span className="section-label">Hiba</span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mt-1">
                    {item.hiba}
                  </h3>
                </div>
                <div className="pt-4 border-t border-border">
                  <span className="text-[0.7rem] font-semibold tracking-[0.18em] uppercase" style={{ color: 'oklch(0.45 0.12 145)' }}>
                    Megoldás
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                    {item.megoldas}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SZINTEK */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="section-label mb-3">Fejlődési szintek</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Mit fejlesszen az adott szinten?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {szintek.map((szint, i) => (
              <div
                key={szint.szint}
                className={`p-8 rounded-lg ${
                  i === 1 ? 'bg-primary text-primary-foreground' : 'bg-surface'
                }`}
              >
                <span
                  className="section-label mb-3 block"
                  style={i === 1 ? { color: 'oklch(0.63 0.11 72 / 0.7)' } : undefined}
                >
                  {szint.szint}
                </span>
                <h3
                  className={`font-serif text-xl font-semibold mb-5 ${
                    i === 1 ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  {szint.cim}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {szint.pontok.map((pont) => (
                    <li
                      key={pont}
                      className={`flex gap-2.5 items-start text-sm ${
                        i === 1 ? 'text-primary-foreground/70' : 'text-muted-foreground'
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          i === 1 ? 'bg-primary-foreground/40' : 'bg-gold'
                        }`}
                      />
                      {pont}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance mb-5">
            Kérdése van a technikáról?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Ha egyéni kérdése van a technikával kapcsolatban, örömmel segítünk.
          </p>
          <Link
            href="/rolunk"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-7 py-3.5 rounded hover:opacity-90 transition-opacity"
          >
            Írjon nekünk
          </Link>
        </div>
      </section>
    </>
  )
}
