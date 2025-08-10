import Post from './components/post.jsx'
import { useEffect, useState} from 'react';

export default function App() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8080/grassSessions')
        .then(res => res.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err.message));
    }, []);

    // console.log(posts);
    const postList = posts.map(post => <Post post={post} key={post.id}/>);

    return (
        <ul>{postList}</ul>
    );
}


