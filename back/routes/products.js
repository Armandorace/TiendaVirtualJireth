const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController") // traemos la respuesta json desde el controlador

router.route('/productos').get(getProducts) // Establecemos desde que ruta queeremos ver el getProducts
router.route('/producto/nuevo').post(newProduct);// Establecemos la ruta
router.route('/producto/:id').get(getProductById);// Ruta para consultar por id
router.route('/producto/:id').put(updateProduct);//Creacion de la ruta de actualizacion
router.route('/producto/:id').delete(deleteProduct);//Creacion de ruta para eleiminar por id


module.exports=router;