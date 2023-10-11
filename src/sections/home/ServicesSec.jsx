import { servicesCardData } from '../../constants/data'
import ServicesCard from '../../components/ServicesCard'

const ServicesSec = () => {
    return (
        <section class="services-sec">
            <div class="container">
                <div class="text-center mb-5">
                    <h6>SERVICES</h6>
                    <h2>Elevating Your
                        <span>Online Presence</span>
                    </h2>
                </div>

                <div class="row">
                    {
                        servicesCardData?.map((card, i) => (
                            <div class="col-md-4 mb-3  wow animate__animated animate__fadeInLeft">
                                <ServicesCard
                                    key={i}
                                    card={card}
                                />
                            </div>
                        ))
                    }
                </div>
                <div class="text-center mt-3  wow animate__animated animate__fadeInUp">
                    <button type="submit" class="btn primary-btn">View All</button>
                </div>
            </div>
        </section>
    )
}

export default ServicesSec