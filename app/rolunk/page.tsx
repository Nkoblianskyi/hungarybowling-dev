import type { Metadata } from 'next'
import ContactForm from './contact-form'

export const metadata: Metadata = {
  title: 'Rólunk és kapcsolat',
  description:
    'Tudjon meg többet a hungarybowling.com csapatáról és lépjen kapcsolatba velünk. Örömmel válaszolunk bowlinggal kapcsolatos kérdéseire.',
}

export default function RolunkPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="section-label mb-5" style={{ color: 'oklch(0.63 0.11 72)' }}>
            Rólunk
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance max-w-2xl">
            Kik vagyunk és mit csinálunk?
          </h1>
          <p className="mt-6 text-primary-foreground/60 max-w-xl leading-relaxed text-lg">
            A bowling iránti szenvedély hajtja azt a csapatot, amely létrehozta ezt az oldalt.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            <div>
              <p className="section-label mb-4">Küldetésünk</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance mb-6">
                A bowlingkultúra terjesztéséért
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A hungarybowling.com célja, hogy megbízható, átfogó és könnyen érthető
                  információt nyújtson a bowling sportról Magyarországon. Legyen szó
                  történelemről, technikáról, szabályokról vagy felszerelésről, megtalálja
                  nálunk, amit keres.
                </p>
                <p>
                  Elkötelezettjei vagyunk a pontos és naprakész tartalmak iránt. Cikkeink
                  szakmai alapossággal készülnek, hogy mind a kezdők, mind a tapasztalt
                  játékosok hasznát vehessék.
                </p>
                <p>
                  Hiszünk abban, hogy a bowlingkultúra fejlesztéséhez hozzájárul az, ha
                  minél több ember számára elérhetővé tesszük a sport ismereteit.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  cim: 'Megbízható tartalom',
                  szoveg:
                    'Minden cikket és útmutatót gondosan ellenőrzünk, hogy naprakész és pontos információt nyújtsunk.',
                },
                {
                  cim: 'Minden szintnek',
                  szoveg:
                    'Kezdőktől a versenyző szintű játékosokig igyekszünk mindenki számára releváns tartalmat biztosítani.',
                },
                {
                  cim: 'Magyar nyelven',
                  szoveg:
                    'Magyarországon a bowlingról szóló magyar nyelvű tartalom szűkös. Célunk ezt az űrt betölteni.',
                },
              ].map((item) => (
                <div key={item.cim} className="flex gap-5 p-6 bg-surface rounded-lg">
                  <div className="w-1 bg-gold rounded-full shrink-0" />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {item.cim}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.szoveg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="kapcsolat" className="py-20 lg:py-28 bg-surface scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            <div>
              <p className="section-label mb-4">Kapcsolat</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance mb-6">
                Írjon nekünk
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                <p>
                  Ha kérdése van a bowlinggal kapcsolatban, visszajelzést szeretne adni,
                  vagy együttműködési lehetőséget lát, szívesen fogadjuk üzenetét.
                </p>
                <p>
                  Igyekszünk minden megkeresésre mielőbb válaszolni. Üzenetét az alábbi
                  űrlapon keresztül küldheti el, vagy írjon közvetlenül e-mailben.
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground">
                <div className="w-px h-5 bg-gold" />
                <a
                  href="mailto:info@hungarybowling.com"
                  className="hover:text-gold transition-colors"
                >
                  info@hungarybowling.com
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
