import React from "react";
import ServiceItem from "../../components/ServiceItem";
import { service1Img, service2Img, service3Img, service4Img } from "../../constants/mediaConstants";
const ServicesSec = () => {
    const para = "At Top 100 Website Advertising, our mission is to be your unwavering partner";
    const services = [
        {
            first_name: "Website",
            last_name: "Marketing",
            para: para,
            image: service1Img,
        },
        {
            first_name: "Website",
            last_name: "Advertising",
            para: para,
            image: service2Img,
        },
        {
            first_name: "Website",
            last_name: " Digital Advertising",
            para: para,
            image: service3Img,
        },
        {
            first_name: "Internet",
            last_name: " Marketing Marketing",
            para: para,
            image: service4Img,
        },

    ]
    return (
        <>
            <section className="services-seciton py-5">
                <div className="container">
                    <div className="services-start col-lg-10 mx-auto">
                        <div className="row">
                            {
                                services.map((service, index) => (
                                    <ServiceItem first_name={service.first_name} last_name={service.last_name} para={service.para} image={service.image} key={index} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ServicesSec;