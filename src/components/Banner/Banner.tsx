import React, {useRef} from 'react';
import classNames from "classnames";
import {Swiper, SwiperSlide} from 'swiper/react';
import NextIcon from "@mui/icons-material/NavigateNext"
import BrevIcon from "@mui/icons-material/NavigateBefore"
import SwiperCore,{Navigation, Keyboard} from "swiper";

import "swiper/scss";
import "swiper/scss/navigation";
import Styles from "./Banner.module.scss";

const image: string = "https://correcto.id/content/images/usrfile_2020031805552176063.jpg"

interface Props {
}


const Banner: React.FC<Props> = () => {

    const swiperRef = useRef<SwiperCore |null>(null);

    return (
        <div className={classNames([Styles.Banner])}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                keyboard={true}
                modules={[Navigation, Keyboard]}
                onBeforeInit={(swiper: SwiperCore) :void=>{
                    swiperRef.current = swiper
                }}

            >

                <SwiperSlide>

                    <div className={classNames("w-[100%]  bg-[#0d0318] bg-cover bg-no-repeat", [Styles.Banner_contain])} style={{backgroundImage: `url(${image})`}}>


                        <div className={classNames([Styles.Back_Drop], 'w-[100%] h-[100%] ')}>


                            <div className={classNames("p-[10px] pt-[10vh]  pl-[20px] w-[100%] flex justify-between ", [Styles.Banner_Slide])}>

                                <div className={classNames("flex flex-col  w-[80%] mt-[10%] ", [Styles.Banner_content_Left])}>

                                    <h1 className={classNames("mt-[30px]  text-8xl font-bold", [Styles.Banner_Slide_Head])}>Black Widow</h1>

                                    <button className={classNames("mt-[40px] text-center p-[10px] pl-[40px] pr-[40px] text-black font-bold", [Styles.Banner_Slide_Play])}>Play Know</button>

                                    <p className="mt-[50px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda atque, culpa ipsam itaque laboriosam maiores nesciunt perspiciatis quasi quidem .</p>

                                </div>


                                <div className={classNames("w-[20%]",[Styles.Banner_content_Right])}>
                                  <div className="flex mb-[10px]"/>
                                </div>
                            </div>


                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className={classNames("w-[100%]  bg-[#0d0318] bg-cover bg-no-repeat", [Styles.Banner_contain])} style={{backgroundImage: `url(${image})`}}>


                        <div className={classNames([Styles.Back_Drop], 'w-[100%] h-[100%] ')}>


                            <div className={classNames("p-[10px] pt-[10vh]  pl-[20px] w-[100%] flex justify-between ", [Styles.Banner_Slide])}>

                                <div className={classNames("flex flex-col  w-[80%] mt-[10%] ", [Styles.Banner_content_Left])}>

                                    <h1 className={classNames("mt-[30px]  text-8xl font-bold", [Styles.Banner_Slide_Head])}>Black Widow</h1>

                                    <button className={classNames("mt-[40px] text-center p-[10px] pl-[40px] pr-[40px] text-black font-bold", [Styles.Banner_Slide_Play])}>Play Know</button>

                                    <p className="mt-[50px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda atque, culpa ipsam itaque laboriosam maiores nesciunt perspiciatis quasi quidem .</p>

                                </div>


                                <div className={classNames("w-[20%]",[Styles.Banner_content_Right])}>
                                  <div className="flex mb-[10px]"/>
                                </div>
                            </div>


                        </div>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <div className={classNames("w-[100%]  bg-[#0d0318] bg-cover bg-no-repeat", [Styles.Banner_contain])} style={{backgroundImage: `url(${image})`}}>


                        <div className={classNames([Styles.Back_Drop], 'w-[100%] h-[100%] ')}>


                            <div className={classNames("p-[10px] pt-[10vh]  pl-[20px] w-[100%] flex justify-between ", [Styles.Banner_Slide])}>

                                <div className={classNames("flex flex-col  w-[80%] mt-[10%] ", [Styles.Banner_content_Left])}>

                                    <h1 className={classNames("mt-[30px]  text-8xl font-bold", [Styles.Banner_Slide_Head])}>Black Widow</h1>

                                    <button className={classNames("mt-[40px] text-center p-[10px] pl-[40px] pr-[40px] text-black font-bold", [Styles.Banner_Slide_Play])}>Play Know</button>

                                    <p className="mt-[50px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda atque, culpa ipsam itaque laboriosam maiores nesciunt perspiciatis quasi quidem .</p>

                                </div>


                                <div className={classNames("w-[20%]",[Styles.Banner_content_Right])}>
                                  <div className="flex mb-[10px]"/>
                                </div>
                            </div>


                        </div>

                    </div>

                </SwiperSlide>

                <div className={classNames([Styles.Banner_navigation])}>
                    <button onClick={()=> {
                        swiperRef.current?.slidePrev()
                    }}><BrevIcon/></button>
                    <button onClick={()=> {
                        swiperRef.current?.slideNext()
                    }} ><NextIcon/></button>
                </div>

            </Swiper>

        </div>
    );
};

export default Banner;
