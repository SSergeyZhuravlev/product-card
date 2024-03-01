import { UserComment } from "./UserComment";

export const UserCommentsList = ( { comments, onChangeCommentsCount, isShowAllComments } ) => {
    return (
        <div>
            <ul>
                {
                    comments.map(({ id, author, text }) => (
                        <li key={id}>
                            <UserComment author={author} text={text} />
                        </li>
                    ))
                }
            </ul>
            <button onClick={onChangeCommentsCount}>{ isShowAllComments ? 'Меньше' : 'Больше' }</button>
        </div>
    )
}