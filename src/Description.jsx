export const Description = ( { description } ) => {
    return (
        <div>
            <h2>Описание</h2>
            <p>{description}</p>
            <button onClick={() => console.log('Подробнее')}>Подробнее</button>
        </div>
    )
}