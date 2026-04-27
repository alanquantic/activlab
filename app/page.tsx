import Image from "next/image";

const navItems = [
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Acreditaciones", href: "/acreditaciones" },
  { label: "Contacto", href: "/contacto" },
  { label: "Quejas y sugerencias", href: "/#contacto" },
];

const images = {
  logo: "https://activlab.com.mx/wp-content/uploads/2022/10/Logo-Activ_blanco-170x111.png",
  about:
    "https://activlab.com.mx/wp-content/uploads/2022/09/pexels-chokniti-khongchum-2280571-1024x684.jpg",
  serviceThermometry:
    "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_4.jpg",
  serviceMetals:
    "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_8.jpg",
  cta: "https://activlab.com.mx/wp-content/uploads/2022/09/Buque-transporte1.jpg",
};

const heroSlides = [
  {
    image:
      "https://activlab.com.mx/wp-content/uploads/2022/09/IMG_20220824_120922-scaled.jpg",
    alt: "Frascos de laboratorio con muestras minerales y carbón activado",
    title: ["Análisis de", "metales"],
    objectPosition: "center center",
  },
  {
    image:
      "https://activlab.com.mx/wp-content/uploads/2022/09/IMG_20220824_141735-scaled.jpg",
    alt: "Vasos de precipitados con solución morada iluminada",
    title: ["Análisis de", "metales"],
    objectPosition: "center center",
  },
  {
    image:
      "https://activlab.com.mx/wp-content/uploads/2022/09/Buque-transporte1.jpg",
    alt: "Transporte de carga y zona portuaria al atardecer",
    title: ["Estudios", "especiales"],
    objectPosition: "center center",
  },
  {
    image:
      "https://activlab.com.mx/wp-content/uploads/2022/09/IMG_20220824_161356-scaled.jpg",
    alt: "Matraces de laboratorio con soluciones azules",
    title: ["Análisis de", "metales"],
    objectPosition: "58% center",
  },
];

const services = [
  {
    title: "Termometría",
    image: images.serviceThermometry,
    alt: "Equipo de termometría de laboratorio",
    description:
      "Class 4.2. Substances liable to spontaneous combustion (33.4.6TestN.4: Test method for self-heating substances)",
  },
  {
    title: "Espectrometría De Absorción Atómica",
    image: images.serviceMetals,
    alt: "Equipo de espectrometría de absorción atómica",
    description: "Arsénico, Plomo, Zinc y Fierro en Carbón activado",
  },
];

const gallery = [
  {
    src: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ.jpg",
    alt: "Muestras de carbón activado y pigmentos en frascos de vidrio",
  },
  {
    src: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_2.jpg",
    alt: "Vasos de laboratorio con líquido morado iluminado",
  },
  {
    src: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_1.jpg",
    alt: "Cristalería de laboratorio con soluciones azules",
  },
  {
    src: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ.jpg",
    alt: "Muestras de laboratorio en exterior",
  },
  {
    src: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_2.jpg",
    alt: "Análisis de muestras bajo luz ultravioleta",
  },
  {
    src: "https://activlab.com.mx/wp-content/uploads/2022/09/Activ_1.jpg",
    alt: "Matraces y equipo de análisis químico",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-activ-page text-activ-ink">
      <section className="relative isolate h-[560px] overflow-hidden sm:h-[620px] lg:h-[670px]">
        <div aria-hidden="true" className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div key={slide.image} className="hero-slide absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: slide.objectPosition }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,153,0.96)_0%,rgba(0,0,153,0.91)_35%,rgba(0,0,153,0.48)_62%,rgba(0,0,153,0.05)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,153,0.28)_0%,rgba(0,0,153,0)_46%)]" />
              <div className="absolute inset-0 bg-black/10" />

              <div className="section-shell relative z-10 flex h-full items-center pt-[132px]">
                <h1 className="max-w-[560px] text-[clamp(2.7rem,6vw,5rem)] font-black leading-[0.95] text-white">
                  {slide.title.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
              </div>
            </div>
          ))}
        </div>

        <header className="section-shell relative z-20 flex flex-col items-center pt-3 sm:pt-4">
          <a href="#" aria-label="Ir al inicio" className="block">
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
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <h1 className="sr-only">
          Activ: análisis de metales y estudios especiales
        </h1>
      </section>

      <section id="quienes-somos" className="section-padding">
        <div className="section-shell">
          <h2 className="section-title">Quiénes somos</h2>

          <div className="mt-8 grid items-center gap-8 md:mt-10 md:grid-cols-[1fr_0.95fr] lg:gap-12">
            <div className="relative aspect-[16/9] overflow-hidden bg-white shadow-soft">
              <Image
                src={images.about}
                alt="Personal de laboratorio manipulando muestras químicas"
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mx-auto max-w-[520px] text-[14px] font-semibold leading-8 text-activ-muted md:mx-0">
              <p>
                <strong className="font-extrabold text-activ-ink">ACTIV</strong>{" "}
                es una empresa mexicana fundada en 1997 dedicada a la prestación
                de servicios de administración de negocios y apoyo a la
                industria.
              </p>
              <p className="mt-5">
                En 2011,{" "}
                <strong className="font-extrabold text-activ-ink">ACTIV</strong>{" "}
                crea el{" "}
                <strong className="font-extrabold text-activ-ink">
                  Laboratorio de Investigación y Desarrollo
                </strong>{" "}
                con sede en el Parque Industrial de Tula, Atitalaquia, Hidalgo,
                único y exclusivo de <em>América Latina</em> para el{" "}
                <em>
                  Análisis de Productos Adsorbentes basados en Carbón Activado.
                </em>
              </p>

              <div className="mt-8 flex justify-center md:justify-start lg:justify-center">
                <a href="/quienes-somos" className="button button-dark">
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="servicios" className="section-padding pt-6 md:pt-10">
        <div className="section-shell">
          <h2 className="section-title">Servicios acreditados</h2>

          <div className="mx-auto mt-9 grid max-w-[720px] gap-12 sm:grid-cols-2 sm:gap-16">
            {services.map((service) => (
              <article key={service.title} className="text-center">
                <h3 className="mx-auto min-h-[64px] max-w-[310px] text-[22px] font-black leading-tight text-[#44324d]">
                  {service.title}
                </h3>

                <div className="relative mx-auto mt-6 aspect-square w-[220px] overflow-hidden rounded-full bg-white sm:w-[235px]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="235px"
                    className="object-cover"
                  />
                </div>

                <p className="mx-auto mt-6 max-w-[290px] text-[15px] font-black leading-tight text-activ-ink">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="relative isolate overflow-hidden py-11">
        <Image
          src={images.cta}
          alt="Buque de transporte en zona industrial"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/90" />

        <div className="section-shell relative z-10 flex flex-col items-center justify-between gap-7 sm:flex-row">
          <h2 className="text-center text-[clamp(2rem,4vw,3rem)] font-black leading-none text-white sm:text-left">
            ¿Tienes alguna duda?
          </h2>
          <a href="mailto:ventas@activlab.com.mx" className="button button-light">
            Contáctame
          </a>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="gallery-title">
        <div className="section-shell">
          <h2 id="gallery-title" className="section-title">
            Galería
          </h2>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {gallery.map((image, index) => (
              <figure
                key={`${image.src}-${index}`}
                className="relative aspect-square overflow-hidden bg-white"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 350px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </figure>
            ))}
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
