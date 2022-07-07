import React, {useEffect, useState} from 'react';
import {allService} from "../../services";
import {Album} from "../../components";

const AlbumsPage = () => {
    const [albums,setAlbums] = useState([]);
    useEffect(()=>{
        allService.getAlbums().then(({data})=>{
            setAlbums([...data])})
    },[])
    return (
        <div>
             {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export {AlbumsPage};