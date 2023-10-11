import React from 'react'

const PackagesSec = () => {
    return (
        <section class="packages-sec">
            <div class="packages-text">PACKAG</div>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 pe-lg-5 customized-quote-div wow animate__animated animate__fadeInLeft">
                        <h6>PACKAGES</h6>
                        <h2>Here's what's we <span>charge for our service</span></h2>

                        <h4>Get a Customized Quote</h4>
                        <form>
                            <div class="row">
                                <div class="mb-3 col-lg-5">
                                    <label for="name" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="name" placeholder="John Doe" />
                                </div>
                                <div class="mb-3 col-lg-7">
                                    <label for="email" class="form-label">Email address</label>
                                    <input type="text" class="form-control" id="email" placeholder="John Doe" />
                                </div>
                                <div class="mb-3 col-lg-12">
                                    <label for="weburl" class="form-label">Website URL</label>
                                    <input type="text" class="form-control" id="weburl" placeholder="https://" />
                                </div>

                                <div class="mb-3 col-lg-12">
                                    <button type="submit" class="btn primary-btn w-100">Request Quote!</button>
                                </div>

                            </div>
                        </form>
                    </div>

                    <div class="col-lg-6 ps-lg-5 wow animate__animated animate__fadeInRight">
                        <div class="small-business-div">
                            <h3>Small <span>Business</span> Website</h3>
                            <h4>$500 HTML Package (one time fee), then $250 a month</h4>
                            <div class="small-business-div-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Quisque egestas diam in arcu cursus euismod.<br />
                                        Lorem ipsum dolor sit amet,</p>

                                <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Quisque egestas diam in arcu cursus euismod.</p>
                                <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Quisque egestas diam in arcu cursus euismod.</p>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <button type="submit" class="btn secondary-btn w-100">Place Order</button>
                                </div>
                                <div class="col-md-6">
                                    <button type="submit" class="btn primary-btn w-100">Live Chat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackagesSec