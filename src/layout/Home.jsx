import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNav from "../components/layout-components/RightNav";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="md:w-11/12 mx-auto pt-5 md:grid md:grid-cols-12 gap-2 ">
      <aside className="col-span-3 w-full flex md:flex-none justify-center mb-4"><LeftNavbar></LeftNavbar></aside>
      <section className="col-span-6"> <Outlet></Outlet> </section>
      <aside className="col-span-3 w-11/12 mx-auto mt-5 md:mt-0"><RightNav></RightNav></aside>
      </main>
    </div>
  );
};

export default Home;
