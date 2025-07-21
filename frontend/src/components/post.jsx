export default function Post({ post }) {
    const startTime = new Date(post.startTime);
    const formattedStartTime = `${startTime.toLocaleDateString()} ${startTime.getHours()}:${startTime.getMinutes()}`;
    const endTime = new Date(post.endTime);
    const formattedEndTime = `${endTime.toLocaleDateString()} ${endTime.getHours()}:${endTime.getMinutes()}`;

    return (
        <li>
            <p>Start: {formattedStartTime}</p>
            <p>End: {formattedEndTime}</p>
            <p>Comments: {post.comments}</p>
        </li>
    );
}