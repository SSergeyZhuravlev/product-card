export const Delivery = ( { delivery } ) => {
    return (
        <div>
            <p><span>Доставка: </span>{delivery}</p>
            <button onClick={() => console.log('Купить')}>Купить</button>
        </div>
    )
}