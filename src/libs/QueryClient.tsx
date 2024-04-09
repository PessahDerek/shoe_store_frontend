import {JSXElement} from "solid-js";
import {QueryClient, QueryClientProvider} from "@tanstack/solid-query";


const queryClient = new QueryClient()

interface props {
    children: JSXElement
}

export default function QueryClientWrapper(prop: props){

    return (
        <QueryClientProvider client={queryClient} >
            {prop.children}
        </QueryClientProvider>
    )
}

