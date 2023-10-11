import React from 'react'
import { aboutImg } from '../../constants/mediaConstants'

const AboutSec = () => {
    return (
        <div class="about-sce">
            <div class="row align-items-center">
                <div class="col-lg-6 wow animate__animated animate__fadeInLeft">
                    <figure>
                        <img src={aboutImg} class="img-fluid w-100" alt="" />
                    </figure>
                </div>

                <div class="col-lg-6 p-5 wow animate__animated animate__fadeInRight">
                    <h6>About Us</h6>
                    <h2>Your Trusted Partner in <span>Digital Success</span></h2>
                    <p>At Top 100 Website Advertising, our mission is to be your unwavering partner on the journey to online
                        success. With years of experience and a team of seasoned SEO experts, we are committed to delivering
                        top-notch SEO services that can elevate your online presence and drive tangible results. Our track
                        record speaks volumes about our expertise, as we have consistently helped businesses of all sizes and
                        industries achieve remarkable success in the digital realm.</p>

                    <button type="submit" class="btn secondary-btn me-lg-3">LEARN MORE</button>
                    <button type="submit" class="btn primary-btn">Get A Free Analysis</button>
                </div>
            </div>
        </div>
    )
}

export default AboutSec