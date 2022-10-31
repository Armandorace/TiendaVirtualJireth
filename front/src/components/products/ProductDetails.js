import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from "../layout/MetaData"
import { useParams } from 'react-router-dom'
import { clearErrors, getProductsDetails } from '../../actions/productActions'
import { useAlert } from 'react-alert'

export const ProductDetails = () => {
  const {loading, product, error} = useSelector(state =>state.productDetails)
  const {id} =useParams();
  const dispatch= useDispatch();
  const alert= useAlert();
  
  useEffect(() => {
    dispatch(getProductsDetails(id))
    if (error){
      alert.error(error);
      dispatch(clearErrors())
    }

  }, [dispatch, alert, error, id])
 

  return (
    <Fragment>
        <MetaData title="Camaras de Seguridad"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                <img src="../../images/productos/camarasdomoybala.jpeg" alt="Imagen_producto" height="450" width="450" ></img>
            </div>
            <div className='col-12 col-lg-5 mt-5'>
                <h3>Camaras de Seguridad para el hogar</h3>
                <p id="product_id">Product #3253252</p>
            </div>
        </div>
    </Fragment>
  )
}
 