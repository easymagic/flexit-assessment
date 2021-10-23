import React, { useEffect, useState } from 'react';
//https://api.unsplash.com/photos/?client_id=_VfYbrUdiq0MygBTAVZBVq59Uyz_9jCu0iN4-ofqmp8
const url = 'https://api.unsplash.com/photos/?client_id=_VfYbrUdiq0MygBTAVZBVq59Uyz_9jCu0iN4-ofqmp8';
export const usePhotoFetchPull =()=>{
   
    const [photos,setPhotos] = useState([]);

    useEffect(async ()=>{
              
        let response = await fetch(url,{
            method:'GET'
        }).then(res=>res.json());

        setPhotos(response);
        console.log(photos,response);

    },[]);

    return {photos};

}