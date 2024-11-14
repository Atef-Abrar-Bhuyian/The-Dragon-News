import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold mb-2">Login With</h2>
      <div className=" *:w-full space-y-2">
        <button className="btn">
          <FcGoogle className="text-xl" /> Login With Google
        </button>
        <button className="btn">
          <FaGithub className="text-xl" />
          Login With Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
