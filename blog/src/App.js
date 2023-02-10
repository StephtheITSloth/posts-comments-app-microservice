import Posts from './Posts'
import PostList from './PostList'

const App = () => {
    return ( 
        <div className='container'>
            <h1>Create Post</h1>
            <Posts />
            <hr />
            <PostList />
            <hr />
        </div>
     );
}
 
export default App;