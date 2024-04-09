import {For, useContext} from "solid-js";
import {CartContext} from "../contexts/CartContextProvider.tsx";
import {Cart} from "../vite-env";
import {commarise} from "../libs/functions.ts";
import {BsTrash} from "solid-icons/bs";
import Button from "../components/ui/buttons/Button.tsx";


export default function CartPage() {
    const {myCart, removeFromCart} = useContext(CartContext);

    return (
        <div class={'page justify-around'}>
            <div class={"w-lvw max-w-lg min-w-[300px] bg-primary-400 rounded-lg p-2 shadow-lg m-auto"}>
                <table class={'cart-table'}>
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        <For each={myCart()}>
                            {
                                (item: Cart, index) =>
                                    <tr>
                                        <td>{index() + 1}</td>
                                        <td>{item.product.name}</td>
                                        <td>{item.count}</td>
                                        <td>{item.product.price}</td>
                                        <td>{commarise(item.count * item.product.price)}</td>
                                        <td>
                                            <button
                                                onClick={() => removeFromCart(item.productId)}
                                                class={'icon-btn m-auto'}
                                            >
                                                <BsTrash/>
                                            </button>
                                        </td>
                                    </tr>
                            }
                        </For>
                    }
                    <tr>
                        <td>.</td><td>.</td><td></td><td>.</td><td>{
                        myCart().reduce((acc: number, curr: Cart)=> acc+(curr.count * curr.product.price),0)
                    }</td><td>.</td>
                    </tr>
                    </tbody>
                </table>
                <Button text={"Purchase"}/>
            </div>
        </div>
    )
}

