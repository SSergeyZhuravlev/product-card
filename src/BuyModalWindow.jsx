import { useEffect, useState } from "react";
import './BuyModalWindow.css';

export const BuyModalWindow = ( { isOpen, onClose } ) => {
    const [name, setName] = useState('');
    const [tel, setTel] = useState('');
    const [adress, setAdress] = useState('');
    const isBtnEnabled = name && tel && adress;
    
    const handlerEsc = (event) => { if (event.keyCode === 27) onClose() };

    useEffect(() => {
        document.addEventListener('keydown', handlerEsc)

        return () => document.removeEventListener('keydown', handlerEsc);
    });

    useEffect( () => { isOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible' } );

    return isOpen ? (
        <div className="form-wrapper">
            <button className="form-close-btn" onClick={onClose}>X</button>
            <form className="form" onSubmit={(event) => event.preventDefault()}>
                <div className="form-inpur-wrapper">
                    <span className="form-input-label">Имя</span>
                    <input value={name} className="form-input" type="text" onChange={(event) => setName(event.target.value)} />
                </div>
                <div className="form-inpur-wrapper">
                    <span className="form-input-label">Телефон</span>
                    <input value={tel} className="form-input" type="tel" onChange={(event) => setTel(event.target.value)} />
                </div>
                <div className="form-inpur-wrapper">
                    <span className="form-input-label">Адрес доставки</span>
                    <input value={adress} className="form-input" type="text" onChange={(event) => setAdress(event.target.value)} />
                </div>
                <button 
                    className="form-buy-btn" 
                    onClick={() => {
                            console.log(`${name} ${tel} ${adress}`);
                        }
                    }
                    disabled={!isBtnEnabled}>Оформить</button>
            </form>
        </div>
    ) : null;
}