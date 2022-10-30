import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstants';

export const getProducts = () => async(dispacth)=> {
    try{
        dispacth({type: ALL_PRODUCTS_REQUEST})

        const {data} = await axios.get('api/productos')

        dispacth({
            type:ALL_PRODUCTS_SUCCESS,
            payload: data
        })
    }catch (error){
        dispacth({
            type:ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}
//VER DETALLE DEL PRODUCTO
export const getProductsDetails = (id) => async(dispacth)=> {
    try{
        dispacth({type: PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`api/productos/:${id}`)

        dispacth({
            type:PRODUCT_DETAILS_SUCCESS,
            payload: data.product
        })
    }catch (error){
        dispacth({
            type:PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

//clear error
export const clearErrors = () => async(dispacth)=>{
    dispacth({
        type: CLEAR_ERRORS
    })
}