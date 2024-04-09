/* @refresh reload */
import {render} from 'solid-js/web'

import './index.css'
import App from './App'
import {Router} from "@solidjs/router";
import MainNavBar from "./components/general/MainNavBar.tsx";
import Footer from "./components/general/Footer.tsx";
import QueryClientWrapper from "./libs/QueryClient.tsx";
import ProductsContextProvider from "./contexts/ProductsContextProvider.tsx";
import CartContextProvider from "./contexts/CartContextProvider.tsx";
import AuthContextProvider from "./contexts/AuthContextProvider.tsx";

const root = document.getElementById('root')

const RootApp = (props?: any) => {
    return (
        <QueryClientWrapper>
            <ProductsContextProvider>
                <AuthContextProvider>
                    <CartContextProvider>
                        <div class={'space-y-2'}>
                            <MainNavBar/>
                            {props.children}
                            <Footer/>
                        </div>
                    </CartContextProvider>
                </AuthContextProvider>
            </ProductsContextProvider>
        </QueryClientWrapper>
    )
}

// render(() => <App />, root!)
render(() => <Router root={RootApp}>
    {App()}
</Router>, root!)
