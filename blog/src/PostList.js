import axios from 'axios'
import React, {useState, useEffect} from 'react'

const PostList = () => {
    const [posts,setPosts] = useState({})

    const fetchPost = async () => {
        const res = await axios.get('http://localhost:4000/posts')
        setPosts(res.data)
    }
    

    useEffect(() => {
        fetchPost()
    },[])

    const formatPosts = Object.values(posts).map(post => {
        return <div className='card' key={post.id} style={{ width:'30%', marginBottom: '20px'}}>
            <div className='card-body'>
                <h3>{post.title}</h3>
            </div>
        </div>
    })
    console.log(posts)
    return ( 
        <div>
        <h1>Post List</h1>
        <ul>
        {formatPosts}
        </ul>
        </div>
     );
}
 
export default PostList;