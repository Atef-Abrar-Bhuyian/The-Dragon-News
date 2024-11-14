import moment from "moment";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 py-4">
      <div>
        <img className="w-[300px]" src={logo} alt="" />
      </div>
      <h2 className="text-gray-400">Journalism Without Fear and Favor</h2>
      <p className="text-gray-600 font-semibold">
        {moment().format("dddd, MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default Header;
