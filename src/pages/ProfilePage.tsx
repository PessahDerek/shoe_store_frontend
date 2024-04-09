import {createEffect, createMemo, Match, Switch, useContext} from "solid-js";
import {AuthContext} from "../contexts/AuthContextProvider.tsx";
import AuthPage from "./AuthPage.tsx";
import {UserProfile} from "../vite-env";
import {CgProfile} from "solid-icons/cg";
import {RiUserFacesAccountCircleFill} from "solid-icons/ri";


interface props {
    profile: UserProfile;
}
function ProfilePage({profile}:props){

    return (
        <div class={'page flex'} >
            <div class={" p-2 shadow-sm profile m-auto bg-white rounded-lg"} >
                <div class={"person"}>
                    <RiUserFacesAccountCircleFill class={'person-icon'} />
                    <span class={"details"}>
                        <input value={profile.firstName} />
                        <input value={profile.lastName} />
                        <input value={profile.email} />
                        <input value={profile.phone} />
                    </span>
                </div>
                <div class={'orders'}>

                </div>
            </div>
        </div>
    )
}

export default function Profile(){
    const auth = useContext(AuthContext);
    const showAuth = createMemo(()=>{
        const x = !auth || !auth.loggedIn;
        console.log("react: ", x)
        return x
    }, !!auth?.loggedIn)

    createEffect(()=>console.log("trace: ", showAuth(), auth))
    return (
        <Switch>
            <Match when={showAuth()}>
                <AuthPage />
            </Match>
            <Match when={!showAuth()}>
                <ProfilePage profile={auth?.profile} />
            </Match>
        </Switch>
    )
}

