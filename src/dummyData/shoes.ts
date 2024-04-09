import trainer from '../assets/products/trainer1.webp'
import bounce from '../assets/products/adidasBounce.webp'
import dunk from '../assets/products/dunkLowPanda.jpg'
import gucci from '../assets/products/gucci.webp'
import millen from '../assets/products/ozMillen.webp'
import {Product} from "../vite-env";


export const shoes: Product[] = [
    {id: '1', price: 4000, images: [bounce, trainer], make: "Adidas", name: "Bounce", description: "Best", type: "unisex"},
    {id: '2', price: 7200, images: [trainer], make: "Nike", name: "Trainer", description: "Best", type: "unisex"},
    {id: '3', price: 2500, images: [dunk], make: "Nike", name: "Dunk", description: "Best", type: "unisex"},
    {id: '4', price: 3800, images: [gucci], make: "Gucci", name: "Ace", description: "Best", type: "unisex"},
    {id: '4', price: 3800, images: [millen], make: "Adidas", name: "OzMillen", description: "Best", type: 'ladies'},
]
