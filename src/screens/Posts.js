import React,{useEffect, useState} from 'react'
import axios from "axios"

const Posts = () => {

    const [posts,setPosts] = useState([])
    
    useEffect(() => {
     const fetchData = async() =>{
         const result = await axios('https://jsonplaceholder.typicode.com/posts')
         setPosts(result.data)
         console.log(result.data);
     }
     fetchData()
    }, [])

    return (
        <div title="testDiv">
           {posts.length && posts.map(post => (
               <div key={post.id} style={{margin:"5px 20px",backgroundColor:"#ccc",padding:"15px"}}>
                   <h2>{post.title}</h2>
                   <p>{post.body}</p>
               </div>
           ))} 
        </div>
    )
}

export default Posts
