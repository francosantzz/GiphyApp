// Importa useState y FormEvent de React para el manejo del estado y eventos del formulario
import { FormEvent, useState } from "react";
// Importa Button, Col, Form, Navbar y Row de react-bootstrap para la creación de la barra de navegación
import { Button, Col, Form, Navbar, Row } from "react-bootstrap";
// Importa el hook useAppDispatch desde su ruta relativa en la carpeta de hooks, específicamente el directorio redux
import { useAppDispatch } from "../../../hooks/redux";
// Importa la acción setGifts desde su ruta relativa en el slice de Redux dedicado a los regalos
import { setGifts } from "../../../redux/slices/gift";

// Obtiene el valor de la variable de entorno API_KEY definida en el archivo .env usando import.meta.env
const API_KEY = import.meta.env.VITE_API_KEY;

// Definición del componente funcional NavBar
export const NavBar = () => {
  // Utiliza el hook useAppDispatch para obtener la función de despacho de acciones de Redux
  const dispatch = useAppDispatch();

  // Función asincrónica para realizar una solicitud a la API de Giphy y obtener regalos según la consulta
  const fetchGift = async (query: string) => {
    try {
      // Realiza una solicitud a la API de Giphy usando el API_KEY y la consulta proporcionada
      const response = await fetch(`
            https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=12
            `);
      // Parsea la respuesta a formato JSON
      const data = await response.json();
      // Extrae la información relevante de los datos obtenidos y la mapea a un formato deseado
      const parseData = data.data.map((el: any) => ({
        urlGift: el.images.fixed_height.url, // URL de la imagen del regalo
        title: el.title, // Título del regalo
      }));
      // Despacha la acción setGifts de Redux para actualizar el estado de los regalos con los nuevos datos
      dispatch(setGifts(parseData));
    } catch (error) {
      console.warn(error); // Registra cualquier error en la consola
    }
  };

  // Estado local para almacenar la consulta de búsqueda del usuario
  const [queryInput, setQueryInput] = useState("");

  // Función para manejar el envío del formulario
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previene el comportamiento predeterminado de envío del formulario
    fetchGift(queryInput); // Realiza la búsqueda de regalos al enviar el formulario con la consulta actual
  };

  // Renderiza la barra de navegación con el formulario de búsqueda
  return (
    <Navbar className="bg-body-tertiary justify-content-center">
      {/* Formulario para ingresar la consulta de búsqueda */}
      <Form onSubmit={submit}>
        {/* Fila que contiene un campo de entrada y un botón para enviar el formulario */}
        <Row>
          {/* Columna para el campo de entrada de búsqueda */}
          <Col xs="auto">
            <Form.Control
              onChange={(e) => {
                setQueryInput(e.target.value); // Actualiza el estado de la consulta de búsqueda al cambiar el valor del campo de entrada
              }}
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
          {/* Columna para el botón de enviar el formulario */}
          <Col xs="auto">
            <Button type="submit">Submit</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
};