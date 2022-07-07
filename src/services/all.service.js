import {axiosInstance} from "./axios.service";
import {urls} from "../const";

const allService={
    getTodos:()=>axiosInstance(urls.todos),
    getAlbums:()=>axiosInstance(urls.albums),
    getComments:(page,_limit=5)=>axiosInstance(urls.comments,{params:{
            _start:(page-1)*_limit,
            _limit
        }
    }),
    getPostsById:(id)=>axiosInstance(`${urls.posts}/${id}`)
}
export {allService}