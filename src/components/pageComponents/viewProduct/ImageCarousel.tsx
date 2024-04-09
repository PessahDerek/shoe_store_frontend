import {createSignal, JSX} from "solid-js";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "solid-icons/ai";

interface prop extends JSX.HTMLAttributes<HTMLDivElement> {
    images: string[]
}

export default function ImageCarousel(props: prop) {
    const [viewing, setViewing] = createSignal(0);

    const scroll = (left: boolean) => {
        if (left) setViewing((viewing() > 0) ? (viewing() - 1) : (props.images.length - 1))
        else setViewing((viewing() < props.images.length - 1)
            ? viewing() + 1 : 0)
        console.log(viewing(), "-- ", props.images)
    }

    return (
        <div class={'flex-1 bg-primary-400 min-w-[300px] rounded-lg'}>
            <div class={"w-full h-[80vmin]"}>
                <img src={props.images[viewing()]} alt={""}
                     loading={"lazy"}
                     class={'w-full h-full object-contain'}
                />
            </div>
            {props.images.length > 1 && <>
                <button
                    onClick={() => scroll(true)}
                    class={'icon-btn absolute top-0 bottom-0 mt-auto mb-auto left-0s'}>
                    <AiOutlineArrowLeft/>
                </button>
                <button
                    onClick={() => scroll(false)}
                    class={'icon-btn absolute top-0 bottom-0 mt-auto mb-auto right-0'}>
                    <AiOutlineArrowRight/>
                </button>
            </>
            }
        </div>
    )
}

