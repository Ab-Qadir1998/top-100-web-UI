import { bannerImg } from "../../../constants/mediaConstants"

const Banner = () => {
    return (
        <section class="mainbannerbg">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-7 wow animate__animated animate__fadeInLeft">
                        <h1 class="banner__heading">Boost Your <span>Rankings</span> with Our Expert <span>SEO Services!</span>
                        </h1>
                        <p class="banner__para">If your website doesn't reach the top results within 45 days, we won't charge
                            you a penny—because we're that confident in our SEO process.</p>

                        <div class="find">
                            <h4>Get a free analysis of your website today!</h4>
                            <div class="input-group mb-3">
                                <form>
                                    <div class="row">
                                        <div class="mb-3 col-lg-5">
                                            <label for="name" class="form-label">Full name</label>
                                            <input type="text" class="form-control" id="name" placeholder="John Doe" />
                                        </div>
                                        <div class="mb-3 col-lg-7">
                                            <label for="weburl" class="form-label">Website URL</label>
                                            <input type="text" class="form-control" id="weburl" placeholder="https://" />
                                        </div>
                                        <div class="mb-3 col-lg-7">
                                            <label for="email" class="form-label">Email address</label>
                                            <input type="text" class="form-control" id="email" placeholder="John Doe" />
                                        </div>
                                        <div class="mb-3 col-lg-5">
                                            <label for="exampleInputPassword1" class="form-label w-100 hide">btn</label>
                                            <button type="submit" class="btn primary-btn w-100">Let's Go!</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 wow animate__animated animate__fadeInRight">
                        <figure>
                            <img src={bannerImg} class="img-fluid w-100" alt="top-100-web" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner