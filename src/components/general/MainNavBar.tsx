import logo from "../../assets/logo.png"
import NavButton from "../ui/buttons/NavButton.tsx";
import {AiFillHome} from "solid-icons/ai";
import {FaSolidBaby} from "solid-icons/fa";
import {IoCart, IoMan, IoWoman} from "solid-icons/io";
import {useContext} from "solid-js";
import {CartContext} from "../../contexts/CartContextProvider.tsx";
import {VsAccount} from "solid-icons/vs";


export default function MainNavBar() {
    const {myCart} = useContext(CartContext);
    return (
        <nav class={'w-full flex justify-center h-[70px] bg-primary-600 sticky top-0 z-40'}>
            <span class={"w-[80%] m-auto flex justify-between"}>
                <a href={"/"} class={'logo leading-normal'}>
                    {/*<img src={logo} alt={"logo"}/>*/}
                    <p class={"truncate"}>Sneaker Link</p>
                </a>
                <span class={"flex justify-around leading-[70px] gap-2"}>
                    <NavButton href={"/"} icon={AiFillHome}>
                        Home
                    </NavButton>
                    <NavButton href={"/products/men"} icon={IoMan}>
                        Men
                    </NavButton>
                    <NavButton href={"/products/ladies"} icon={IoWoman}>
                        Ladies
                    </NavButton>
                    <NavButton href={"/products/kids"} icon={FaSolidBaby}>
                        Kids
                    </NavButton>
                    <NavButton href={"/cart"} icon={IoCart}>
                        Cart
                        ({myCart().length})
                    </NavButton>
                    <NavButton href={'/account'} icon={VsAccount} >
                        Account
                    </NavButton>
                </span>
            </span>
        </nav>
    )
}

