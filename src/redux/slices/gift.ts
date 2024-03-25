// Importa createSlice y PayloadAction de @reduxjs/toolkit para la creación de un slice de Redux y definir el tipo de carga útil de acciones respectivamente
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// Importa IGift desde su ruta relativa en el archivo types/gift para utilizarlo en el tipo de estado del slice
import { IGift } from "../../types/gift";

// Define un tipo para el estado del slice
interface IInitialState {
  gift: IGift[]; // Arreglo de objetos IGift que representa los regalos
}

// Define el estado inicial utilizando ese tipo
export const initialState: IInitialState = {
  gift: [], // Inicialmente no hay regalos
};

// Crea un slice de Redux llamado giftSlice
const giftSlice = createSlice({
  name: "giftState", // Nombre del slice
  initialState, // Estado inicial del slice
  reducers: {
    // Define el reducer setGifts que actualiza el estado con un nuevo arreglo de regalos
    setGifts: (state, action: PayloadAction<IGift[]>) => {
      state.gift = action.payload; // Actualiza el arreglo de regalos con los datos proporcionados en la acción
    },
    // Define el reducer resetGifts que limpia el arreglo de regalos, estableciéndolo como vacío
    resetGifts: (state) => {
      state.gift = []; // Establece el arreglo de regalos como vacío
    },
  },
});

// Exporta las acciones creadas por el slice (setGifts y resetGifts)
export const { setGifts, resetGifts } = giftSlice.actions;

// Exporta el reducer generado por el slice
export default giftSlice.reducer;