import Post from "./components/post.jsx"

const posts = [
    {
        "id": "1",
        "startTime": "2025-07-11T01:50:13",
        "endTime": "2025-07-11T18:03:49",
        "comments": "So much grass"
    },
    {
        "id": "2",
        "startTime": "2025-07-12T17:50:13",
        "endTime": "2025-07-12T18:03:49",
        "comments": "A concerning amount of grass"
    },
    {
        "id": "3",
        "startTime": "2025-07-13T17:50:13",
        "endTime": "2025-07-13T18:03:49",
        "comments": "TOO much grass"
    }
]

export default function App() {
    const postList = posts.map(post => <Post post={post} key={post.id}/>);

    return (
        <ul>{postList}</ul>
    );
}


