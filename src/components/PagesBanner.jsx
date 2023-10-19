import React from "react";

const PageBanner = (props) => {
    return (
        <>
            <section className="universal-banner">
                <div className="container">
                    <div className="page-banner-start">
                        <h1 class="level-1 mb-0" >{props.dark_heading} <span class="text-primary">{props.light_heading}</span></h1>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PageBanner;