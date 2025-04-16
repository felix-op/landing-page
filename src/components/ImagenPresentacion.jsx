function ImagenPresentacion({ src, col, row }) {
  const rowVariant = {
    1: "row-span-[1]",
    2: "row-span-[2]",
  };
  const columnVariant = {
    1: "col-span-[1]",
    2: "col-span-[2]",
    3: "col-span-[3]",
  };
  return (
    <img
      src={src}
      alt="Imagen Ilustrativa"
      className={`${rowVariant[row]} ${columnVariant[col]} bg-gris`}
    />
  );
}

export default ImagenPresentacion;
