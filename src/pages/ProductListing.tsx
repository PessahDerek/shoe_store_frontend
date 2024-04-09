import {useParams} from "@solidjs/router";
import {createMemo, createSignal, For, useContext} from "solid-js";
import {ProductsContext} from "../contexts/ProductsContextProvider.tsx";
import ShowProduct from "../components/general/ShowProduct.tsx";


export default function ProductListing() {
    const params = useParams();
    const data = useContext(ProductsContext);
    const [viewing, setViewing] = createSignal(10)

    const list = createMemo(() => {
        const key = Object.values(params)[0]??"*"
        return data ? data.products[key] : []
    }, [])

    return (
        <div class={"page"}>
            <div class={"flex w-[90%] m-auto"}>
                <div class={"w-[300px] sticky top-[70px]"}>
                    <input/>

                </div>
                <section class={"flex-1 grid gap-2"}>
                    <div class={"grid grid-cols-2 md:grid-cols-3 gap-4"}>
                        <For each={list()}>
                            {
                                (item) => <ShowProduct product={item}/>
                            }
                        </For>
                    </div>
                    <div>

                    </div>
                </section>
            </div>
        </div>
    )
}

