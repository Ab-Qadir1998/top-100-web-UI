import InputField from "../../components/InputField";
import ThemeButton from "../../components/ThemeButton";

const PackagesSec = () => {
  return (
    <section class="packages-sec">
      <div class="packages-text">PACKAGES</div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 pe-lg-5 customized-quote-div wow animate__animated animate__fadeInLeft">
            <h6 className="level-4 text-primary">PACKAGES</h6>
            <h2 className="level-2">
              Here's what's we{" "}
              <span className="text-primary">charge for our service</span>
            </h2>

            <h4 className="level-4 text-primary">Get a Customized Quote</h4>
            <form>
              <div class="row">
                <div class="mb-3 col-lg-5">
                  <InputField
                    label={"Full Name"}
                    type={"text"}
                    placeholder={"John Doe"}
                  />
                </div>
                <div class="mb-3 col-lg-7">
                  <InputField
                    label={"Email address"}
                    type={"email"}
                    placeholder={"John Doe"}
                  />
                </div>
                <div class="mb-3 col-lg-12">
                  <InputField
                    label={"Website URL"}
                    type={"text"}
                    placeholder={"https://"}
                  />
                </div>

                <div class="mb-3 col-lg-12">
                  <ThemeButton text={"Request Quote!"} width={"w-100"} />
                  {/* <button type="submit" class="btn primary-btn w-100">
                    Request Quote!
                  </button> */}
                </div>
              </div>
            </form>
          </div>

          <div class="col-lg-6 ps-lg-5 wow animate__animated animate__fadeInRight">
            <div class="small-business-div">
              <h3 className="level-3">
                Small <span className="text-primary">Business</span> Website
              </h3>
              <h4 className="level-4">$500 HTML Package (one time fee), then $250 a month</h4>
              <div class="small-business-div-text">
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
              <div class="row">
                <div class="col-md-6">
                    <ThemeButton text={"Place Order"} width={"w-100"} bg={true}/>
                  {/* <button type="submit" class="btn secondary-btn w-100">
                    Place Order
                  </button> */}
                </div>
                <div class="col-md-6">
                <ThemeButton text={"Live Chat"} width={"w-100"}/>
                  {/* <button type="submit" class="btn primary-btn w-100">
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
