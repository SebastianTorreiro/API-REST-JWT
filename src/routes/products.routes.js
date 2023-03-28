import { Router } from 'express'
import {createProduct, getProducts, getProductsById, updateProductById, deleteProductById} from '../controllers/products.controller'
import { verifyToken } from '../middlewares'
// import * as productCtrl from  '../controllers/products.controller' 
//  productCtrl.function
import app from '../app'

const router = Router()


router.get('/',getProducts)

router.post('/', verifyToken, createProduct)

router.get('/:id', getProductsById)

router.put('/:id', verifyToken,  updateProductById)

router.delete('/:id', verifyToken, deleteProductById)




export default router