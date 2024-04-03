import React from 'react'
import "./testomonial.css";
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Working with Usama was an absolute pleasure. Their exceptional creativity and vision brought our project to life in ways we couldn't have imagined. They listened attentively to our ideas and transformed them into stunning visual concepts that perfectly captured the essence of our brand. We were impressed not only by their artistic talent but also by their professionalism and attention to detail. Highly recommend!",
  },
  {
    avatar: AVTR1,
    name: "Tina Snow Shatta Wale",
    review:
      "Usama exceeded our expectations with their innovative designs and timely delivery. They demonstrated a deep understanding of our requirements and translated them into designs that were both visually striking and highly effective. Their ability to communicate and collaborate throughout the project made the entire process seamless and enjoyable. We look forward to working with them again in the future.",
  },
  {
    avatar: AVTR3,
    name: "Ewane Despite",
    review:
      "We had the pleasure of collaborating with Usama on a recent project, and we were thoroughly impressed by their unparalleled attention to detail. Every aspect of their design work, from typography to color selection, was meticulously crafted to perfection. They took the time to understand our brand identity and ensured that every design element aligned seamlessly with our vision. The end result surpassed our expectations, and we couldn't be happier with the outcome",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Working with Usama was a fantastic experience from start to finish. Their professionalism and excellent communication skills made the entire process smooth and stress-free. They were responsive to our feedback and provided valuable insights and suggestions to enhance the designs further. It was evident that they genuinely cared about delivering results that met our needs and expectations. We highly recommend their services to anyone seeking top-notch graphic design expertise.",
  },
];

const Testomonial = () => {
  
  return (
    <section id="testomonial">
  <h5>Review from clients </h5>
  <h2>Testomonials </h2>
  <Swiper className="container testimonials_container dabba" 
   // install Swiper modules
   modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      //onSlideChange={() => console.log('slide change')}
      >
  {
    data.map(({avatar, name, review}, index) => {
      return(

      <SwiperSlide key={index} className="testomonial">
      <div className="client_avatar">
        <img src={avatar} alt="Avatar One" />
      </div>
        <h5 className="client_name">{name} </h5>
        <small className="client_review">{review}</small>
    </SwiperSlide>
      )
    })
  }

  </Swiper>
    </section>
  )
}

export default Testomonial