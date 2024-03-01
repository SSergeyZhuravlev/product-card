import { useState, useRef, useEffect } from 'react';
import './Accordion.css';

export const Accordion = ( { AccordionMenu } ) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(ref.current && ref.current.offsetHeight);
    }, [height, activeIndex]);

    const handlerChangeIndex = (index) => setActiveIndex(activeIndex === index ? null : index);
    
    return (
        <ul className='accordion'>
            {
                AccordionMenu.map(( {id, title, content}, index ) => {
                    return (
                        <li className='accordion-item' key={id}>
                            {
                                activeIndex === index ?
                                    <>
                                        <h2 className='accordion-title' onClick={() => handlerChangeIndex(index)}>{title}</h2>
                                        <div className='accordion-content' style={ {height} }>
                                            <p ref={ref} className='accordion-content-text'>{content}</p>
                                        </div>
                                    </>
                                     : 
                                    <>
                                        <h2 className='accordion-title' onClick={() => handlerChangeIndex(index)}>{title}</h2>
                                        <div className='accordion-content'>
                                            <p className='accordion-content-text'>{content}</p>
                                        </div>
                                    </>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}