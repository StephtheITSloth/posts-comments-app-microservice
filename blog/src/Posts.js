import React, {useState} from 'react'
import axios from 'axios'

const Posts = () => {
    const [title, setTitle] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:4000/posts',{title})
        setTitle('')
    }
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group" >
                    <label>Title</label>
                    <input className='form-control' value={title} onChange={(e) => setTitle(e.target.value) } type='text'></input>
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
     );
}
 
export default Posts;