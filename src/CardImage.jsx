import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const CardImage = ( { images } ) => {
    const navigationNextRef = useRef(null);
    const navigationPrevRef = useRef(null);

    return (
        <div>
            <button ref={navigationPrevRef}>Prev</button>
            <button ref={navigationNextRef}>Next</button>
            <Swiper 
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                modules={[Navigation, Pagination]} 
                navigation={
                    {
                        nextEl: navigationNextRef.current,
                        prevEl: navigationPrevRef.current,
                    }
                }
                pagination={
                    { 
                        enabled: true,
                        clickable: true,
                    }
                }
                loop
                slidesPerView={1}
                style={{ width: 300, height: 300 }}>
                
                {
                    images.map((image) => (
                        <SwiperSlide key={image}>
                            <img src={image} alt="Изображение товара" style={{ width: 300, height: 300 }} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}