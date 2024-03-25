// Importa FC (Functional Component) de React para definir el tipo del componente funcional
import { FC } from "react";
// Importa el componente Card de react-bootstrap para la presentación de los regalos
import { Card } from "react-bootstrap";

// Define la interfaz IGift para describir la estructura de los objetos de regalo
interface IGift {
  urlGift: string; // URL de la imagen del regalo
  title: string; // Título del regalo
}

// Define la interfaz IPropsCardGift para describir las propiedades que recibe el componente CardGift
interface IPropsCardGift {
  gift: IGift; // Propiedad que recibe un objeto de regalo según la interfaz IGift
}

// Definición del componente funcional CardGift que recibe las propiedades especificadas en IPropsCardGift
export const CardGift: FC<IPropsCardGift> = ({ gift }) => {
  // Renderiza un componente de tarjeta (Card) de react-bootstrap con la imagen y el título del regalo
  return (
    <Card style={{ width: "100%" }}>
      {/* La imagen del regalo se muestra en la parte superior de la tarjeta */}
      <Card.Img variant="top" src={gift.urlGift} />
      <Card.Body>
        {/* El título del regalo se muestra en el cuerpo de la tarjeta */}
        <Card.Title>{gift.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};