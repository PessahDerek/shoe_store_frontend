import {JSX} from "solid-js";
import {IconTypes} from "solid-icons";
import {btnType} from "../../../vite-env";
import {CgSpinner} from "solid-icons/cg";


interface props extends JSX.ButtonHTMLAttributes<HTMLButtonElement>{
    text: string;
    kind?: btnType;
    icon?: IconTypes;
    spin?: boolean;
}

export default function Button(prop: props){

    return (
        <button
            class={prop.kind??"solid"}
            {...prop}
            type={prop.type??'button'}
        >
            {prop.spin ? <CgSpinner class={'animate-spin m-auto'} /> : prop.text}
            {prop.icon && <prop.icon class={'text-inherit m-auto'} />}
        </button>
    )
}

