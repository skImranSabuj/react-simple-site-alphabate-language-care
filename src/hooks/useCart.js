import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = (courses) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = getStoredCart();
        if (courses.length) {
            const storedCart = [];
            for (const id in savedCart) {
                const addedProduct = courses.find(product => product.id === id);

                if (addedProduct) {
                    const quantity = savedCart[id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart)
        }
    }, [courses]);
    // console.log(cart)
    return [cart, setCart];
};

export default useCart;