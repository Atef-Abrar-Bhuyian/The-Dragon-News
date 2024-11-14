import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-2 bg-base-300 p-2 rounded-sm">
      <p className="bg-red-500 text-gray-50 px-3 py-1 font-semibold rounded-sm">Latest</p>
      <Marquee pauseOnHover={true} speed={100} className="space-x-6">
        <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis optio nesciunt. Obcaecati, aut eum!</Link>
        <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur debitis optio nesciunt. Obcaecati, aut eum!</Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
