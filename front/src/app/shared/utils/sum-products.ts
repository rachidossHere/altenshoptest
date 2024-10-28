import { Product } from "../models";

export const sumProducts = (products: Product[]) => 
    products.reduce((acc: number, curr) => acc + curr.price * (curr.quantity || 1), 0);