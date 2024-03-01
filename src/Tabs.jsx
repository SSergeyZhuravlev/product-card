import { useState } from 'react';
import { Description } from './Description';
import { UserCommentsList } from './UserCommentsList';


export const Tabs = ( { tabs } ) => {
    const [activeTab, setActiveTab] = useState(0);
    const [isShowAllDescription, setShowAllDescription] = useState(false);
    const [commentsCount, setShowAllComments] = useState(3);
    const [isShowAllComments, setIsShowAllComments] = useState(false);

    return (
        <>
            <button onClick={() => setActiveTab(0)}>Описание</button>
            <button onClick={() => setActiveTab(1)}>Комментарии</button>
            <div>
                {
                    activeTab === 0 ? 
                    <Description 
                        description={tabs[0]} 
                        isShowAllDescription={isShowAllDescription} 
                        onChangeIsShowAllDescription={() => setShowAllDescription(!isShowAllDescription)} /> : 
                    <UserCommentsList 
                        comments={tabs[1].slice(0, commentsCount)}
                        isShowAllComments={isShowAllComments}
                        onChangeCommentsCount={() => {
                            setShowAllComments(commentsCount < tabs[1].length ? tabs[1].length : 3)
                            setIsShowAllComments(!isShowAllComments)
                        }} />
                }
            </div>
        </>
    )
}