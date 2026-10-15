"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Croissant, Menu, X } from "lucide-react";
import { site, whatsappUrl } from "@/lib/site";

const links = [
  { href: "#sobre", label: "Nossa história" },
  { href: "#servicos", label: "Nossos pães" },
  { href: "#localizacao", label: "Onde estamos" },
];

export function MotionIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="page-width header-inner">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-mark"><Croissant size={21} strokeWidth={1.7} aria-hidden="true" /></span>
          <span className="brand-text">{site.clientName}<small>PADARIA ARTESANAL</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Pedir pelo WhatsApp <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            id="mobile-navigation"
            aria-label="Navegação móvel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
          >
            {links.map((link, index) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                <span>0{index + 1}</span>{link.label}<ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
            <a className="mobile-nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
              Fazer uma encomenda <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 200);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          className="whatsapp-float"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Fale com ${site.clientName} pelo WhatsApp`}
          initial={{ opacity: 0, scale: 0.75, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 12 }}
          transition={{ duration: 0.2 }}
        >
          <svg viewBox="0 0 32 32" aria-hidden="true" className="whatsapp-icon">
            <path fill="currentColor" d="M16.02 3a12.84 12.84 0 0 0-10.9 19.63L3.3 29l6.55-1.72A12.9 12.9 0 1 0 16.02 3Zm0 23.47c-1.95 0-3.86-.52-5.52-1.5l-.4-.24-3.88 1.02 1.04-3.78-.26-.41a10.5 10.5 0 1 1 9.02 4.91Zm5.76-7.87c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.73.16-.22.33-.84 1.05-1.03 1.27-.19.22-.38.24-.7.08-.33-.16-1.38-.51-2.62-1.62-.97-.87-1.63-1.94-1.82-2.27-.19-.32-.02-.5.14-.65.14-.14.32-.38.49-.57.16-.19.22-.33.32-.54.1-.22.05-.41-.03-.57-.08-.16-.73-1.76-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.7 0 1.6 1.17 3.14 1.33 3.36.17.22 2.3 3.5 5.57 4.91.78.34 1.39.55 1.87.7.79.25 1.5.22 2.06.13.63-.09 1.95-.8 2.23-1.57.27-.76.27-1.4.19-1.54-.08-.14-.3-.22-.62-.38Z"/>
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
