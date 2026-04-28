import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Quiénes somos | Activ",
  description:
    "Conoce la empresa, misión, visión, valores y política del Laboratorio de Investigación y Desarrollo de Activ.",
};

const navItems = [
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Acreditaciones", href: "/acreditaciones" },
  { label: "Contacto", href: "/contacto" },
  { label: "Quejas y sugerencias", href: "#quejas-y-sugerencias" },
];

const images = {
  logo: "https://activlab.com.mx/wp-content/uploads/2022/10/Logo-Activ_blanco-170x111.png",
  hero:
    "https://activlab.com.mx/wp-content/uploads/2022/09/pexels-chokniti-khongchum-2280571-scaled.jpg",
};

const companyParagraphs = [
  <>
    <strong>ACTIV</strong> es una empresa mexicana fundada en 1997 dedicada a
    la prestación de servicios de administración de negocios y apoyo a la
    industria.
  </>,
  <>
    En 2011, <strong>ACTIV</strong> crea el{" "}
    <strong>Laboratorio de Investigación y Desarrollo</strong> con sede en el
    Parque Industrial de Tula, Atitalaquia, Hidalgo, único y exclusivo de{" "}
    <em>América Latina</em> para el{" "}
    <em>
      Análisis de Productos Adsorbentes basados en Carbón Activado.
    </em>
  </>,
  <>
    En nuestro Laboratorio labora personal altamente calificado dedicado a la
    Investigación, Implementación, Desarrollo y Análisis a través de
    metodologías científicas y experimentales para productos basados en carbón
    activado.
  </>,
  <>
    Desde 2021, ACTIV cuenta con la acreditación en la Norma ISO/IEC 17025
    “Requisitos Generales para la Competencia de los Laboratorios de Ensayo y
    Calibración” en el parámetro: Class 4.2. Substances liable to spontaneous
    combustion (33.4.6 Test N.4: Test method for self-heating substances).
  </>,
  <>
    Debido a su alta demanda y al ser el único Laboratorio en México con la
    experiencia en el análisis de productos basados en carbón activado, sigue en
    continua preparación para lograr la ampliación de su alcance de acreditación
    en la determinación de metales por Codex Alimentario (Zn y Pb), ASTM (Fe) y
    Codex Enológico Internacional (As).
  </>,
  <>
    La competitividad de una empresa y la satisfacción del cliente están
    determinadas por el precio y la calidad del servicio. Un laboratorio eficaz y
    eficiente logra garantizar la calidad del servicio a través de un Sistema de
    Gestión de Calidad efectivo, por lo que <strong>ACTIV</strong> adopta reglas
    estratégicas que identifican, puntualizan y describen los fundamentos y
    lineamientos bajo los cuales se lleva a cabo la planificación y ejecución de
    los análisis de ensayo así como en todo el proceso.
  </>,
  <>
    Nuestro Laboratorio de Investigación y Desarrollo cuenta con un sistema
    técnico-administrativo y una infraestructura acorde a las necesidades del
    mercado; siempre provisto de personal competente, responsable y autoritario
    que realiza y/o verifica todo el trabajo que afecta la calidad de los
    ensayos.
  </>,
];

const cards = [
  {
    title: "MISIÓN",
    image: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_14.jpg",
    description:
      "Ser el primer y único laboratorio en el análisis de productos basados en carbón activado en México, con las mejores metodologías científicas y experimentales para garantizar el correcto almacenaje, transporte y uso del producto en la industria de la purificación.",
  },
  {
    title: "VISIÓN",
    image: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_13.jpg",
    description:
      "Que el laboratorio sea un pilar y pionero en el análisis de carbón activado, contribuyendo al desarrollo de la industria de la purificación y el transporte, de manera sustentable y con presencia internacional.",
  },
  {
    title: "VALORES",
    image: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_12.jpg",
    values: [
      "Liderazgo. Tomamos la iniciativa para gestionar, convocar, promover, incentivar y motivar el cambio para lograr una mejora continua.",
      "Transparencia. Mantenernos francos y abiertos a explicar de nuestras decisiones e informar de nuestras acciones.",
      "Compromiso. Cumplimos nuestras propuestas de manera puntual y constante.",
      "Calidad. Brindamos una solución eficaz y eficiente de acuerdo a las necesidades de nuestros clientes.",
      "Competitividad. Generamos la mayor satisfacción de nuestros clientes al mejor precio y la más alta calidad.",
      "Resiliencia. Nos mantenemos firmes, seguros, fuertes y capaces de sobreponernos a situaciones adversas y convertirlas en oportunidades.",
      "Confiabilidad. Transparencia, consistencia y estabilidad de nuestra forma de hacer los negocios.",
      "Honestidad. Ofrecemos la certeza de que nuestras acciones y decisiones se realizan con apego a nuestros principios.",
    ],
  },
  {
    title: "POLÍTICA",
    image: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_11.jpg",
    description:
      "Suministrar servicios confiables de análisis instrumentales y fisicoquímicos de carbón activado, con resultados oportunos y confidenciales que aseguren el correcto almacenaje, transporte y uso en la industria de la purificación. Siempre cumpliendo con los requisitos de nuestros clientes, a través de una infraestructura especializada, experiencia científica y un sistema de gestión de calidad que contribuya a la mejora continua.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-activ-page text-activ-ink">
      <section className="relative isolate h-[224px] overflow-hidden">
        <Image
          src={images.hero}
          alt="Equipo de laboratorio con microscopio y muestras químicas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-activ-blue/60" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,153,0.85)_0%,rgba(0,0,153,0.38)_58%,rgba(0,0,153,0.1)_100%)]" />

        <header className="section-shell relative z-10 flex flex-col items-center pt-3 sm:pt-4">
          <a href="/" aria-label="Ir al inicio" className="block">
            <Image
              src={images.logo}
              alt="Activ"
              width={170}
              height={111}
              priority
              className="h-auto w-[150px] sm:w-[170px]"
            />
          </a>

          <nav
            aria-label="Navegación principal"
            className="mt-7 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-[15px] font-normal leading-none text-white/95 sm:gap-x-10 sm:text-[17px]"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-current={item.label === "Quiénes somos" ? "page" : undefined}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(180px,0.2fr)]">
          <article className="max-w-[920px]">
            <h1 className="text-[clamp(2.25rem,4vw,3rem)] font-black leading-tight text-black">
              Nuestra Empresa
            </h1>

            <div className="mt-8 space-y-5 text-justify text-[15px] leading-8 text-activ-muted sm:text-[16px]">
              {companyParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 grid gap-7 md:grid-cols-2">
              {cards.map((card) => (
                <article key={card.title} className="flip-card group">
                  <div className="flip-card-inner">
                    <div className="flip-card-face flip-card-front">
                      <Image
                        src={card.image}
                        alt={`Imagen de ${card.title.toLowerCase()} de Activ`}
                        fill
                        sizes="(min-width: 768px) 420px, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/75" />
                      <h2 className="relative z-10 text-center text-[28px] font-black uppercase tracking-wide text-white">
                        {card.title}
                      </h2>
                    </div>

                    <div className="flip-card-face flip-card-back">
                      {card.values ? (
                        <ul className="space-y-2 text-left text-[12px] leading-snug sm:text-[13px]">
                          {card.values.map((value) => (
                            <li key={value}>{value}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-center text-[15px] leading-7">
                          {card.description}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </article>

          <div aria-hidden="true" className="hidden lg:block" />
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
