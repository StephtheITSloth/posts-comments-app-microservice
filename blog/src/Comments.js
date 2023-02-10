import React, {useState} from 'react'
import axios from 'axios'

const Comments = ({postId}) => {
    const [comment, setComment] = useState('')

const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post(`http://localhost:4001/posts/${postId}/comments`,{
        comment
    })
    setComment('')
}


    return ( <div>
        <h1>Create Comments</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Content</label>
                <input className='form-control' onChange={(e) => setComment(e.target.value)} value={comment} type='text'/>
            </div>
            <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
    </div>);
}
 
export default Comments;