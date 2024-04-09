import './App.css'
import {Route} from "@solidjs/router";
import HomePage from "./pages/HomePage.tsx";
import ProductListing from "./pages/ProductListing.tsx";
import ViewProductPage from "./pages/ViewProductPage.tsx";
import CartPage from "./pages/CartPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";

function App() {

    return (
        <>
            <Route path={"/"} component={HomePage}/>
            <Route path={"/products/:filter"} component={ProductListing}/>
            <Route path={'/products/:filter/:id'} component={ViewProductPage} />
            <Route path={'/cart'} component={CartPage} />
            <Route path={'/account/*'} component={ProfilePage} />
        </>
    )
}

export default App
