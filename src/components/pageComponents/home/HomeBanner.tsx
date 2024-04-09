import banner1 from '../../../assets/products/banner1.jpeg'
import banner2 from '../../../assets/products/banner2.jpeg'
import {createEffect, createSignal} from "solid-js";

export default function HomeBanner(){
    const posters = [banner1, banner2]
    const [viewing, setViewing] = createSignal(0)

    createEffect(()=>{
        const roll = setInterval(()=>{
            if(viewing() < posters.length-1) setViewing(viewing()+1)
            else setViewing(0)
        }, 5000)
        return ()=>clearInterval(roll)
    }, [])

    return (
        <div class={"w-full h-[50vh] bg-primary-800 rounded-lg"} >
            <img
                src={posters[viewing()]} alt={'banner'} loading={'lazy'}
                class={'w-full h-full object-cover rounded-lg object-center'}
            />
        </div>
    )
}

