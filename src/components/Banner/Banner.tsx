import React from 'react';
import Styles from "./Banner.module.scss";
import classNames from "classnames";
import {Swiper, SwiperSlide ,useSwiper} from 'swiper/react';
import NextIcon from "@mui/icons-material/NavigateNext"
import BrevIcon from "@mui/icons-material/NavigateBefore"
import 'swiper/scss';

const image: string = "https://correcto.id/content/images/usrfile_2020031805552176063.jpg"

interface banner{
}
interface Props {
}

const Banner: React.FC<Props> = () => {
    const swiper = useSwiper();



    return (
        <div className={classNames([Styles.Banner])}>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
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
                                  <div className="flex mb-[10px]">
                                      <button onClick={(e)=> {console.log(e)}}><BrevIcon className={Styles.NavigateIcons}/></button>
                                      <button onClick={(e)=>console.log(e)}><NextIcon className={Styles.NavigateIcons}/></button>
                                  </div>
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
