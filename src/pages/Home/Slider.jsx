// images
import slide1 from '../../assets/slide1.jpg';
import slide2 from '../../assets/slide2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide4 from '../../assets/slide4.jpg';
import slide5 from '../../assets/slide5.jpg';
import slide6 from '../../assets/slide6.jpg';
import slide7 from '../../assets/slide7.jpg';
import slide8 from '../../assets/slide8.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='h-[500px] max-w-full'>
      <Swiper spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide><img src={slide1} alt={"slide1 image"} /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt={"slide2 image"} /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt={"slide3 image"} /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt={"slide4 image"} /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt={"slide5 image"} /></SwiperSlide>
        <SwiperSlide><img src={slide6} alt={"slide6 image"} /></SwiperSlide>
        <SwiperSlide><img src={slide7} alt={"slide7 image"} /></SwiperSlide>
        <SwiperSlide><img src={slide8} alt={"slide8 image"} /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;





