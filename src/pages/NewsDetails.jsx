import { useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-components/RightNav";
import NewsDetailsCard from "../components/NewsDetailsCard";

const NewsDetails = () => {
    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto md:grid grid-cols-12 gap-5">
      <section className="col-span-9 mb-10">
        <h2 className="font-semibold mb-3">Dragon News</h2>
        <NewsDetailsCard news={news}></NewsDetailsCard>
      </section>
      <aside className="col-span-3">
        <RightNav></RightNav>
      </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
