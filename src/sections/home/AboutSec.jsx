import React from 'react'
import { aboutImg } from '../../constants/mediaConstants'
import ThemeButton from '../../components/ThemeButton'
const AboutSec = () => {
    return (
        <div className="about-sce">
            <div className="row align-items-center">
                <div className="col-lg-6 wow animate__animated animate__fadeInLeft animate__delay-1s">
                    <figure>
                        <img src={aboutImg} className="img-fluid w-100" alt="" />
                    </figure>
                </div>

                <div className="col-lg-6 p-4 p-sm-5 wow animate__animated animate__fadeInRight animate__delay-1s">
                    <h6 className='level-4 text-primary m-0'>About Us</h6>
                    <h2 className="level-1">Your Trusted Partner in <span className='text-primary'>Digital Success</span></h2>
                    <p className='para'>At Top 100 Website Advertising, our mission is to be your unwavering partner on the journey to online
                        success. With years of experience and a team of seasoned SEO experts, we are committed to delivering
                        top-notch SEO services that can elevate your online presence and drive tangible results. Our track
                        record speaks volumes about our expertise, as we have consistently helped businesses of all sizes and
                        industries achieve remarkable success in the digital realm.</p>
                    <ThemeButton text={"LEARN MORE"} bg={true} margin={"me-3"}/>
                    <ThemeButton text={"Get A Free Analysis"} />
                </div>
            </div>
        </div>
    )
}

export default AboutSec