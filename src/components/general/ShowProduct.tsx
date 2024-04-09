import {JSX} from "solid-js";
import {commarise} from "../../libs/functions.ts";
import {useNavigate} from "@solidjs/router";
import {Product} from "../../vite-env";


interface props extends JSX.HTMLAttributes<HTMLDivElement> {
    product: Product;
}

export default function ShowProduct({product, ...rest}: props) {
    const navigate = useNavigate();

    return (
        <div
            {...rest}
            class={"show-product "}
            onClick={()=>navigate(`/products/${product.type}/${product.id}`)}
        >
            <img src={product.images[0]} alt={product.name}/>
            <div>
                <span class={"flex"}>
                    <h2 class={''}>
                        Ksh. {commarise(product.price)}
                    </h2>
                    {product.discount && <h2>{product.discount}</h2>}
                </span>
                <p>{product.make} {product.name}</p>
            </div>
        </div>
    )
}

