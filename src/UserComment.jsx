export const UserComment = ( { author, text } ) => {
    return (
        <div>
            <h3>{author}</h3>
            <p>{text}</p>
        </div>
    )
}