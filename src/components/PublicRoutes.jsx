import { Route, Routes } from "react-router-dom";
import LayOut from "./Layout/Layout";
import { Home, NotFound, ContactUs, Faqs, Services, PrivacyPolicy, TermsConditions, GetQuoteSec, ServiceDetails, Packages } from "../pages";

const PublicRoutes = () => {
  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/service/:id" element={<ServiceDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condtions" element={<TermsConditions />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/get-quote" element={<GetQuoteSec />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayOut>
  );
};

export default PublicRoutes;
