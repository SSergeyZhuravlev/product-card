import './Description.css';

export const Description = ( { description, isShowAllDescription, onChangeIsShowAllDescription } ) => {
    return (
        <div>
            <h2>Описание</h2>
            <p className="description">{
                isShowAllDescription ? description : `${description.slice(0, 200)}...`
            }</p>
            <button onClick={() => onChangeIsShowAllDescription()}>{
                isShowAllDescription ? 'Скрыть' : 'Подробнее'
            }</button>
        </div>
    )
}