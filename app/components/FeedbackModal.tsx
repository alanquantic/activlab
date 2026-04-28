"use client";

import { FormEvent, useEffect, useState } from "react";

export default function FeedbackModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openFromLink = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const trigger = target?.closest<HTMLAnchorElement>(
        'a[href="#quejas-y-sugerencias"]',
      );

      if (!trigger) {
        return;
      }

      event.preventDefault();
      setIsOpen(true);
    };

    const closeFromEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", openFromLink);
    document.addEventListener("keydown", closeFromEscape);

    return () => {
      document.removeEventListener("click", openFromLink);
      document.removeEventListener("keydown", closeFromEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 px-5 pt-[170px] sm:px-8"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setIsOpen(false);
        }
      }}
    >
      <section
        aria-labelledby="feedback-title"
        aria-modal="true"
        className="relative w-full max-w-[900px] bg-white px-7 pb-14 pt-4 shadow-2xl sm:px-14"
        role="dialog"
      >
        <button
          aria-label="Cerrar"
          className="absolute right-5 top-5 grid h-5 w-5 place-items-center border border-dotted border-black text-[15px] font-bold leading-none text-black transition hover:bg-black hover:text-white"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          x
        </button>

        <h2
          id="feedback-title"
          className="text-center text-[clamp(2.4rem,5vw,3.8rem)] font-black leading-tight text-[#142ba0]"
        >
          Quejas y sugerencias
        </h2>

        <form className="mt-7" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="feedback-name">
            Nombre
          </label>
          <input
            id="feedback-name"
            name="name"
            placeholder="Nombre"
            required
            type="text"
            className="feedback-field"
          />

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="feedback-email">
                Correo Electrónico
              </label>
              <input
                id="feedback-email"
                name="email"
                placeholder="Correo Electrónico"
                required
                type="email"
                className="feedback-field"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="feedback-phone">
                Teléfono
              </label>
              <input
                id="feedback-phone"
                name="phone"
                placeholder="Teléfono"
                required
                type="tel"
                className="feedback-field"
              />
            </div>
          </div>

          <label className="sr-only" htmlFor="feedback-message">
            Comentario
          </label>
          <textarea
            id="feedback-message"
            name="message"
            placeholder="Comentario"
            required
            rows={5}
            className="feedback-field mt-3 resize-y"
          />

          <button
            type="submit"
            className="mt-3 flex min-h-[52px] w-full items-center justify-center bg-black text-[13px] font-black uppercase tracking-[0.24em] text-white transition hover:bg-activ-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}
