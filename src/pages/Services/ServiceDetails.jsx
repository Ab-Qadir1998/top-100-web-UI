import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import { aboutImg } from "../../constants/mediaConstants";
import ThemeButton from "../../components/ThemeButton";
import PageBanner from "../../components/PagesBanner";
import {
    serviceDetail1Img,
    serviceDetail2Img,
    serviceDetail3Img,
    serviceDetail4Img,
    serviceDetail5Img,
} from "../../constants/mediaConstants";
import servicesData from "../../components/ServiceData";
import ServiceItem from "../../components/ServiceItem";
const ServiceDetails = (props) => {
    const para1 = "At Top 100 Website Advertising, our mission is to be your unwavering partner on the journey to online success. With years of experience and a team of seasoned SEO experts, we are committed to delivering top-notch SEO services that can elevate your online presence and drive tangible results. Our track record speaks volumes about our expertise, as we have consistently helped businesses of all sizes and industries achieve remarkable success in the digital realm.";
    const para2 = "Our primary focus is on search engine optimization (SEO), a critical aspect of any successful online strategy. Through meticulous keyword research, content optimization, and cutting-edge SEO techniques, we have consistently propelled our clients' websites to the top of search engine rankings. What sets us apart is our unwavering commitment to our clients' success. That's why we confidently offer a guarantee: if we don't achieve top search engine rankings for your website within 45 days, we'll refund your money. It's a testament to our confidence in our abilities and our dedication to delivering results.";
    const serviceData1 = [
        {
            id: 1,
            name_light: "Website",
            name_dark: "Advertising",
            para: para1,
            image: serviceDetail1Img,
        },
        {
            id: 2,
            name_light: "Website",
            name_dark: "Marketing",
            para: para1,
            image: serviceDetail3Img,
        },
        {
            id: 3,
            name_light: "Website Digital",
            name_dark: "Advertising",
            para: para1,
            image: serviceDetail4Img,
        },
        {
            id: 4,
            name_light: "Internet",
            name_dark: "Advertising",
            para: para1,
            image: serviceDetail5Img,
        },
    ];
    const serviceData2 = {
        id: 1,
        name_light: "Take the Step Towards ",
        name_dark: "Your Online Success",
        para: para2,
        image: serviceDetail5Img,
    }
    const { id } = useParams();
    const selectedService = serviceData1.find(service => service.id === parseInt(id, 10));

    const columns = 3;

    return (
        <>
            <PageBanner dark_heading="Our" light_heading=" Services" />
            <div className="section-padding pt-5">
                <div className="container-fluid px-0">
                    <div className="row align-items-center">
                        <div className="col-lg-6 ms-auto px-4  px-md-5 py-lg-4  py-md-5 wow animate__animated animate__fadeInRight order-1 order-lg-0">
                            <div className="ps-xxl-5">
                                <h6 className='level-4 text-primary m-0'>Services</h6>
                                <h2 className="level-1">{selectedService.name_dark}<span className='text-primary'> {selectedService.name_light}</span></h2>
                                <p className='para'>{selectedService.para}</p>
                                <ThemeButton text={"Get a Quote"} />
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-4 py-5 wow animate__animated animate__fadeInLeft">
                            <figure>
                                <img src={selectedService.image} className="img-fluid w-100" alt="" />
                            </figure>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6 pe-lg-4 py-5 wow animate__animated animate__fadeInLeft animate__delay-2s">
                            <figure>
                                <img src={serviceData2.image} className="img-fluid w-100" alt="" />
                            </figure>
                        </div>
                        <div className="col-lg-6 ms-auto px-4  px-md-5 py-lg-4  py-md-5 wow animate__animated animate__fadeInRight animate__delay-2s">
                            <div className="pe-xxl-5">
                                <h6 className='level-4 text-primary m-0'>Services</h6>
                                <h2 className="level-1">{serviceData2.name_dark}<span className='text-primary'> {serviceData2.name_light}</span></h2>
                                <p className='para'>{serviceData2.para}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section className="service-search-for">
                <div className="container">
                    <div className="service-search-start">
                        <div className="row">
                            {
                                servicesData.map((service, index) => (
                                    service.id != id &&
                                    <ServiceItem first_name={service.first_name} columns={columns} id={service.id} last_name={service.last_name} para={service.para} image={service.image} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ServiceDetails;