/// <reference types="vite/client" />

import {Accessor} from "solid-js/types/server/reactive";
import {CreateMutationResult} from "@tanstack/solid-query";
import {AxiosResponse} from "axios";

declare interface Product {
    id: string;
    images: string[];
    make: string;
    name: string;
    price: number;
    discount?: number;
    description: string;
    type?: "unisex" | "men" | "ladies" | "kids" | "official";
}

declare type btnType = "solid" | "secondary" | "outline" | "solid-acc" | "sec-acc" | "out-acc"

declare interface ProductsFromResponse {
    [key: string]:Product[]
}

declare interface Cart {
    product: Product;
    productId: string;
    count: number;
}
declare interface CartContextObject {
    myCart: Accessor<Cart[]>,
    addToCart: (cartItem: Cart) => void;
    removeFromCart: (productId: string) => void;
    editCart: (cartItem: Cart) => void;
    clearCart: ()=>void;
}

declare interface UserProfile {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
}
declare interface LoginDetails {
    identifier: string;
    password: string;
}
declare interface SignupDetails extends UserProfile, LoginDetails{
    identifier: undefined;
    confirmPassword: string;
}
declare interface AuthResponse {
    profile: UserProfile;
    token: string;
}
declare interface AuthContextObject {
    profile?: userProfile;
    // token: string | null;
    loggedIn: Accessor<boolean>;
    // signup: (signupDetails: SignupDetails) => Promise<AuthResponse>;
    signup: CreateMutationResult<AxiosResponse<AuthResponse, any>, Error, SignupDetails, unknown>
    // login: (loginDetails: LoginDetails) => Promise<AuthResponse>
    login: CreateMutationResult<AxiosResponse<AuthResponse, any>, Error, LoginDetails, unknown>
}
