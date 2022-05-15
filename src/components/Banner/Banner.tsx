import React, {useRef} from 'react';
import classNames from "classnames";
import {Swiper, SwiperSlide} from 'swiper/react';
import NextIcon from "@mui/icons-material/NavigateNext"
import BrevIcon from "@mui/icons-material/NavigateBefore"
import SwiperCore,{Navigation, Keyboard} from "swiper";
import {BannerResponse} from "../../interfaces";
import ImagesPaths from "../../outer/paths/images";
import "swiper/scss";
import "swiper/scss/navigation";
import Styles from "./Banner.module.scss";

interface Props extends BannerResponse{

}


const Banner: React.FC<Props> = ({data , loading, err}) => {

    const swiperRef = useRef<SwiperCore |null>(null);
    const ResultBanner:React.FC  = ()=> {
        if(loading){
            return <p className=" mt-[50px] text-red-700 text-6xl" >Loading</p>
        }
        else if(err){
            return <p className=" mt-[50px] text-red-700 text-6xl">{err}</p>
        }
        else if(data.length < 1) return <p  className=" mt-[50px] text-red-700 text-6xl">No Data</p>
        return <Swiper
            spaceBetween={0}
            slidesPerView={1}
            keyboard={true}
            modules={[Navigation, Keyboard]}
            onBeforeInit={(swiper: SwiperCore) :void=>{
                swiperRef.current = swiper
            }}

        >
            {data.map(show => (
                show.title && show.title.length < 32 ?
                 <SwiperSlide key={show.id}>

                <div className={classNames("w-[100%]  bg-[#0d0318] bg-cover bg-no-repeat", [Styles.Banner_contain])} style={{backgroundImage: `url(${ImagesPaths.trending + show.backdrop_path})`}}>


                <div className={classNames([Styles.Back_Drop], 'w-[100%] h-[100%] ')}>


                <div className={classNames("p-[10px] pt-[10vh]  pl-[20px] w-[100%] flex justify-between ", [Styles.Banner_Slide])}>

                <div className={classNames("flex flex-col  w-[80%] mt-[10%] ", [Styles.Banner_content_Left])}>

                <h1 className={classNames("mt-[30px]  text-8xl font-bold", [Styles.Banner_Slide_Head])}>{show.title}</h1>

                <button className={classNames("mt-[40px] text-center p-[10px] pl-[40px] pr-[40px] text-black font-bold", [Styles.Banner_Slide_Play])}>Play Know</button>

                <p className="mt-[50px]">{show.overview}</p>

                </div>


                <div className={classNames("w-[20%]",[Styles.Banner_content_Right])}>
                <div className="flex mb-[10px]"/>
                </div>
                </div>


                </div>

                </div>

                </SwiperSlide> :null
                )
            )}
            <div className={classNames([Styles.Banner_navigation])}>
                <button onClick={()=> {
                    swiperRef.current?.slidePrev()
                }}><BrevIcon/></button>
                <button onClick={()=> {
                    swiperRef.current?.slideNext()
                }} ><NextIcon/></button>
            </div>

        </Swiper>

    }

    return (
        <div className={classNames([Styles.Banner_contain])}>
            <ResultBanner/>
        </div>
    );
};

export default Banner;
