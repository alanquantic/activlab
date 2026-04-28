import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contacto | Activ",
  description:
    "Datos de contacto, ubicación, teléfono y correo electrónico del Laboratorio Activ.",
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

const contactItems = [
  {
    title: "Dirección",
    lines: [
      "Km 26, Carretera Jorobas Tula,",
      "Parque Industrial Tula, Atitalaquia,",
      "Hidalgo, C.P. 42970",
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.7A2.7 2.7 0 1 1 12 6.3a2.7 2.7 0 0 1 0 5.4Z" />
      </svg>
    ),
  },
  {
    title: "Teléfono",
    lines: ["553 933 2556"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 15.8 16 13.9a1.6 1.6 0 0 0-1.8.4l-1.6 1.9a13 13 0 0 1-5.8-5.8l1.9-1.6A1.6 1.6 0 0 0 9.1 7L7.2 2.5A1.6 1.6 0 0 0 5.4 1.6L2 2.4A1.6 1.6 0 0 0 .8 4c0 10.6 8.6 19.2 19.2 19.2a1.6 1.6 0 0 0 1.6-1.2l.8-3.4a1.6 1.6 0 0 0-.9-1.8Z" />
      </svg>
    ),
  },
  {
    title: "Correo electrónico",
    lines: ["ventas@activlab.com.mx"],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.5 4h-19A2.5 2.5 0 0 0 0 6.5v11A2.5 2.5 0 0 0 2.5 20h19a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 21.5 4Zm-.4 4.3-8.3 6a1.4 1.4 0 0 1-1.6 0l-8.3-6A1.2 1.2 0 1 1 4.3 6.4L12 12l7.7-5.6a1.2 1.2 0 1 1 1.4 1.9Z" />
      </svg>
    ),
  },
];

const mapSrc =
  "https://maps.google.com/maps?q=Tula-Jorobas%2C%20Parque%20Industrial%20Atitalaquia%2C%2042970%20Atitalaquia%2C%20Hgo.&t=m&z=10&output=embed&iwloc=near";

export default function ContactPage() {
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
                aria-current={item.label === "Contacto" ? "page" : undefined}
                className={`nav-link ${
                  item.label === "Contacto" ? "text-black hover:text-black" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>
      </section>

      <section className="pb-20 pt-24 sm:pb-24 sm:pt-32">
        <div className="section-shell">
          <h1 className="text-[clamp(2.5rem,4vw,3.2rem)] font-black leading-tight text-black">
            Contacto
          </h1>

          <div className="mt-12 grid gap-12 text-center lg:grid-cols-3">
            {contactItems.map((item) => (
              <article key={item.title} className="mx-auto max-w-[420px]">
                <div className="mx-auto h-12 w-12 text-[#142ba0] [&>svg]:h-full [&>svg]:w-full [&>svg]:fill-current">
                  {item.icon}
                </div>
                <h2 className="mt-3 text-[28px] font-black leading-tight text-[#777777]">
                  {item.title}
                </h2>
                <div className="mt-3 space-y-3 text-[22px] leading-relaxed text-black">
                  {item.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 w-full">
          <iframe
            src={mapSrc}
            title="Tula-Jorobas, Parque Industrial Atitalaquia, 42970 Atitalaquia, Hgo."
            aria-label="Tula-Jorobas, Parque Industrial Atitalaquia, 42970 Atitalaquia, Hgo."
            loading="lazy"
            className="h-[300px] w-full border-0 sm:h-[330px]"
          />
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
