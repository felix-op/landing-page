import EscudoLogo from "./../assets/escudo-u.png";

export function Index() {
  return (
    <>
      <header className="flex justify-end items-center bg-linear-to-r from-azul-oscuro to-verde-oscuro py-[20px] pr-[20px]">
        <nav className="mr-[20px]">
          <ul className="flex gap-4">
            <Link href="#">Juega y Diviértete</Link>
            <Link href="#">Aprende y Entrena</Link>
            <Link href="#">Descubre Historias</Link>
            <Link href="#">Aporta al Equipo</Link>
          </ul>
        </nav>
        <Escudo />
      </header>
      <main>
        <Presentacion />
        <section></section>
      </main>
      <footer></footer>
    </>
  );
}

function Presentacion() {
  return (
    <section className="grid grid-cols-7 grid-rows-2 gap-3 bg-red-200 h-100 p-[20px]">
      <Imagen src="#" alt="Ilustrativa" rows="1" columns="2" />
      <Imagen src="#" alt="Ilustrativa" rows="2" columns="1" />
      <Imagen src="#" alt="Ilustrativa" rows="1" columns="1" />
      <Imagen src="#" alt="Ilustrativa" rows="1" columns="2" />
      <Imagen src="#" alt="Ilustrativa" rows="2" columns="1" />
      <Imagen src="#" alt="Ilustrativa" rows="1" columns="2" />
      <Imagen src="#" alt="Ilustrativa" rows="1" columns="3" />
    </section>
  );
}

function Imagen({ src, alt, link, rows = "1", columns = "1" }) {
  const image = (
    <img
      src={src}
      alt={alt}
      className={`bg-black col-span-[${columns}] row-span-[${rows}]`}
    />
  );

  return link ? <a href={link}>{image}</a> : image;
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
