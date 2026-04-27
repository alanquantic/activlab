import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Servicios | Activ",
  description:
    "Servicios de laboratorio de Activ: fisisorción, distribución de partícula, espectrometría, HPLC y cromatografía.",
};

const navItems = [
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Acreditaciones", href: "/acreditaciones" },
  { label: "Contacto", href: "/contacto" },
  { label: "Quejas y sugerencias", href: "/#contacto" },
];

const images = {
  logo: "https://activlab.com.mx/wp-content/uploads/2022/10/Logo-Activ_blanco-170x111.png",
  hero:
    "https://activlab.com.mx/wp-content/uploads/2022/09/pexels-chokniti-khongchum-2280571-scaled.jpg",
};

const services = [
  {
    title: "Fisisorción De Nitrógeno",
    image: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_9.jpg",
    description: ["Área superficial", "Tamaño y volumen de poro", "Microporosidad"],
  },
  {
    title: "Distribución De Tamaño de Partícula Por Difracción Láser",
    image: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_10.jpg",
    description: ["Distribución de tamaño de partícula", "Granulometría"],
  },
  {
    title: "Espectrometría De Absorción Atómica",
    image: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_8.jpg",
    description: [
      "Análisis de elementos alcalinos, alcalinotérreos y metales pesados: Ag, Al, As, Ca, Cd, Co, Cr, Cu, Fe, Hg, K, Mg, Mn, Mo, Na, Ni, Pb, Sb, Se, Sn, Sr, Zn.",
      "Análisis de elementos formadores de hidruros: As, Sb, Se, Sn.",
      "Análisis por vapor frío: Hg",
    ],
  },
  {
    title: "Analizador Termograviométrico",
    image: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_5.jpg",
    description: ["Calorimetría Diferencial de Barrido (DSC)", "Termogravimetría (TGA)"],
  },
  {
    title:
      "Class 4.2. Substances liable to spontaneous combustion (33.4.6TestN.4: Test method for self-heating substances)",
    image: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_4.jpg",
    description: [
      "Class 4.2. Substances liable to spontaneous combustión (Test N.4: Test method for self-heating substances)",
    ],
  },
  {
    title: "HPLC",
    image: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_6.jpg",
    description: ["Análisis de PFA´s"],
  },
  {
    title: "Cromatografía De Gases Acoplado A Espectrometría De Masas",
    image: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_7.jpg",
    description: ["Análisis cualitativo", "Análisis de MIB-Geosmin"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-activ-page text-activ-ink">
      <section className="relative isolate h-[200px] overflow-hidden">
        <Image
          src={images.hero}
          alt="Personal de laboratorio manipulando muestras químicas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-activ-blue/30" />

        <header className="section-shell relative z-10 flex flex-col items-center pt-3 sm:pt-4">
          <a href="/" aria-label="Ir al inicio" className="block">
            <Image
              src={images.logo}
              alt="Activ"
              width={170}
              height={111}
              priority
              className="h-auto w-[132px] sm:w-[170px]"
            />
          </a>

          <nav
            aria-label="Navegación principal"
            className="mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-[13px] font-normal leading-none text-white/95 sm:gap-x-10 sm:text-[17px]"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={item.label === "Servicios" ? "page" : undefined}
                className={`nav-link ${
                  item.label === "Servicios" ? "text-black hover:text-black" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>
      </section>

      <section className="py-20 sm:py-24 lg:pb-24 lg:pt-28">
        <div className="section-shell">
          <div className="max-w-[880px]">
            <h1 className="text-[clamp(2.25rem,4vw,3.2rem)] font-black leading-tight text-black">
              Servicios
            </h1>

            <div className="mt-9 grid gap-x-5 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="text-center">
                  <h2 className="mx-auto flex min-h-[88px] max-w-[290px] items-start justify-center text-[22px] font-black leading-tight text-[#0b269d]">
                    {service.title}
                  </h2>

                  <div className="flip-card service-flip-card group mt-2">
                    <div className="flip-card-inner">
                      <div className="flip-card-face flip-card-front">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>

                      <div className="flip-card-face flip-card-back">
                        <div className="space-y-3 text-center text-[15px] font-semibold leading-6">
                          {service.description.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-activ-navy text-white/70">
        <div className="section-shell flex flex-col items-center py-20 text-center">
          <Image
            src={images.logo}
            alt="Activ"
            width={170}
            height={111}
            className="h-auto w-[150px]"
          />

          <nav
            aria-label="Navegación del pie de página"
            className="mt-9 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[13px] font-semibold"
          >
            {navItems.map((item) => (
              <a key={`footer-${item.label}`} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-20 grid w-full gap-9 text-[18px] leading-relaxed sm:grid-cols-3 sm:text-left">
            <p className="sm:text-center">553 933 2556</p>
            <p className="sm:text-center">ventas@activlab.com.mx</p>
            <p className="mx-auto max-w-[360px] sm:mx-0">
              Laboratorio: Km 26, Carretera Jorobas Tula, Parque Industrial
              Tula, Atitalaquia, Hidalgo, C.P. 42970
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-7 text-center text-[12px] text-white/55">
          Copyright © 2026 Activ | Powered by Activ
        </div>
      </footer>
    </main>
  );
}
