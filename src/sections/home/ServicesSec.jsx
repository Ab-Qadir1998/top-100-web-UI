import { servicesCardData } from "../../constants/data";
import ServicesCard from "../../components/ServicesCard";
import ThemeButton from "../../components/ThemeButton";

const ServicesSec = () => {
  return (
    <section class="services-sec">
      <div class="container">
        <div class="text-center mb-5">
          <h6 className="text-primary level-4 m-0">SERVICES</h6>
          <h2 className="level-2">
            Elevating Your
            <span className="text-primary d-block">Online Presence</span>
          </h2>
        </div>

        <div class="row">
          {servicesCardData?.map((card, i) => (
            <div class="col-md-4 mb-3  wow animate__animated animate__fadeInLeft">
              <ServicesCard key={i} card={card} />
            </div>
          ))}
        </div>
        <div class="text-center mt-3  wow animate__animated animate__fadeInUp">
            <ThemeButton text={"View All"} margin={"mt-3"}/>
          {/* <button type="submit" class="btn primary-btn">
            View All
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;
