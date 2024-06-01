import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { Helmet } from "react-helmet-async";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Helmet>
        <title>Happy Tours | Home</title>
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
