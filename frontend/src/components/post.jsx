export default function Post({ post }) {
    const formatDateTime = (time) => {
        const minutes = time.getMinutes();
        const hours = time.getHours()
        const zeroPaddedMinutes = minutes < 10 ? '0' + minutes.toString() : minutes;
        const timePeriod = hours < 12 ? 'AM' : 'PM'; 
        const timeAdjustedHours = hours % 12 === 0 ? 12 : hours % 12;

        return `${time.toLocaleDateString()} ${timeAdjustedHours}:${zeroPaddedMinutes} ${timePeriod}`;  
    }
    
    return (
        <li>
            <p>Start: {formatDateTime(new Date(post.startTime))}</p>
            <p>End: {formatDateTime(new Date(post.endTime))}</p>
            <p>Comments: {post.comments}</p>
        </li>
    );
}