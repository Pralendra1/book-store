import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json';
import Cards from './Cards';

function Freebook() {
    const filterData = list.filter(data => data.category === "Free");
    console.log(filterData);
    var settings = {
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <h1 className='text-xl font-bold pb-2'>Free Courses</h1>
            <p>
                "Unlock a wealth of knowledge with our diverse range of free courses. Delve into captivating subjects and broaden your horizons without spending a penny. Whether you're a seasoned learner or just starting your educational journey, our curated selection offers something for everyone. Start your learning adventure today and empower yourself with invaluable insights and skills."
            </p>
            <div className="slider-container px-2 py-3 ">
            <div>
                <Slider {...settings}>
                     {filterData.map((item)=>(
                        <Cards item={item} key={item.id}/>
                     ))}
                </Slider>
            </div>
        </div>
        </div>
    );
}

export default Freebook;
