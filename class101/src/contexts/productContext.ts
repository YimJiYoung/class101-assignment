import { createContext } from 'react';
import Product from '../types/product';

const productContext = createContext<Product[]>([]);

export default productContext;
