import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Acreditaciones | Activ",
  description:
    "Acreditación PJLA Testing #112876 del laboratorio Activ, con descarga del certificado.",
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
  accreditation:
    "https://activlab.com.mx/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-09-at-1.37.37-p.m.jpeg",
};

const certificateUrl = "/docs/L25-823-ACTV-Test-FINAL.pdf";

export default function AccreditationsPage() {
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
                aria-current={
                  item.label === "Acreditaciones" ? "page" : undefined
                }
                className={`nav-link ${
                  item.label === "Acreditaciones"
                    ? "text-black hover:text-black"
                    : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>
      </section>

      <section className="py-24 sm:py-28 lg:pb-28 lg:pt-32">
        <div className="section-shell">
          <div className="max-w-[880px]">
            <h1 className="text-[clamp(2.5rem,4vw,3.2rem)] font-black leading-tight text-black">
              Acreditaciones
            </h1>

            <div className="mt-10 flex w-full max-w-[430px] flex-col items-center">
              <Image
                src={images.accreditation}
                alt="PJLA Testing Accreditation #112876"
                width={791}
                height={852}
                priority
                className="h-auto w-full bg-white"
              />

              <p className="mt-7 text-center text-[16px] font-black text-black">
                Accreditation #112876
              </p>

              <a
                href={certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-12 inline-flex min-h-14 items-center justify-center gap-2 bg-black px-8 text-[13px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-activ-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <path d="M9 15h6" />
                  <path d="M12 12v6" />
                </svg>
                Descargar
              </a>
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
