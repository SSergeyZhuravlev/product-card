import { useState } from 'react';
import { Description } from './Description';
import { UserCommentsList } from './UserCommentsList';


export const Tabs = ( { tabs } ) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <button onClick={() => setActiveTab(0)}>Описание</button>
            <button onClick={() => setActiveTab(1)}>Комментарии</button>
            <div>
                {
                    activeTab === 0 ? <Description description={tabs[0]} /> : <UserCommentsList comments={tabs[1]} />
                }
            </div>
        </>
    )
}