import { useState, useEffect } from "react";
import ImagenPresentacion from "./ImagenPresentacion";

const propiedades_imagenes = [
  { src: "#", row: 1, col: 2, quitar: [] },
  { src: "#", row: 2, col: 1, quitar: [4] },
  { src: "#", row: 1, col: 1, quitar: [1, 4] },
  { src: "#", row: 1, col: 2, quitar: [1, 2, 4] },
  { src: "#", row: 2, col: 1, quitar: [1, 2, 4, 5, 6] },
];

const presentaciones = [];

for (let i = 0; i < 5; i++) {
  presentaciones.push(
    propiedades_imagenes.filter((props, indice) => {
      return !(indice in props.quitar);
    })
  );
}

function Presentacion() {
  const width = useWindowWidth();
  let section;

  if (width <= 480) {
    section = 0;
  } else if (width > 480 && width < 650) {
    section = 1;
  } else if (width >= 650 && width < 900) {
    section = 2;
  } else if (width >= 900 && width < 1200) {
    section = 3;
  } else {
    section = 4;
  }

  return (
    <>
      {presentaciones[section].map((presentacion) => {
        <ImagenPresentacion
          src={presentacion.src}
          row={presentacion.row}
          col={presentacion.col}
        />;
      })}
    </>
  );
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function PresentacionSection({ imagenes }) {
  const width = useWindowWidth();

  const visibleImagen = imagenes[visibleIndex];

  return (
    <section className="grid grid-cols-7 grid-rows-2 gap-3 bg-gricesito p-[20px]">
      <img
        src={visibleImagen.src}
        alt=""
        className={`bg-gray-300 col-span-${visibleImagen.col} row-span-${visibleImagen.row}`}
      />
    </section>
  );
}

export default Presentacion;
