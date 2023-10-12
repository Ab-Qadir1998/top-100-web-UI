import React from "react";
import { testimonialsData } from "../../constants/data";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: false,
    slidesToShow: 2,
    autoplay: true,
    arrows: false,
    centerMode : true,
    // centerPadding : '0 0 0 0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section class="testimonials-sec">
      <div class="container">
        <div class="text-center mb-5">
          <h6 className="level-4 text-primary m-0">TESTIMONIALS</h6>
          <h2 className="level-2">
            Hear from Our
            <span className="text-primary d-block">Satisfied Clients</span>
          </h2>
        </div>
      </div>
      <div className="col-lg-11 col-sm-12 ms-auto">
        <div class="testimonial-slider">
          <Slider {...settings}>
            {testimonialsData?.map((testimonial, i) => (
              <div class="testimonial-slider-wrapp">
                <div className="testi__inner">
                  <h4 className="level-4 text-primary">{testimonial?.title}</h4>
                  <p className="level-5">{testimonial?.review}</p>
                  <h5 className="level-4 text-primary text-end">
                    {testimonial?.testimoni}
                  </h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
