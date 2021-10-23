import { usePhotoFetchPull } from "../PhotoFetch";
import { PhotoCard } from "./PhotoCard";

export const PhotoFeeds = ()=>{

    const {photos} = usePhotoFetchPull();

    return (<>
    <div className="flex flex-wrap">
        {photos.map((item)=>(<PhotoCard name={item.user.name} location={item.user.location} src={item.user.profile_image.large} />))}
    </div>
    </>);
}