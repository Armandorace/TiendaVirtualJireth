import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/productActions'
import { useAlert } from 'react-alert'

export const ProductList = () => {

    const { loading, productos, error } = useSelector(state => state.products) //loading , productos, error
    const alert = useAlert();

    const dispatch = useDispatch();
    useEffect(() => {
        if (error) {
            return alert.error(error)
        }

        dispatch(getProducts());
        //alert.success("Ok") sale el mensaje ok//escribimos para llamar error alert.error("error"))
    }, [dispatch])
    const setProduct=()=>{
        const data={
            columns:[
                {
                    label:"Nombre",
                    field: "nombre",
                    sort: "asc"
                },
                {
                    label:"Precio",
                    field: "precio",
                    sort: "asc"
                },
                {
                    label:"Inventario",
                    field: "inventario",
                    sort: "asc"
                },
                {
                    label:"Vendedor",
                    field: "vendedor",
                    sort: "asc"
                },
            ],
            rows:[]
        }
        productos.forEach(producto =>{
            data.rows.push({
                nombre:producto.nombre,
                precio:`$${producto.precio}`,
                inventario:producto.inventario,
                vendedor:producto.vendedor,
            })
        })
        return data;
    }
    return (
        <div>ProductList</div>
    )
}
