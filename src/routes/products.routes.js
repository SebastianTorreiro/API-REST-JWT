import {Router} from 'express'
import * as productsController from '../controllers/products.controller'

const router = Router();

router.get('/', productsController.getProducts)

router.get('/user', productsController.getUsers)

router.get('/comments', productsController.getComments)



router.post('/', productsController.createProduct)

router.post('/comment', productsController.createComment)

router.post('/user', productsController.createUser)


// router.get('/:productId', productsController.getProductById)


router.delete('/comment/:id', productsController.deleteComment)

router.put('/price/:id', productsController.updatePrice)

router.put('/:id', productsController.updateComment)

router.put('/stock/:id', productsController.updateStock)

router.put('/add-to-cart/:id',productsController.addToCart)

router.get('/cart', productsController.getCart)

router.delete('/cart/:id', productsController.deleteCart)

router.delete('/cart-product/:id', productsController.removeFromCart)




// router.delete('/delete', productsController.deleteProducts)


 
// "_id": "62ebdaca3e8510fb985bf6cc"  62ebdaf03e8510fb985bf6ce removeFromCart 62ebdaf03e8510fb985bf6ce



export default router