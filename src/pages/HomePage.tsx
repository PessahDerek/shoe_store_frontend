import HomeBanner from "../components/pageComponents/home/HomeBanner.tsx";
import HomeList from "../components/general/HomeList.tsx";
import {shoes} from "../dummyData/shoes.ts";
import {BsFire} from "solid-icons/bs";


export default function HomePage() {

    return (
        <div class={'page'}>
            <div class={"w-[80%] m-auto"}>
                <HomeBanner/>
                <HomeList
                    list={shoes}
                    title={(<h1>Trending <BsFire/></h1>)}
                    path_to_all={"/trending"}
                />
                <HomeList
                    list={shoes}
                    title={(<h1>Unisex</h1>)}
                    path_to_all={"/unisex"}
                />
                <HomeList
                    list={shoes}
                    title={(<h1>Mens'</h1>)}
                    path_to_all={"/men"}
                />
                <HomeList
                    list={shoes}
                    title={(<h1>Women's</h1>)}
                    path_to_all={"/women"}
                />
                <HomeList
                    list={shoes}
                    title={(<h1>Kid's</h1>)}
                    path_to_all={"/kids"}
                />
            </div>
        </div>
    )
}

