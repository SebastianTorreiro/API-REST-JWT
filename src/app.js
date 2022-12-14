import express from "express";
import morgan from "morgan";
import pkg from '../package.json'
import { createRoles } from "./libs/initialSetup";

import productsRoutes from './routes/products.routes'
import authRoutes from './routes/auth.routes'
const app = express();
createRoles();
app.set('pkg', pkg)
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res )=>{
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        name: app.get('pkg').name
    })
})

app.use('/api/products',productsRoutes)
app.use('/api/auth',authRoutes)

export default app