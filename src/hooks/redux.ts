// Importa useDispatch y useSelector de react-redux para el manejo de despacho de acciones y selección de estado respectivamente
import { useDispatch, useSelector } from "react-redux";
// Importa TypedUseSelectorHook de react-redux para definir el tipo del gancho de selección de estado
import type { TypedUseSelectorHook } from "react-redux";
// Importa AppDispatch y RootState desde el archivo store.js en la carpeta redux/store para definir los tipos de useDispatch y useSelector
import { AppDispatch, RootState } from "../redux/store/store";

// Utiliza en todo tu aplicativo en lugar de useDispatch y useSelector directamente
// Gancho personalizado para utilizar useDispatch con el tipo AppDispatch definido en el archivo store.js
export const useAppDispatch: () => AppDispatch = useDispatch;
// Gancho personalizado para utilizar useSelector con el tipo RootState definido en el archivo store.js
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;