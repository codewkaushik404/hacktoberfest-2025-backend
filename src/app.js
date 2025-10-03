import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes.js';
import seedDB from '../scripts/seed.js';
import errorHandler from './middleware/error-handler.middleware.js';
import wishlistRoutes from './routes/wishlist.route.js';
const app = express();

seedDB();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Welcome to Homepage");
})

// Routes
app.use('/api/products', productRoutes);
app.use('/api/wishlist',wishlistRoutes);
// Middleware
app.use(errorHandler);

export default app

