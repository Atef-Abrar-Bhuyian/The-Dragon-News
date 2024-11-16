import React from "react";
import { FaStar, FaEye } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = (props = {}) => {
  const { news } = props || {};
  return (
    <div className="w-11/12 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <img
          className="w-10 h-10 rounded-full mr-4"
          src={news.author.img}
          alt={news.author.name}
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none font-semibold">{news.author.name}</p>
          <p className="text-gray-600">
            {new Date(news.author.published_date).toLocaleDateString()}
          </p>
        </div>
        <div className="ml-auto">
          <BsShare className="text-gray-600" />
        </div>
      </div>
      <img
        className="w-full h-48 object-cover"
        src={news.image_url}
        alt="News"
      />
      <div className="p-4">
        <h1 className="font-bold text-xl mb-2">{news.title}</h1>
        <p className="text-gray-700 text-base">
          {news.details.substring(0, 100)}...
          <Link to={`/news/${news._id}`} className="text-blue-500">
            Read More
          </Link>
        </p>
        <div className="mt-4 flex items-center">
          <div className="flex text-yellow-500">
            {[...Array(Math.floor(news.rating.number))].map((_, i) => (
              <FaStar key={i} />
            ))}
            {news.rating.number % 1 !== 0 && <FaStar className="half" />}
          </div>
          <span className="ml-2">{news.rating.number}</span>
          <span className="ml-2 text-gray-600">{news.rating.badge}</span>
          <div className="ml-auto flex items-center">
            <FaEye className="text-gray-600 mr-1" />
            <span>{news.total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
