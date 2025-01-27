import { useEffect,useState } from "react"
import axios from 'axios'

const useApi=(url)=>{
    var [post,setPost]=useState([])
    useEffect(()=>{
        axios.get(url).then((res)=>{
            setPost(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[url])
     return post
}
export default useApi