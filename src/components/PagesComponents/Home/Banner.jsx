import { bannerImg } from "../../../constants/mediaConstants"

const Banner = () => {
    return (
        <section className="mainbannerbg">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 wow animate__animated animate__fadeInLeft">
                        <h1 className="banner__heading">Boost Your <span>Rankings</span> with Our Expert <span>SEO Services!</span>
                        </h1>
                        <p className="banner__para">If your website doesn't reach the top results within 45 days, we won't charge
                            you a penny—because we're that confident in our SEO process.</p>

                        <div className="find">
                            <h4>Get a free analysis of your website today!</h4>
                            <div className="input-group mb-3">
                                <form>
                                    <div className="row">
                                        <div className="mb-3 col-lg-5">
                                            <label for="name" className="form-label">Full name</label>
                                            <input type="text" className="form-control" id="name" placeholder="John Doe" />
                                        </div>
                                        <div className="mb-3 col-lg-7">
                                            <label for="weburl" className="form-label">Website URL</label>
                                            <input type="text" className="form-control" id="weburl" placeholder="https://" />
                                        </div>
                                        <div className="mb-3 col-lg-7">
                                            <label for="email" className="form-label">Email address</label>
                                            <input type="text" className="form-control" id="email" placeholder="John Doe" />
                                        </div>
                                        <div className="mb-3 col-lg-5">
                                            <label for="exampleInputPassword1" className="form-label w-100 hide">btn</label>
                                            <button type="submit" className="btn primary-btn w-100">Let's Go!</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 wow animate__animated animate__fadeInRight">
                        <figure>
                            <img src={bannerImg} className="img-fluid w-100" alt="top-100-web" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner