import { Route, Routes } from "react-router-dom";
import LayOut from "./Layout/Layout";
import { Home, NotFound } from "../pages";

const PublicRoutes = () => {
  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LayOut>
  );
};

export default PublicRoutes;
