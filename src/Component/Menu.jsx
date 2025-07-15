import React, { useState } from "react";
import "./Menu.css";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button */}
      <button
        className={`menu-hamburger${open ? " open" : ""}`}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Overlay */}
      <div
        className={`menu-overlay${open ? " show" : ""}`}
        onClick={() => setOpen(false)}
      />

      {/* Side drawer */}
      <nav className={`side-drawer${open ? " open" : ""}`}>
        <button
          className="drawer-close"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="menu-link"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
