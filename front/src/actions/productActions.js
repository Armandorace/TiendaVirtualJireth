import axios from 'axios';

import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
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

//clear error
export const clearErrors = () => async(dispacth)=>{
    dispacth({
        type: CLEAR_ERRORS
    })
}