import {createContext, createEffect, createMemo, createSignal, ParentProps} from "solid-js";
import {createQuery} from "@tanstack/solid-query"
import {shoes} from "../dummyData/shoes.ts";
import {ProductsFromResponse} from "../vite-env";

export const ProductsContext = createContext<{products:ProductsFromResponse}>({
    products: {}
});


export default function ProductsContextProvider(props:ParentProps){
    const {
        error, failureReason
    }  = createQuery(()=>({
        queryKey: ['products'],
        queryFn: ():Promise<ProductsFromResponse>=>new Promise((resolve, reject)=>{
            fetch("http://localhost:5000/api/products", {
                method: "GET",
            })
                .then(result=>result.json())
                .then(result => resolve(result as ProductsFromResponse))
                .catch(err => {
                    reject(err)
                })
        })
    }))

    createEffect(()=>{
        console.log("fetch...")
        if(error ) {
            alert(failureReason)
            console.log("hey: ", failureReason)
        }
    }, [error])
    let [value, setValue] = createSignal<ProductsFromResponse>({})

    // createEffect(()=>{
    //     [...new Set(shoes.map(f => f.type))].forEach(key => {
    //         let group = {[key??"*"]:shoes.filter(f=> f.type === key)}
    //         setValue(prev => ({...prev, ...group}))
    //         console.log(value())
    //     })
    // }, [value])
    const show = createMemo(()=>{
        [...new Set(shoes.map(f => f.type))].forEach(key => {
            let group = {[key??"*"]:shoes.filter(f=> f.type === key)}
            setValue(prev => ({...prev, ...group}))
        })
        return value();
    }, [])

    return (
        <ProductsContext.Provider value={{products: show()}} >
            {props.children}
        </ProductsContext.Provider>
    )
}

