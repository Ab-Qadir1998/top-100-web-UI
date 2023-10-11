import React from 'react'
import { testimonialsData } from '../../constants/data'
import Slider from 'react-slick'

const Testimonials = () => {
    var settings = {
        dots: false,
        centerPadding: '0px',
        slidesToShow: 2,
        autoplay: true,
        arrows: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,

            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
        ]
    };
    return (
        <section class="testimonials-sec">
            <div class="container">
                <div class="text-center mb-5">
                    <h6>TESTIMONIALS</h6>
                    <h2>Hear from Our
                        <span>Satisfied Clients</span>
                    </h2>
                </div>
                <div class="testimonial-slider">
                    <Slider {...settings}>
                        {
                            testimonialsData?.map((testimonial, i) => (
                                <div class="testimonial-slider-wrapp">
                                    <h4>{testimonial?.title}</h4>
                                    <p>{testimonial?.review}</p>
                                    <h5>{testimonial?.testimoni}</h5>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Testimonials