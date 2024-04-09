import {For, JSXElement} from "solid-js";
import ShowProduct from "./ShowProduct.tsx";
import Button from "../ui/buttons/Button.tsx";
import {useNavigate} from "@solidjs/router";

interface props {
    list: Product[];
    title: JSXElement;
    path_to_all: string;
}

export default function HomeList(prop: props){
    const goto = useNavigate();
    return (
        <div class={"w-full space-y-2"}>
            {prop.title}
            <div class={"w-full h-max grid grid-flow-col hide-scrollbar overflow-auto gap-4"}>
                <For each={prop.list}>
                    {(item, _index) =>
                        <ShowProduct product={item}/>
                    }
                </For>
            </div>
            <Button
                text={"See all"}
                onClick={()=>goto("/products"+prop.path_to_all)}
            />
        </div>
    )
}

