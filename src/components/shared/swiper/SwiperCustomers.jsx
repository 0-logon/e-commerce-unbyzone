import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import styles from '@/styles/shared/SwiperCustomers.module.css';
import {data} from '@/data/customersData';

const SwiperCustomers = () => {
    useEffect(() => {
        // This ensures Swiper recognizes the navigation buttons after they are rendered
        const swiper = document.querySelector('.swiper').swiper;
        swiper.params.navigation.prevEl = '#prevButton';
        swiper.params.navigation.nextEl = '#nextButton';
        swiper.navigation.init();
        swiper.navigation.update();
    }, []);
    return (
        <Swiper
            className={styles.component}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            pagination={{
                dynamicBullets: true,
            }}
            autoplay={{
                delay: 2000,  // Delay between transitions in milliseconds
                disableOnInteraction: false,  // Autoplay will not be disabled after user interactions
            }}
            navigation={{
                prevEl: '#prevButton',  // Link to previous button by ID
                nextEl: '#nextButton',  // Link to next button by ID
            }}
            breakpoints={{
                320: {
                    slidesPerView: 1
                },
                920: {
                    slidesPerView: 2
                }
            }}
            // modules={[Pagination, Autoplay]}
            modules={[Navigation]}
        >
            {
                data.map((data) => (
                    <SwiperSlide key={data.id} className={styles.swiper}>
                        <div className={styles.avatar}>
                            <img src={data.image} alt={`Customer: ${data.name}`} />
                        </div>
                        <div className={styles.details}>
                            <p>{data.message}</p>
                            <p>{data.name}</p>
                            <p>{data.location}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default SwiperCustomers