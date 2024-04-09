import {useParams} from "@solidjs/router";
import {createEffect, createMemo, createSignal, JSX, useContext} from "solid-js";
import {ProductsContext} from "../contexts/ProductsContextProvider.tsx";
import ImageCarousel from "../components/pageComponents/viewProduct/ImageCarousel.tsx";
import {commarise} from "../libs/functions.ts";
import {FiMinus, FiPlus} from "solid-icons/fi";
import Button from "../components/ui/buttons/Button.tsx";
import {CartContext} from "../contexts/CartContextProvider.tsx";
import {Cart, Product} from "../vite-env";

const defaultProduct: Product = {
    id: "",
    make: "",
    price: 0,
    name: "",
    description: "",
    images: [],
    type: "unisex",
    discount: 0
}

export default function ViewProductPage() {
    const params = useParams();
    const {products} = useContext(ProductsContext);
    const {myCart, addToCart, removeFromCart, editCart} = useContext(CartContext);

    const product = createMemo(() => {
        const [filter, id] = Object.values(params);
        console.log(Object.keys(params))
        return products[filter].find(p => p.id === id)
    })
    const [cart, setCart] = createSignal<Cart>({
        product: product() ?? defaultProduct,
        productId: product()?.id ?? "",
        count: 1
    })

    const isAdded = createMemo(() =>
        !!myCart().find((c: Cart) => c.productId === cart().productId), [myCart().length])

    const handleChange: JSX.ChangeEventHandler<HTMLInputElement, Event> = (e) => {
        if (parseInt(e.target.value) > 0) setCart(prev => ({...prev, count: parseInt(e.target.value)}))
        if (isAdded()) editCart(cart())
    }

    createEffect(()=>{
        if(isAdded())setCart(prev => ({...prev, count: myCart().find(p => p.count).count}))
    })

    return (
        <div class={"page flex"}>
            {!product() ?
                <div>
                    <h1>Sorry we can't find this product</h1>
                </div> :
                <div class={"w-[90%] rounded-lg flex flex-wrap gap-4 bg-primary-400 m-auto"}>
                    <ImageCarousel images={product()?.images ?? []}/>
                    <div class={"min-w-[300px] p-2 grid gap-2 auto-rows-max"}>
                        <span>
                            <p class={'leading-none'}>{product()?.make}</p>
                            <h1 class={' leading-none'}>{product()?.name}</h1>
                        </span>
                        <article>
                            {product()?.description}
                        </article>
                        <p>Ksh. {commarise(product()?.price ?? 0)}</p>
                        <div class={'add-reduce-quant'}>
                            <button
                                onClick={()=> {
                                    setCart(
                                        prev => ({...prev, count: cart().count > 1 ? prev.count - 1 : 1})
                                    )
                                    editCart(cart())
                                }
                            }
                            >
                                <FiMinus/>
                            </button>
                            <input
                                value={cart().count}
                                onChange={handleChange}
                                type={'number'}
                                min={1}
                            />
                            <button
                                onClick={()=>{
                                    setCart(
                                        prev => ({...prev, count: cart().count+1})
                                    )
                                    editCart(cart())
                                }}
                            >
                                <FiPlus/>
                            </button>
                        </div>
                        <Button
                            text={(!!myCart().find((c: Cart) => c.productId === cart().productId)) ? "Remove from cart" : "Add to cart"}
                            onClick={(!!myCart().find((c: Cart) => c.productId === cart().productId)) ?
                                () => removeFromCart(cart().productId)
                                :
                                () => addToCart(cart())}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

