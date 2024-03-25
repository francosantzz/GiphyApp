// Importa el componente CardGift desde su ruta relativa en la carpeta de interfaz de usuario (ui)
import { CardGift } from "../ui/CardGift/CardGift";
// Importa el hook useAppSelector desde su ruta relativa en la carpeta de hooks, específicamente el directorio redux
import { useAppSelector } from "../../hooks/redux";

// Definición del componente funcional GiftList
export const GiftList = () => {
  // Utiliza el hook useAppSelector para obtener el estado de la aplicación relacionado con los regalos
  const gift = useAppSelector((state) => state.gift.gift);

  // Renderiza el componente
  return (
    // Contenedor principal que utiliza un estilo de cuadrícula para mostrar los regalos
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, .6fr)", // Define tres columnas de tamaño flexible
        gap: "2vh", // Define un espacio entre filas
      }}
    >
      {/* Mapea cada regalo del estado y renderiza un componente CardGift para cada uno */}
      {gift.map((el, i) => (
        <CardGift gift={el} key={i} /> // Cada CardGift recibe un regalo como prop y una clave única
      ))}
    </div>
  );
};