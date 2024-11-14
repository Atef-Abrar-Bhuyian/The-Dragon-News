import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mb-2">Find Us On</h2>
      <div className="join join-vertical flex gap-2 *:bg-base-100">
        <button className="btn join-item justify-start"> <FaFacebook className="text-xl text-blue-500" />        Facebook</button>
        <button className="btn join-item justify-start"> <FaSquareTwitter className="text-xl text-blue-500" />
        Twitter</button>
        <button className="btn join-item justify-start"> <FaSquareInstagram className="text-xl text-red-400" />
        Instagram</button>
      </div>
    </div>
  );
};

export default FindUs;
