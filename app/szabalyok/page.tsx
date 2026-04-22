import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Szabályok és versenyformátumok',
  description:
    'A bowling játékszabályok részletes leírása: pontozás, frame-ek, strike, spare és versenyformátumok. Értse meg a játék logikáját.',
}

export default function SzabalyokPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="section-label mb-5" style={{ color: 'oklch(0.63 0.11 72)' }}>
            Szabályok
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance max-w-2xl">
            Játékszabályok és versenyformátumok
          </h1>
          <p className="mt-6 text-primary-foreground/60 max-w-xl leading-relaxed text-lg">
            A pontozástól a frame-ekig, a strike-tól a versenyformátumokig.
          </p>
        </div>
      </section>

      {/* HERO IMAGE */}
      <div className="relative h-56 lg:h-80 overflow-hidden">
        <Image
          src="/images/rules-bowling.jpg"
          alt="Bowling bábuk a pályán"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/15" />
      </div>

      {/* ALAPOK */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            <div>
              <p className="section-label mb-4">Alapok</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                A játék alapstruktúrája
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A bowlingban minden játékos 10 frame-et játszik. Minden frame-ben legfeljebb
                  két dobási kísérlet áll rendelkezésre arra, hogy a 10 bábut ledöntsék.
                </p>
                <p>
                  Ha az első dobással minden bábu ledől (strike), a frame véget ér, és nem kell
                  a másodikat dobni. Ha két dobással minden bábu ledől (spare), az is különleges
                  pontszámítást von maga után.
                </p>
                <p>
                  A 10. (utolsó) frame kivételes eset: ha a játékos strike-ot vagy spare-t dob,
                  pótdobásra jogosult, legfeljebb három dobást tehet összesen.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  cim: 'Strike',
                  jel: 'X',
                  leiras: 'Minden bábu ledől az első dobásra. A frame pontszáma 10 + a következő két dobás összege.',
                },
                {
                  cim: 'Spare',
                  jel: '/',
                  leiras: 'Minden bábu ledől a második dobásra. A frame pontszáma 10 + a következő dobás értéke.',
                },
                {
                  cim: 'Open frame',
                  jel: '#',
                  leiras: 'Nem sikerült minden bábut ledönteni két dobásban. A pontszám az elütött bábuk száma.',
                },
                {
                  cim: 'Gutter',
                  jel: 'G',
                  leiras: 'A labda az árokba fut. Nulla pont az adott dobásra.',
                },
              ].map((item) => (
                <div
                  key={item.cim}
                  className="flex gap-5 items-start p-5 bg-surface rounded-lg"
                >
                  <div className="w-10 h-10 rounded bg-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-serif font-bold text-sm">
                      {item.jel}
                    </span>
                  </div>
                  <div>
                    <span className="font-semibold text-foreground text-sm block mb-1">
                      {item.cim}
                    </span>
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      {item.leiras}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PONTOZAS */}
      <section className="py-20 lg:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="section-label mb-3">Pontozás</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Hogyan számolódnak a pontok?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                cim: 'Normál frame',
                leiras: 'Az elütött bábuk számát adjuk össze. Maximálisan 9 pont érhető el, ha nincs spare.',
                pelda: 'Pl.: 6 + 3 = 9 pont',
              },
              {
                cim: 'Spare utáni frame',
                leiras: 'A spare után az elütött 10-hez hozzáadjuk a következő dobás értékét.',
                pelda: 'Pl.: 10 + 7 = 17 pont',
              },
              {
                cim: 'Strike utáni frame',
                leiras: 'A strike után az elütött 10-hez a következő két dobás összegét adjuk.',
                pelda: 'Pl.: 10 + 7 + 2 = 19 pont',
              },
            ].map((item) => (
              <div key={item.cim} className="bg-background p-8 flex flex-col gap-3">
                <h3 className="font-serif text-xl font-semibold text-foreground">{item.cim}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.leiras}
                </p>
                <div className="pt-3 border-t border-border">
                  <span className="text-xs text-gold font-medium">{item.pelda}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 bg-primary rounded-lg text-primary-foreground">
            <h3 className="font-serif text-xl font-bold mb-3">A tökéletes játék</h3>
            <p className="text-primary-foreground/70 leading-relaxed text-sm">
              A maximálisan elérhető pontszám 300, amelyet akkor kapunk, ha minden frame-ben
              (beleértve a pótdobásokat is) strike-ot dobunk. Ez 12 egymás utáni strike-ot
              jelent. A tökéletes játék a bowling csúcsteljesítménye.
            </p>
          </div>
        </div>
      </section>

      {/* VERSENYEK */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="section-label mb-3">Versenyformátumok</p>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Versenyek és játékmódok
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                cim: 'Egyéni verseny',
                leiras:
                  'A leggyakoribb versenyforma. A játékosok egyénileg mérik össze tudásukat. A végeredményt általában több játék átlagpontszáma adja.',
                reszletek: ['Több játék átlaga dönt', 'Közvetlen párosítás lehetséges', 'Ranglistás rendszer alkalmazható'],
              },
              {
                cim: 'Páros verseny',
                leiras:
                  'Két játékos alkotja a csapatot. A páros összesített pontszámát veszik figyelembe, vagy Baker-rendszerben felváltva dobnak.',
                reszletek: ['Baker és összesített változat is létezik', 'Csapatszellem és kommunikáció fontos', 'Rövidebb versenyformátum'],
              },
              {
                cim: 'Csapatverseny',
                leiras:
                  'Általában 3-5 fős csapatok indulnak. A csapattagok felváltva dobhatnak (Baker), vagy mindenki dobja a saját frame-jeit.',
                reszletek: ['3-5 fős csapatok', 'Baker vagy összesített rendszer', 'Taktikai szereposztás lehetséges'],
              },
              {
                cim: 'All-events',
                leiras:
                  'A versenyen belül az összes kategória (egyéni, páros, csapat) összes dobásának összege adja az all-events pontszámot.',
                reszletek: ['Átfogó versenyszám', 'Konzisztencia jutalmazott', 'Teljes koncentrációt igényel'],
              },
              {
                cim: 'Knockout / Bracket',
                leiras:
                  'Kieséses rendszerű versenyforma, ahol két játékos egymás ellen játszik, és a vesztes kiesik. Gyors és látványos formátum.',
                reszletek: ['Kieséses rendszer', 'Direkt párosítás', 'Izgalmas és látványos'],
              },
              {
                cim: 'Egyéni teljesítménycél',
                leiras:
                  'Nem hagyományos versenyforma: a cél a legjobb egyéni teljesítmény elérése. Személyes fejlődés mérésére kiválóan alkalmas.',
                reszletek: ['Egyéni teljesítménycél', 'Nem párosítás alapján', 'Személyes fejlődés mérésére'],
              },
            ].map((item) => (
              <div
                key={item.cim}
                className="border border-border rounded-lg p-7 flex flex-col gap-4"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground">{item.cim}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.leiras}</p>
                <ul className="flex flex-col gap-1.5 mt-auto pt-4 border-t border-border">
                  {item.reszletek.map((r) => (
                    <li key={r} className="flex gap-2.5 items-center text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-gold shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ETIKETTE */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="mb-12">
            <p className="section-label mb-3">Etikett</p>
            <h2 className="font-serif text-3xl font-bold text-foreground text-balance">
              Bowlingetikett és viselkedési normák
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'A pályán szomszédos játékos elsőbbsége: ha a szomszéd dobáshoz áll, várakozzunk.',
              'A dobbantáson kívül ne lépjünk a pályára, a fa felületek karbantartása mindannyiunk érdeke.',
              'Saját labdánkat és eszközeinket tartsuk rendben és másoktól elkülönítve.',
              'A pontozót őszintén és pontosan vezessük; szabályellenes dobások esetén jelezzük.',
              'Kerüljük a hangos, zavaró viselkedést mások dobása alatt.',
              'A nyertes és vesztes egyaránt fogadja sportszerűen az eredményt.',
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span className="font-serif text-2xl font-bold text-border shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
