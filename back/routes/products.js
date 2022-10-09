const express=require("express")
const router=express.Router();

const {getProducts} = require("../controllers/productsController") // traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) // Establecemos desde que ruta queeremos ver el getProducts

module.exports=router;