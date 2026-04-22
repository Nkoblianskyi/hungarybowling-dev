import type { Metadata } from 'next'
import AutoDate from '@/components/auto-date'

export const metadata: Metadata = {
  title: 'Süti-irányelvek',
  description: 'A hungarybowling.com süti-irányelvei: milyen sütiket használunk és miért.',
}

export default function CookieIranyelvekPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="section-label mb-4" style={{ color: 'oklch(0.63 0.11 72)' }}>
            Jogi dokumentum
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
            Süti-irányelvek
          </h1>
          <p className="mt-4 text-sm text-primary-foreground/50">
            Utolsó frissítés: <AutoDate />
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="space-y-10">

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                1. Mi az a süti (cookie)?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A sütik kis szöveges fájlok, amelyeket a weboldalak tárolnak a felhasználó eszközén
                (számítógépen, tableten vagy okostelefonon) a böngészés során. A sütik lehetővé teszik,
                hogy a weboldal emlékezzen bizonyos beállításokra és preferenciákra, javítva ezzel a
                felhasználói élményt.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Milyen sütiket használunk?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    cim: '2.1 Szükséges sütik',
                    szoveg:
                      'Ezek a sütik a weboldal alapvető működéséhez elengedhetetlenek. Nélkülük a weboldal egyes funkciói nem működnének megfelelően. Ezek a sütik nem tárolnak személyazonosításra alkalmas információt, és automatikusan törlődnek a böngészési munkamenet befejezésekor.',
                    pelda: 'Példa: süti-hozzájárulás mentése, munkamenet-azonosítás.',
                  },
                  {
                    cim: '2.2 Analitikai sütik',
                    szoveg:
                      'Ezek a sütik segítenek megérteni, hogyan használják a látogatók a weboldalt. Az összegyűjtött adatok névtelenek, és kizárólag statisztikai célokat szolgálnak, mint például a látogatók számának és viselkedési mintáinak elemzése.',
                    pelda: 'Példa: felkeresett oldalak, böngészési idő, hivatkozó URL.',
                  },
                  {
                    cim: '2.3 Funkcionális sütik',
                    szoveg:
                      'Ezek a sütik lehetővé teszik, hogy a weboldal emlékezzen a felhasználó választásaira és személyre szabottabb élményt nyújtson. Az általuk tárolt adatokat nem adják tovább harmadik félnek.',
                    pelda: 'Példa: nyelvi beállítások, betűméret-preferenciák.',
                  },
                ].map((item) => (
                  <div key={item.cim} className="bg-surface rounded-lg p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {item.cim}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {item.szoveg}
                    </p>
                    <p className="text-xs text-muted-foreground/60 italic">{item.pelda}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. A sütik kezelése és letiltása
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A legtöbb böngésző alapértelmezés szerint elfogadja a sütiket, de beállításain
                keresztül bármikor módosíthatja ezt. A sütik letiltása egyes weboldal-funkciók
                működését hátrányosan befolyásolhatja.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A böngészőbeállítások módosításához tekintse meg böngészője súgóját. A sütik
                kezeléséről részletesebb tájékoztatást talál az Ön által használt böngésző
                dokumentációjában.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Harmadik felek sütijei
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A hungarybowling.com oldalain egyes funkciókat harmadik fél szolgáltatók biztosítanak
                (például webes analitikai eszközök). Ezek a szolgáltatók saját süti-irányelvekkel
                rendelkeznek, amelyekre a hungarybowling.com nem terjed ki. Javasoljuk, hogy ezek
                dokumentumait is olvassa el.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Hozzájárulás visszavonása
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Süti-hozzájárulását bármikor visszavonhatja a böngésző sütijei törlésével vagy a
                böngésző beállításaiban a sütik tiltásával. A visszavonás nem érinti a visszavonást
                megelőző időszak adatkezelésének jogszerűségét.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Kapcsolat
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ha kérdése van a süti-irányelvekkel kapcsolatban, kérjük, vegye fel velünk a
                kapcsolatot:{' '}
                <a
                  href="mailto:info@hungarybowling.com"
                  className="text-foreground underline underline-offset-2 hover:text-gold transition-colors"
                >
                  info@hungarybowling.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
