import React, { useContext, useEffect, useState } from 'react';
import { BaseContext } from './components/BaseContext';
//https://api.unsplash.com/photos/?client_id=_VfYbrUdiq0MygBTAVZBVq59Uyz_9jCu0iN4-ofqmp8
const url = 'https://api.unsplash.com/photos/?client_id=_VfYbrUdiq0MygBTAVZBVq59Uyz_9jCu0iN4-ofqmp8';
const urlSearch = 'https://api.unsplash.com/search/photos/?page=1&client_id=_VfYbrUdiq0MygBTAVZBVq59Uyz_9jCu0iN4-ofqmp8';
export const usePhotoFetchPull =()=>{
   
    const [photos,setPhotos] = useState([]);

    const {searchText,setSearchText} = useContext(BaseContext);



    useEffect(async ()=>{

        if (searchText != ''){
            let response = await fetch(urlSearch + '&query=' + searchText,{
                method:'GET'
            }).then(res=>res.json());
    
            setPhotos(response.results);
            console.log(photos,response);    
            return;
        }
              
        let response = await fetch(url,{
            method:'GET'
        }).then(res=>res.json());

        setPhotos(response);
        console.log(photos,response);

    },[searchText]);

    return {photos};

}