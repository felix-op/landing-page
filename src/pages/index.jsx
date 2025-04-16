import Presentacion from "../components/Presentacion";
import EscudoLogo from "./../assets/escudo-u.png";
import { useState } from "react";

export function Index() {
  // Use State para control del nav móvil
  const [isOpen, setIsOpen] = useState(false);

  const clasesMovil = ["flex", "bg-blue"];

  return (
    <>
      <header className="flex flex-row-reverse md:flex-row justify-around md:justify-end items-center py-[20px] pr-[20px] bg-linear-120 from-azul-oscuro to-verde-oscuro">
        <nav className="mr-[20px]">
          {/* Botón solo visible en pantallas chicas */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="menu"
          >
            ☰
          </button>

          {/* Menú en pantallas grandes */}
          <ul className="hidden md:flex gap-4">
            <Link href="#">Juega y Diviértete</Link>
            <Link href="#">Aprende y Entrena</Link>
            <Link href="#">Descubre Historias</Link>
            <Link href="#">Aporta al Equipo</Link>
          </ul>

          {/* Menú desplegable en móvil */}
          {isOpen && (
            <ul
              id="menu"
              className="md:hidden flex flex-col gap-4 bg-blue-700 absolute top-0 left-0 h-full z-5 bg-linear-120 from-azul-oscuro to-verde-oscuro py-10 px-10"
            >
              <Link href="#">Juega y Diviértete</Link>
              <Link href="#">Aprende y Entrena</Link>
              <Link href="#">Descubre Historias</Link>
              <Link href="#">Aporta al Equipo</Link>
            </ul>
          )}
        </nav>
        <Escudo />
      </header>
      <main className="">
        <Presentacion />
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}

function Link({ href, children }) {
  return (
    <li className="text-letra hover:bg-verde-lima px-3 py-2 rounded">
      <a href={href}>{children}</a>
    </li>
  );
}

function Escudo() {
  return <img src={EscudoLogo} className="w-45 h-auto" />;
}
