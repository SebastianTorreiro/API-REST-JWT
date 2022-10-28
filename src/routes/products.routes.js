import { Router } from 'express'
import {createProduct, getProducts, getProductsById, updateProductById, deleteProductById} from '../controllers/products.controller'
// import * as productCtrl from  '../controllers/products.controller' 
//  productCtrl.function
import app from '../app'

const router = Router()


router.get('/', getProducts)

router.post('/', createProduct)

router.get('/:id', getProductsById)

router.put('/:id', updateProductById)

router.delete('/:id', deleteProductById)




export default router