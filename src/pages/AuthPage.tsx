import {createSignal, JSX, useContext} from "solid-js";
import Button from "../components/ui/buttons/Button.tsx";
import {CgLogIn, CgLogOut} from "solid-icons/cg";
import {AuthContext} from "../contexts/AuthContextProvider.tsx";
import {LoginDetails, SignupDetails} from "../vite-env";


export default function AuthPage() {
    const [isLogin, setIsLogin] = createSignal(false)
    const auth = useContext(AuthContext)
    /**
     * EventHandlerUnion<HTMLFormElement, Event & {     submitter: HTMLElement; }>
     * */
    const handleSubmit: JSX.EventHandlerUnion<HTMLFormElement, SubmitEvent> = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        let data = {};
        form.forEach((val, key)=>{
            Object.assign(data, {[key]:val.toString()})
        })
        if(isLogin()) auth?.login.mutate(data as LoginDetails)
        else auth?.signup.mutate(data as SignupDetails)
    }

    return (
        <div class={'page flex'}>
            <form
                onSubmit={handleSubmit}
                class={'m-auto min-w-[30%] grid gap-2 bg-primary-400 p-2 shadow-sm'}>
                <h2 class={'text-[2vw] font-bold'}>{isLogin() ? "Login" : "Signup"}</h2>
                {!isLogin() &&<>
                    <input
                        placeholder={'First Name'}
                        name={"firstName"}
                    />
                    <input
                        placeholder={'Last Name'}
                        name={"lastName"}
                    />
                    <input
                        placeholder={'Phone'}
                        name={"phone"}
                    />
                    <input
                        placeholder={'Email'}
                        name={"email"}
                    />
                </>}
                {isLogin() &&
                    <input
                        placeholder={'Name/Email/Phone'}
                        name={"identifier"}
                    />}
                <input
                    placeholder={'Password'}
                    name={"password"}
                />
                {!isLogin() &&
                    <input
                        placeholder={'Confirm'}
                        name={"confirmPassword"}
                    />}
                <Button
                    type={'submit'}
                    text={isLogin()?"Login":"Signup"}
                    icon={isLogin()?CgLogIn:CgLogOut}
                    spin={auth?.login.isPending || auth?.signup.isPending}
                    disabled={auth?.login.isPending || auth?.signup.isPending}
                />
                <Button
                    text={(isLogin()?"Signup ":"Login ")+"instead?"}
                    onClick={()=>setIsLogin(!isLogin())}
                    kind={'outline'}
                    disabled={auth?.login.isPending || auth?.signup.isPending}
                />
            </form>
        </div>
    )
}

