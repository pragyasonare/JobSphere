import {configureStore} from "@reduxjs/toolkit"

import {
    useDispatch as useAppDispatch,
    useSelector as UseAppSelector,
} from "react-redux";
import { rootReducer } from "./rootReducer";

const store = configureStore({
    reducer : rootReducer  ,
})

const {dispatch} = store 
const useSelector = UseAppSelector;
const useDispatch =()=> useAppDispatch();

export {store , dispatch , useDispatch , useSelector };