import { usePhotoFetchPull } from "../PhotoFetch";
import { PhotoCard } from "./PhotoCard";

export const PhotoFeeds = ()=>{

    const {photos} = usePhotoFetchPull();

    return (<>
    <div className="flex flex-wrap">
        {photos.map((item)=>(<PhotoCard src={item.urls.thumb} />))}
    </div>
    </>);
}