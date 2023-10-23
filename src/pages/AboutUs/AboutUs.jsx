import React from 'react'
import PageBanner from '../../components/PagesBanner'
import { serviceDetail2Img } from '../../constants/mediaConstants'
import { Link } from 'react-router-dom'
import TeamSec from '../../sections/universal/TeamSec'
const AboutUs = () => {
    return (
        <>
            <PageBanner dark_heading="About" light_heading="us" />
            <div class="section-padding pt-5">
                <div class="container-fluid px-0">
                    <div class="row align-items-center">
                        <div class="col-lg-6 ms-auto px-4  px-md-5 py-lg-4  py-md-5 wow animate__animated animate__fadeInRight order-1 order-lg-0">
                            <div class="ps-xxl-5">
                                <h6 class="level-4 text-primary m-0">Services</h6>
                                <h2 class="level-1">Your Trusted Partner in<span class="text-primary"> Digital Success</span></h2>
                                <p class="para">At Top 100 Website Advertising, our mission is to be your unwavering partner on the journey to online success. With years of experience and a team of seasoned SEO experts, we are committed to delivering top-notch SEO services that can elevate your online presence and drive tangible results. Our track record speaks volumes about our expertise, as we have consistently helped businesses of all sizes and industries achieve remarkable success in the digital realm.</p>
                                <Link to="/services" class="btn  primary-btn  ">View Services</Link>
                            </div>
                        </div>
                        <div class="col-lg-6 ps-lg-4 py-5 wow animate__animated animate__fadeInLeft">
                            <figure><img src={serviceDetail2Img} class="img-fluid w-100" alt="" /></figure>
                        </div>
                    </div>

                </div>
            </div>
            <section className="vision-mission ">
                <div className="container-fluid">
                    <div className="about-text-section">
                        <div className="row">
                            <div className="col-md-6 px-0 pe-lg-3">
                                <div className="single-text-box">
                                    <div className="text-here">
                                        <h2 className="level-2">Our <span className=' text-primary'>Mission</span></h2>
                                        <p className="para">Our mission at Top 100 Website Advertising is to serve as your steadfast companion on the path to online triumph. Drawing upon years of expertise and guided by a cadre of seasoned SEO professionals, we are dedicated to providing exceptional SEO services capable of enhancing your digital footprint and generating concrete outcomes. Our proven track record attests to our proficiency, demonstrating our unwavering ability to empower businesses of diverse scales and sectors to attain extraordinary achievements within the digital domain.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 px-0 ps-lg-3">
                                <div className="single-text-box">
                                    <div className="text-here">
                                        <h2 className="level-2">Our <span className=' text-primary'>Vision</span></h2>
                                        <p className="para">Our vision is to lead the way in the online marketing landscape, setting new standards of excellence. We aspire to be the foremost choice for businesses seeking to conquer the digital realm. With our unwavering commitment to innovation and a dedicated team of SEO experts, we envision a future where we not only elevate online presences but also redefine the possibilities of digital success. We aim to continually expand our horizons, pushing boundaries, and leaving an indelible mark as the go-to partner for businesses of all sizes and industries in their quest for remarkable achievements online.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class=" pt-5">
                <div class="container-fluid px-0">
                    <div class="row align-items-center">
                        <div class="col-lg-6 pe-lg-4 py-5 wow animate__animated animate__fadeInLeft">
                            <figure><img src={serviceDetail2Img} class="img-fluid w-100" alt="" /></figure>
                        </div>
                        <div class="col-lg-6 ms-auto px-4  px-md-5 py-lg-4  py-md-5 wow animate__animated animate__fadeInRight">
                            <div class="pe-xxl-5">
                                <h6 class="level-4 text-primary m-0">Services</h6>
                                <h2 class="level-1">A look back at brief<span class="text-primary"> History of Top 100 Adverts </span></h2>
                                <p class="para">Our primary focus is on search engine optimization (SEO), a critical aspect of any successful online strategy. Through meticulous keyword research, content optimization, and cutting-edge SEO techniques, we have consistently propelled our clients' websites to the top of search engine rankings. What sets us apart is our unwavering commitment to our clients' success. That's why we confidently offer a guarantee: if we don't achieve top search engine rankings for your website within 45 days, we'll refund your money. It's a testament to our confidence in our abilities and our dedication to delivering results.</p>
                                <Link to="/services" class="btn  primary-btn  ">View Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TeamSec />
        </>
    )
}
export default AboutUs;