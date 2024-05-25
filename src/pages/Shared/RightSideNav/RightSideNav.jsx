import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login with</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle />
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Github
        </button>
      </div>
      <div className="p-4  mb-6">
        <h2 className="text-3xl mb-4">Find us</h2>
        <a
          className="flex p-4 text-lg items-center border-2 rounded-t-lg border-black"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a
          className="flex p-4 text-lg items-center border-x-2 border-black"
          href=""
        >
          <FaTwitter className="mr-3"></FaTwitter>
          Twitter
        </a>
        <a
          className="flex p-4 text-lg items-center rounded-b-lg border-2 border-black"
          href=""
        >
          <FaInstagram className="mr-3"></FaInstagram>
          Instagram
        </a>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
