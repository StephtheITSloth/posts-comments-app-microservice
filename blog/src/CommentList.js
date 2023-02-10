import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CommentList = ({postId}) => {
    const [comments, setComments] = useState([])

    const fetchComments = async () => {
        const res =  await axios.get(`http://localhost:4001/posts/${postId}/comments`)
        setComments(res.data)
    }

    useEffect(() => {
        fetchComments()
    }, [])

    console.log(comments)

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>
            {comment.content}
        </li>
    })
    return (<div>
        <h3>List Of Comment</h3>
        <ul>
            {renderedComments}
        </ul>
    </div>);
}
 
export default CommentList;