import { useState } from 'react';
import { BuyModalWindow } from './BuyModalWindow';

export const Delivery = ( { delivery } ) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <p><span>Доставка: </span>{delivery}</p>
            <button onClick={() => setIsOpen(!isOpen)}>Купить</button>
            <BuyModalWindow isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    )
}