import {createContext, createEffect, createSignal, ParentProps} from "solid-js";
import {AuthContextObject, AuthResponse, LoginDetails, SignupDetails, UserProfile} from "../vite-env";
import {createMutation} from "@tanstack/solid-query";
import api from "../libs/axios.ts";
import {AxiosResponse} from "axios";
import {getErr} from "../libs/functions.ts";
import {createStore} from "solid-js/store";

export const AuthContext = createContext<AuthContextObject>()

export default function AuthContextProvider(props:ParentProps){
    const [profile, setProfile] = createSignal<UserProfile>();

    const getToken = () => localStorage.getItem('sneakerLink');
    const getProfile = () => localStorage.getItem("sneakerProfile")

    // const [loggedIn, setIsLoggedIn] = createSignal(false);

    const handleAuthSuccess = (response: AxiosResponse<AuthResponse>) => {
        const prof = {...response.data.profile}
        setProfile(prof)
        localStorage.setItem('sneakerLink', response.data.token)
        localStorage.setItem("sneakerProfile", JSON.stringify(prof))
    }
    const login = createMutation(()=>({
        mutationKey: ['auth'],
        mutationFn: (loginDetails: LoginDetails):Promise<AxiosResponse<AuthResponse>> =>{
            return new Promise((resolve, reject)=>{
                api.post("/auth/login", loginDetails)
                    .then(response => resolve(response))
                    .catch(err => reject(err))
            })
        },
        onSuccess: handleAuthSuccess,
        onError: err => alert(getErr(err))
    }))
    const signup = createMutation(()=>({
        mutationKey: ['auth'],
        mutationFn: (details: SignupDetails): Promise<AxiosResponse<AuthResponse>> => {
            return new Promise((resolve, reject)=>{
                api.post('/auth/signup', details)
                    .then(response => resolve(response))
                    .catch(err => reject(err))
            })
        },
        onSuccess: handleAuthSuccess,
        onError: err => alert(getErr(err))
    }))


    const [store, setStore] = createStore<AuthContextObject>({
        "profile": profile(),
        "signup": signup,
        "login": login,
        "loggedIn": false
    })


    createEffect(()=>{
        const profileString = getProfile()
        setProfile(()=>profileString? ({...JSON.parse(profileString)}) : null)
        setStore(prev => ({...prev, profile: profile(), loggedIn: (!!getToken() && !!getProfile())}))
        console.log("here...", store)
    }, profile())

    return (
        <AuthContext.Provider value={store}>
            {props.children}
        </AuthContext.Provider>
    )
}

