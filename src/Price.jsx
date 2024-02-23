import { useState } from "react"
import { Counter } from "./Counter"

export const Price = ( { price, oldPrice, initValue } ) => {
    const [value, setValue] = useState(initValue || 1);

    return (
        <>
            <p>
                { price > oldPrice ? <b>{price} ₽</b> : <span> <del>{oldPrice} ₽</del> <b>{price * value} ₽</b> </span> }
            </p>
            <Counter value={value} onChange={setValue} initValue={initValue} />
        </>
    )
}