import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/product.routes';

const app = express();
app.use(bodyParser.json());
app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});