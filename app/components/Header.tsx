import { useState } from "react";
import { NavLink } from "react-router";
import { Logo } from "./Logo";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/sobre-nos", label: "Sobre nós" },
  { to: "/blog", label: "Blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Logo />

        <nav
          className={`site-nav ${open ? "site-nav--open" : ""}`}
          aria-label="Navegação principal"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `site-nav__link ${isActive ? "site-nav__link--active" : ""}`
              }
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
          <a href="#orcamento" className="btn btn--primary site-nav__cta">
            Faça um orçamento
          </a>
        </nav>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
