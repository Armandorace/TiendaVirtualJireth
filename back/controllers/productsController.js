const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const producto= require("../models/productos");
const ErrorHandler = require("../utils/errorHandler");
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));// usurpacion del 

//Ver la lista de productos
exports.getProducts= catchAsyncErrors( async(req,res,next) => {
    const productos = await producto.find();
    if (!productos){
        return next(new ErrorHandler("Informacion no encontrada", 404))
    }    
    res.status(200).json({
        sucess:true,
        count: productos.length,
        productos
    })
})
//Ver un producto por ID

exports.getProductById = catchAsyncErrors ( async (req, res, next)=>{
    const product = await producto.findById(req.params.id)
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    res.status(200).json({
        sucess:true,
        message: "Aqui debajo encuentras informacion sobre tu producto: ",
        product
    })
})

// Update  un producto
exports.updateProduct = catchAsyncErrors ( async (req, res, next)=>{
    let product = await producto.findById(req.params.id)
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
   // Si el objeto si existia, entonces si ejecuta la actualizacion
    product = await producto.findByIdAndUpdate(req.params.id, req.body, {
        new:true, // Valido solo los atributos nuevos o actualizado
        runValidators:true
    });
    //Respondo ok si el producto si se actualizo
    res.status(200).json({
        success:true,
        message:"Producto actualizado correctamente",
        product
    })
})

//eliminar producto
exports.deleteProduct = catchAsyncErrors( async (req, res, next)=>{
    let product = await producto.findById(req.params.id)// Variable de tipo modificable
    if (!product){
        return next(new ErrorHandler("Producto no encontrado", 404))
    }
    await product.remove();//Eliminamos el proceso
    res.status(200).json({
        success:true,
        message:"Producto eliminado correctamente"

    })
})

//Crear nuevo producto /api/productos

exports.newProduct = catchAsyncErrors( async (req,res,next)=> {
    const product = await producto.create(req.body);

    res.status(201).json({
       success: true,
       product 
    })
})



// Hablemos de FETCH
//VER TODOS LOS PRODUCTOS
function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos();
//VER POR ID
function verProductosPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}
//verProductosPorID('634dc6528d993e5501dbb6cb'); //probamos ver productos por id