export default function Post({ post }) {
    return (
        <li>
            <p>{post.startTime}</p>
            <p>{post.endTime}</p>
            <p>{post.comments}</p>
        </li>
    );
}