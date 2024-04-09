import {createContext, createEffect, createSignal, ParentProps} from "solid-js";
import {Cart, CartContextObject} from "../vite-env";


// export const CartContext = createContext<CartContextObject>()
export const CartContext = createContext<CartContextObject>({
    myCart: [],
    editCart: (_cartItem)=>{},
    clearCart: ()=>{},
    removeFromCart: (_productId) =>{},
    addToCart: (_cartItem) => {}
})


export default function CartContextProvider(props: ParentProps){
    const [myCart, setMyCart] = createSignal<Cart[]>([])

    createEffect(()=>{
        console.log(myCart().length)
    }, [myCart().length])

    const addToCart = (cartItem: Cart) => {
        const found = myCart().findIndex(f => f.productId === cartItem.productId)
        if(found === -1) {
            let newCart = [...myCart()];
            newCart.push(cartItem)
            setMyCart(newCart);
        } else {
            let new_cart = [...myCart()];
            new_cart[found] = cartItem;
            setMyCart(()=>new_cart);
        }
        console.log(myCart());
    }
    const removeFromCart = (productId: string) => {
        const newCart = myCart().filter(f => f.productId !== productId);
        setMyCart(()=>newCart)
    }

    const editCart = (cartItem: Cart) => {
        let found = [...myCart()].findIndex(c => c.productId === cartItem.productId);
        if(found === -1) return;
        let newCart = [...myCart()];
        newCart[found] = cartItem;
        setMyCart(()=>newCart)
    }
    const clearCart = () => {
        setMyCart(()=>([]))
    }

    return (
        <CartContext.Provider value={{
            myCart: myCart,
            clearCart: clearCart,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            editCart: editCart
        }} >
            {props.children}
        </CartContext.Provider>
    )
}

