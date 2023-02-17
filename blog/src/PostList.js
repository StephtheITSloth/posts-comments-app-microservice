import axios from 'axios'
import React, {useState, useEffect} from 'react'
import Comments from './Comments'
import CommentList from './CommentList'

const PostList = () => {
    const [posts,setPosts] = useState({})

    const fetchPost = async () => {
        const res = await axios.get('http://localhost:4002/posts')
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
            <div className='card' style={{margin: '8px 16px'}}>
            <CommentList comments={post.comment}/>
            <Comments postId={post.id}/>
            </div>
        </div>
    })
    return ( 
        <div>
        <h1>Post List</h1>
        <ul style={{display: 'flex', }}>
        {formatPosts}
        </ul>
        </div>
     );
}
 
export default PostList;