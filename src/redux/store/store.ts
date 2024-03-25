// Importa configureStore de @reduxjs/toolkit para configurar la tienda de Redux
import { configureStore } from "@reduxjs/toolkit";
// Importa giftSlice desde su ruta relativa en el archivo slices/gift para agregarlo como un reducer a la tienda
import giftSlice from "../slices/gift";

// Configura la tienda de Redux con un único reducer llamado 'gift' que utiliza el reducer generado por el slice giftSlice
export const store = configureStore({
  reducer: {
    gift: giftSlice,
  },
});

// Infiera los tipos `RootState` y `AppDispatch` a partir de la tienda misma
// RootState representa el tipo de estado global de la aplicación
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch representa el tipo de función de despacho de acciones de Redux
export type AppDispatch = typeof store.dispatch;
