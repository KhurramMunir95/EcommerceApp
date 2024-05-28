import { orangeTShirt, blueTShirt, redTShirt, tealTShirt } from "./ItemsImages";

const cartItems = [
    {
        id: 1,
        name: 'Orange T-shirt',
        img: orangeTShirt,
        price: 150,
        count: 0,
        stock: 30,
        available: true,
    },
    {
        id: 2,
        name: 'Blue T-shirt',
        img: blueTShirt,
        price: 120,
        count: 0,
        stock: 60,
        available: true,
    },
    {
        id: 3,
        name: 'Red T-shirt',
        img: redTShirt,
        price: 220,
        count: 0,
        stock: 10,
        available: true,
    },
    {
        id: 4,
        name: 'Teal T-shirt',
        img: tealTShirt,
        price: 300,
        count: 0,
        stock: 15,
        available: true,
    }
]

export default cartItems;