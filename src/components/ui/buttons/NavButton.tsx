import { JSX, JSXElement} from "solid-js";
import {useMatch} from "@solidjs/router";
import {IconTypes} from "solid-icons";
// import {JSX} from "solid-js/h/jsx-runtime";

interface props extends JSX.AnchorHTMLAttributes<HTMLAnchorElement>{
    icon?: IconTypes
}

export default function NavButton({...rest}:props):JSXElement{
    const match = useMatch(()=>rest.href??"")
    return (
        <a
            {...rest}
            color={"#F96900"}
            class={`${match()?"text-accent":"text-black"} flex justify-around`}
        >
            {/*{rest.icon && <rest.icon color={match()?"#393DFF":"black"} class={''} />}*/}
            {rest.icon && <rest.icon color={match()?"#F96900":"black"} class={''} />}
            {rest.children}
        </a>
    )
}

