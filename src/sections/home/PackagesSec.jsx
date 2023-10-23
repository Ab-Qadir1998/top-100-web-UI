import InputField from "../../components/InputField";
import ThemeButton from "../../components/ThemeButton";
import { Link } from 'react-router-dom'
const PackagesSec = () => {
  return (
    <section className="packages-sec">
      <div className="packages-text">PACKAGES</div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 pe-lg-5 customized-quote-div wow animate__animated animate__fadeInLeft animate__delay-1s">
            <h6 className="level-4 text-primary">PACKAGES</h6>
            <h2 className="level-2">
              Here's what's we{" "}
              <span className="text-primary">charge for our service</span>
            </h2>

            <h4 className="level-4 text-primary">Get a Customized Quote</h4>
            <form>
              <div className="row">
                <div className="mb-3 col-lg-5">
                  <InputField
                    label={"Full Name"}
                    type={"text"}
                    placeholder={"John Doe"}
                  />
                </div>
                <div className="mb-3 col-lg-7">
                  <InputField
                    label={"Email address"}
                    type={"email"}
                    placeholder={"John Doe"}
                  />
                </div>
                <div className="mb-3 col-lg-12">
                  <InputField
                    label={"Website URL"}
                    type={"text"}
                    placeholder={"https://"}
                  />
                </div>

                <div className="mb-3 col-lg-12">
                  <ThemeButton text={"Request Quote!"} width={"w-100"} />
                  {/* <button type="submit" className="btn primary-btn w-100">
                    Request Quote!
                  </button> */}
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-6 col-md-6 ps-lg-5 wow animate__animated animate__fadeInRight animate__delay-2s">
            <div className="small-business-div">
              <h3 className="level-3">
                Small <span className="text-primary">Business</span> Website
              </h3>
              <h4 className="level-4">$500 HTML Package (one time fee), then $250 a month</h4>
              <div className="small-business-div-text">
                <p className="para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quisque egestas diam in arcu cursus euismod.
                  <br />
                  Lorem ipsum dolor sit amet,
                </p>

                <p className="para">
                  {" "}
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quisque egestas diam in arcu
                  cursus euismod.
                </p>
                <p className="para">
                  {" "}
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quisque egestas diam in arcu
                  cursus euismod.
                </p>
              </div>
              <div className="row">
                <div className="col-md-6">
                  {/* <ThemeButton text={"Place Order"} width={"w-100"} bg={true}/> */}
                  <Link
                    to="/checkout"
                    className={`btn  secondary-btn`}
                  >
                    Place Order
                  </Link>
                  {/* <button type="submit" className="btn secondary-btn w-100">
                    Place Order
                  </button> */}
                </div>
                <div className="col-md-6  pt-3 pt-md-0">
                  <ThemeButton text={"Live Chat"} width={"w-100"} />
                  {/* <button type="submit" className="btn primary-btn w-100">
                    Live Chat
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSec;
