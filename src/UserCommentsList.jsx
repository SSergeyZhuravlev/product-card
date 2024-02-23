import { UserComment } from "./UserComment";

export const UserCommentsList = ( { comments } ) => {
    return (
        <ul>
            {
                comments.map(({ id, author, text }) => (
                    <li key={id}>
                        <UserComment author={author} text={text} />
                    </li>
                ))
            }
        </ul>
    )
}