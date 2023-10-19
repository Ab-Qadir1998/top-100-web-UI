import React from "react";
import { Link } from 'react-router-dom'
const ServiceItem = (props) => {
    return (
        <>
            <div className="col-md-6 col-sm-6 px-lg-4 my-4" key={props.key}>
                <Link className="text-decoration-none" to="">
                    <div className="single-service">
                        <figure className="service-image">
                            <img src={props.image} className="img-here w-100" alt="" />
                        </figure>
                        <div className="text-here p-4">
                            <h4 className="level-3 pt-1">{props.first_name} <span className="text-primary">{props.last_name}</span></h4>
                            <span className="level-5 font-small">{props.para}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default ServiceItem;