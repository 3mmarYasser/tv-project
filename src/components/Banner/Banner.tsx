import React from 'react';
import Styles from "./Banner.module.scss";
import classNames from "classnames";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';

const image: string = "https://correcto.id/content/images/usrfile_2020031805552176063.jpg"

interface Props {

}

const Banner: React.FC<Props> = () => {
    return (
        <div className={classNames([Styles.Banner])}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div
                        className={classNames("w-[100%]  bg-[#0d0318] bg-cover bg-no-repeat", [Styles.Banner_contain])}
                        style={{backgroundImage: `url(${image})`}}>
                        <div className={classNames([Styles.Back_Drop], 'w-[100%] h-[100%]')}>
                            <div className="p-[10px] pt-[10%] pl-[20px] w-[100%] flex justify-between">
                                <div className="w-[50%]">
                                    <h1 className={classNames("mt-[30px]  text-8xl font-bold", [Styles.Banner_Slide_Head])}>Black
                                        Widow</h1>
                                    <button
                                        className={classNames("mt-[40px] text-center p-[10px] pl-[40px] pr-[40px] text-black font-bold", [Styles.Banner_Slide_Play])}>Play
                                        Know
                                    </button>
                                    <p className="mt-[20px]">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda
                                        atque, culpa ipsam itaque laboriosam maiores nesciunt perspiciatis quasi quidem
                                        .</p>
                                </div>
                                <div className="w-[50%]">

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
