import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'A bowling története Magyarországon',
  description:
    'Fedezze fel a bowling sport hazai történetét az első pályáktól napjainkig. Hogyan vált a bowling Magyarország egyik kedvelt sportjává?',
}

const idovonal = [
  {
    ev: '1960-as évek',
    cim: 'Az első lépések',
    szoveg:
      'A bowling sport az 1960-as évek végén jelent meg hazánkban. Az első pályák főként szórakozóhelyek részeként működtek, elsősorban a nagyobb városokban. A sport akkor még szűk körben volt ismert, főként az idegenforgalom révén érkező hatásoknak köszönhetően terjedt.',
  },
  {
    ev: '1970-es évek',
    cim: 'Az első szervezett közösségek',
    szoveg:
      'Az évtized folyamán kis bowlingkörök és amatőr csapatok kezdtek szerveződni. A lelkes sportolók rendszeres összeméréseinek köszönhetően az első versenyek is napvilágot láttak. Az érdeklődés folyamatosan növekedett, és egyre többen ismerkedtek meg a sport alapjaival.',
  },
  {
    ev: '1980-as évek',
    cim: 'A sport elterjedése',
    szoveg:
      'A nyolcvanas években a bowling ugrásszerű fejlődésen ment keresztül. Egyre több létesítmény nyitotta meg kapuit, és a szervezett versenyek rendszeressé váltak. Ebben az időszakban alapozódott meg a hazai versenyélet struktúrája, és megjelent az igény a szabályok egységesítésére.',
  },
  {
    ev: '1990-es évek',
    cim: 'Intézményesülés és nemzetközi kapcsolatok',
    szoveg:
      'A rendszerváltás után a bowling szervezeti keretei megszilárdultak. A hazai sportolók kapcsolatba kerültek a nemzetközi bowlingvilággal, és megkezdődtek a külföldi versenyeken való részvételek. A pályák száma és felszereltsége is jelentősen javult.',
  },
  {
    ev: '2000-es évek',
    cim: 'Modernizáció és technológia',
    szoveg:
      'Az ezredforduló után a digitális pontozórendszerek és a modern pályatechnológia elterjedése gyökeresen megváltoztatta a bowlinget. A sporttevékenység egyre professzionálisabbá vált, miközben a szabadidős célú játék is megőrizte népszerűségét.',
  },
  {
    ev: 'Napjaink',
    cim: 'A bowling ma',
    szoveg:
      'Jelenleg a bowling Magyarországon élő sport, amelynek kiterjedt versenyszintű és rekreációs vetülete egyaránt van. A fiatal generációk körében is egyre nő az érdeklődés, és a sport folyamatosan megújul mind felszerelés, mind versenyforma tekintetében.',
  },
]

export default function TortenetPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <p className="section-label mb-5" style={{ color: 'oklch(0.63 0.11 72)' }}>
            Történelem
          </p>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance max-w-2xl">
            A bowling história Magyarországon
          </h1>
          <p className="mt-6 text-primary-foreground/60 max-w-xl leading-relaxed text-lg">
            Közel hat évtized alatt a sport szórakozástól versenyportig fejlődött hazánkban.
          </p>
        </div>
      </section>

      {/* IMAGE BAND */}
      <div className="relative h-64 lg:h-96 overflow-hidden">
        <Image
          src="/images/history-bowling.jpg"
          alt="A bowling sport korai évei"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-primary/30" />
      </div>

      {/* INTRO */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
              Egy sport útja a hobbytól a versenyporondokig
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                A bowling Magyarországon az elmúlt évtizedekben megtett útja rendkívüli fejlődést
                mutat. Ami szórakozási lehetőségként indult, mára szervezett, versenyszerű sporttá
                vált, saját infrastruktúrával, képzési rendszerrel és lelkes sportolói közösséggel.
              </p>
              <p>
                A sport sikerét annak köszönheti, hogy egyaránt vonzó a kezdők és a tapasztalt
                játékosok számára. Nem igényel különleges fizikai adottságokat, ugyanakkor mély
                technikai tudást és mentális koncentrációt kíván a magas szintű teljesítményhez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="mb-14">
            <p className="section-label mb-3">Kronológia</p>
            <h2 className="font-serif text-3xl font-bold text-foreground">Mérföldkövek</h2>
          </div>

          <div className="flex flex-col gap-0">
            {idovonal.map((item, i) => (
              <div
                key={item.ev}
                className="grid lg:grid-cols-[1fr_auto_1fr] gap-0 items-start"
              >
                {/* Left content (even rows) */}
                <div className={`py-8 lg:pr-14 ${i % 2 === 0 ? 'block' : 'hidden lg:block'}`}>
                  {i % 2 === 0 && (
                    <div className="lg:text-right">
                      <span className="section-label mb-2 block">{item.ev}</span>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                        {item.cim}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.szoveg}</p>
                    </div>
                  )}
                </div>

                {/* Center spine */}
                <div className="hidden lg:flex flex-col items-center">
                  <div className="w-px bg-border flex-1 min-h-0" style={{ minHeight: i === 0 ? '2rem' : 0 }} />
                  <div className="w-3 h-3 rounded-full bg-gold ring-4 ring-surface shrink-0 my-2" />
                  <div className="w-px bg-border flex-1 min-h-0" style={{ minHeight: i === idovonal.length - 1 ? '2rem' : 0 }} />
                </div>

                {/* Right content (odd rows) */}
                <div className={`py-8 lg:pl-14 ${i % 2 !== 0 ? 'block' : 'hidden lg:block'}`}>
                  {i % 2 !== 0 && (
                    <div>
                      <span className="section-label mb-2 block">{item.ev}</span>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                        {item.cim}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.szoveg}</p>
                    </div>
                  )}
                </div>

                {/* Mobile: full width */}
                <div className="lg:hidden col-span-full py-6 border-b border-border last:border-0">
                  <span className="section-label mb-2 block">{item.ev}</span>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.cim}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.szoveg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNATIONAL */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="section-label mb-4">Kitekintő</p>
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground text-balance mb-6">
                Magyarország a nemzetközi bowlingban
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A hazai bowlingsport a nemzetközi szervezetekhez kapcsolódva fejlődik. A Magyar
                  sportolók az európai és világversenyeken is képviseltetik magukat, és a
                  hazai eredmények folyamatosan javulnak.
                </p>
                <p>
                  A képzési rendszer fejlesztésének köszönhetően egyre több fiatal sportoló
                  kerül be a versenyéletbe, és a technikai felkészültség szintje is emelkedik.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/technika"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/25 pb-0.5 hover:border-gold hover:text-gold transition-colors"
                >
                  Technika és fejlődés <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { szam: '50+', felirat: 'Év a szervezett versenyzésben' },
                { szam: 'Európai', felirat: 'Versenyeken részt vevő sportolók' },
                { szam: 'Több', felirat: 'Generáció köti össze a bowlinget' },
                { szam: 'Folyamatos', felirat: 'Fejlődés technikában és számban' },
              ].map((item) => (
                <div
                  key={item.felirat}
                  className="bg-surface rounded-lg p-6 flex flex-col gap-1"
                >
                  <span className="font-serif text-2xl font-bold text-foreground">
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
    </>
  )
}
