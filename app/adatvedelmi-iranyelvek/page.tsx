import type { Metadata } from 'next'
import AutoDate from '@/components/auto-date'

export const metadata: Metadata = {
  title: 'Adatvédelmi irányelvek',
  description:
    'A hungarybowling.com adatvédelmi irányelvei: hogyan gyűjtjük, kezeljük és védjük személyes adatait.',
}

export default function AdatvedelmiIranyelvekPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <p className="section-label mb-4" style={{ color: 'oklch(0.63 0.11 72)' }}>
            Jogi dokumentum
          </p>
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground text-balance">
            Adatvédelmi irányelvek
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
                1. Adatkezelő
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A hungarybowling.com weboldal üzemeltetője felelős a jelen adatvédelmi irányelvekben
                leírt adatkezelési tevékenységekért. Elérhetőségünk:{' '}
                <a
                  href="mailto:info@hungarybowling.com"
                  className="text-foreground underline underline-offset-2 hover:text-gold transition-colors"
                >
                  info@hungarybowling.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                2. Milyen adatokat gyűjtünk?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    cim: 'Kapcsolatfelvétel esetén',
                    szoveg:
                      'Amikor az oldalon lévő kapcsolatfelvételi űrlapot tölti ki, a következő adatokat kérjük: teljes név, e-mail-cím, az üzenet tárgya és szövege. Ezek az adatok kizárólag az Ön megkeresésének megválaszolásához szükségesek.',
                  },
                  {
                    cim: 'Böngészési adatok',
                    szoveg:
                      'A weboldal böngészésekor automatikusan rögzítjük az IP-címet, a böngésző típusát, az operációs rendszert, a felkeresett oldalakat és a látogatás időpontját. Ezeket az adatokat statisztikai célokra és a weboldal biztonságának fenntartására használjuk.',
                  },
                  {
                    cim: 'Sütik',
                    szoveg:
                      'A sütik által gyűjtött adatokról részletesebben olvashat süti-irányelveinkben.',
                  },
                ].map((item) => (
                  <div key={item.cim} className="bg-surface rounded-lg p-6">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {item.cim}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.szoveg}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                3. Az adatkezelés célja és jogalapja
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A személyes adatokat kizárólag az alábbi célokra kezeljük:
              </p>
              <ul className="space-y-2.5">
                {[
                  'Megkeresések megválaszolása és kommunikáció',
                  'A weboldal működésének és biztonságának fenntartása',
                  'Statisztikai elemzések és a weboldal fejlesztése',
                  'Jogi kötelezettségek teljesítése',
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Az adatkezelés jogalapja az érintett hozzájárulása (GDPR 6. cikk (1) bekezdés a) pont),
                jogos érdek (f) pont) és az esetleges jogi kötelezettség teljesítése (c) pont).
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                4. Adatmegőrzés
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A kapcsolatfelvételi adatokat az ügy lezárásától számított legfeljebb 1 évig
                tároljuk, ezt követően töröljük. A statisztikai és naplóadatokat legfeljebb 3 hónapig
                tartjuk meg. A sütiadatok az egyes sütik lejáratáig tárolódnak.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                5. Adattovábbítás harmadik feleknek
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Személyes adatait harmadik fél részére nem adjuk tovább, értékesítjük vagy béreljük,
                kivéve, ha arra jogszabályi kötelezettség áll fenn, vagy ahhoz az érintett kifejezetten
                hozzájárult. A weboldal működéséhez szükséges adatfeldolgozókat (például tárhelyszolgáltató)
                szerződéses kötelezettség terheli az adatok védelmére.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                6. Az érintett jogai
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Az alkalmazandó adatvédelmi jogszabályok alapján Önnek joga van:
              </p>
              <ul className="space-y-2.5">
                {[
                  'Hozzáférni a kezelt személyes adataihoz',
                  'Kérni az adatok helyesbítését',
                  'Kérni az adatok törlését',
                  'Korlátozni az adatkezelést',
                  'Tiltakozni az adatkezelés ellen',
                  'Adathordozhatósághoz való jog',
                  'Panaszt tenni a felügyeleti hatóságnál (NAIH, Magyarország)',
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                7. Adatbiztonság
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Megfelelő technikai és szervezési intézkedéseket teszünk az adatok biztonsága érdekében,
                beleértve a titkosítást, a hozzáférés-korlátozást és a rendszeres biztonsági felülvizsgálatot.
                Bár mindent megteszünk az adatok védelmére, egyetlen internetes átvitel sem garantálható
                teljes biztonsággal.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                8. Gyermekek adatvédelme
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A hungarybowling.com nem gyűjt tudatosan 16 éven aluli személyek adatait. Ha tudomásunkra
                jut, hogy ilyen adat kerülhetett rendszerünkbe, azonnal töröljük.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                9. Az irányelvek módosítása
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fenntartjuk a jogot az adatvédelmi irányelvek módosítására. A módosítások a weboldalon
                való közzétételkor lépnek hatályba. Az utolsó frissítés dátuma mindig az oldal tetején
                található.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
                10. Kapcsolat
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Adatvédelemmel kapcsolatos kérdéseivel és kérelmeivel forduljon hozzánk:{' '}
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
