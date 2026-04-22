import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Felszerelés és eszközök',
  description:
    'Minden, amit a bowling felszerelésről tudni kell: labdák, cipők, kiegészítők és karbantartás. Útmutató kezdőknek és haladóknak.',
}

const kategoriak = [
  {
    cim: 'A bowlinglabda',
    leiras:
      'A bowlinglabda a sport legfontosabb eszköze. Megfelelő kiválasztása meghatározza a játékos teljesítményét és komfortját a pályán.',
    pontok: [
      { kiemel: 'Súly', szoveg: 'A labdák 6-16 font (kb. 2,7-7,3 kg) közötti súlyban kaphatók. Az optimális súly a játékos testi adottságaitól függ.' },
      { kiemel: 'Anyag', szoveg: 'Polyeszter, uretan és reaktív gumi anyagokból készülnek. Minden anyag más pályaviselkedést eredményez.' },
      { kiemel: 'Mag', szoveg: 'A labda belsejébe épített mag formája és elhelyezése befolyásolja a forgási dinamikát és a hook-hatást.' },
      { kiemel: 'Ujjnyílások', szoveg: 'A lyukak mérete és elhelyezése a kézre van szabva. Egyéni fúrás elengedhetetlen a pontos kontrollhoz.' },
    ],
  },
  {
    cim: 'Bowling cipő',
    leiras:
      'A speciálisan tervezett bowling cipő kulcsfontosságú a helyes technikához és a biztonsághoz.',
    pontok: [
      { kiemel: 'Talp', szoveg: 'Különböző talprészek segítik a csúszást és a fékező hatást a dobbantás során, az egyéni technikától függően.' },
      { kiemel: 'Kialakítás', szoveg: 'Az alacsony profil és a stabil oldaltámasz segíti a megfelelő testtartást és egyensúlyt a dobásnál.' },
      { kiemel: 'Anyag', szoveg: 'Légáteresztő, tartós anyagok biztosítják a komfortot hosszabb játék közben is.' },
      { kiemel: 'Méret', szoveg: 'A pontosan illeszkedő cipő elengedhetetlen a kontrollált csúszáshoz és a balesetek elkerüléséhez.' },
    ],
  },
  {
    cim: 'Csuklótámasz és rögzítők',
    leiras:
      'Kiegészítő eszközök, amelyek segítenek a helyes csuklótartás megőrzésében és a labda irányításában.',
    pontok: [
      { kiemel: 'Csuklótámasz', szoveg: 'Rögzíti a csuklót a dobás során, ezáltal következetesebb forgást és pontosabb irányt biztosít.' },
      { kiemel: 'Ujjhüvelyek', szoveg: 'Csökkentik az ujjak kopását és javítják a labda kiengedésekor érzett grippet.' },
      { kiemel: 'Kesztyű', szoveg: 'Védelmet nyújt a tenyérnek intenzív edzések vagy versenyek során.' },
    ],
  },
  {
    cim: 'Karbantartás és tárolás',
    leiras:
      'A felszerelés megfelelő karbantartása meghosszabbítja élettartamát és megőrzi a labda teljesítményét.',
    pontok: [
      { kiemel: 'Tisztítás', szoveg: 'Minden játék után töröljük le a labdát, hogy eltávolítsuk az olajat és a szennyeződést, amelyek befolyásolják a gördülést.' },
      { kiemel: 'Polírozás', szoveg: 'A rendszeres polírozás fenntartja a felület megfelelő érdességét és az egyenletes pályaviselkedést.' },
      { kiemel: 'Tárolás', szoveg: 'A labdát szobahőmérsékleten, közvetlen napfénytől és szélsőséges hőmérséklettől védetten tároljuk.' },
      { kiemel: 'Cipő karbantartás', szoveg: 'A csúszófelületet rendszeresen ellenőrizzük, és tisztán tartjuk a homokot és egyéb törmeléket.' },
    ],
  },
]

const kezdoknek = [
  {
    cim: 'Cipő mindig szükséges',
    szoveg: 'Bowling cipő nélkül nem ajánlott játszani. Létesítmények kölcsönzési lehetőséget kínálnak.',
  },
  {
    cim: 'Labda súlyának meghatározása',
    szoveg: 'Általános irányelv: a labda súlya ne haladja meg a testtömeg 10%-át, de az egyéni érzet is fontos.',
  },
  {
    cim: 'Ne vásároljon rögtön',
    szoveg: 'Kezdőként érdemes először kölcsönlabdával ismerkedni a sporttal, mielőtt saját eszközt vesz.',
  },
  {
    cim: 'Ujjnyílások igazítása',
    szoveg: 'Ha saját labdát vesz, professzionális fúrást kérjen, mivel az illeszkedés elengedhetetlen a helyes technikához.',
  },
]

export default function FelszerelesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <p className="section-label mb-5" style={{ color: 'oklch(0.63 0.11 72)' }}>
            Eszközök és felszerelés
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance max-w-2xl">
            Bowling felszerelések átfogó útmutatója
          </h1>
          <p className="mt-6 text-primary-foreground/60 max-w-xl leading-relaxed text-lg">
            Mindent megtud a labdáktól a cipőkig, a kiegészítőktől a karbantartásig.
          </p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="relative h-56 lg:h-80 overflow-hidden">
        <Image
          src="/images/equipment-bowling.jpg"
          alt="Bowling felszerelések"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* CATEGORIES */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-24">
            {kategoriak.map((kat, i) => (
              <div key={kat.cim} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                  <span className="font-serif text-7xl font-bold text-border/40 block mb-4 leading-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4 text-balance">
                    {kat.cim}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{kat.leiras}</p>

                  <div className="space-y-5">
                    {kat.pontok.map((pont) => (
                      <div
                        key={pont.kiemel}
                        className="flex gap-4 pb-5 border-b border-border last:border-0"
                      >
                        <div className="w-px bg-gold shrink-0 mt-1" style={{ minHeight: '1.5rem' }} />
                        <div>
                          <span className="text-sm font-semibold text-foreground block mb-1">
                            {pont.kiemel}
                          </span>
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {pont.szoveg}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`bg-surface rounded-lg p-8 lg:p-12 h-full flex flex-col justify-center ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <p className="font-serif text-2xl font-semibold text-foreground/60 italic leading-relaxed">
                    {kat.leiras}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEZDOKNEK */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="section-label mb-3">Tippek</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Tanácsok kezdőknek
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kezdoknek.map((item, i) => (
              <div key={item.cim} className="flex flex-col gap-3">
                <span className="font-serif text-5xl font-bold text-border">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-lg font-semibold text-foreground">{item.cim}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.szoveg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-balance mb-5">
            Kérdése van a felszerelésről?
          </h2>
          <p className="text-primary-foreground/60 mb-8 leading-relaxed">
            Ha nem biztos abban, melyik felszerelés illik önhöz, forduljon hozzánk bizalommal.
          </p>
          <Link
            href="/rolunk"
            className="inline-flex items-center gap-2 bg-primary-foreground text-primary text-sm font-medium px-7 py-3.5 rounded hover:opacity-90 transition-opacity"
          >
            Kapcsolatfelvétel
          </Link>
        </div>
      </section>
    </>
  )
}
