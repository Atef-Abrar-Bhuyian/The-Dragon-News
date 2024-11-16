import { Link, useNavigate } from "react-router-dom";

const NewsDetailsCard = ({news}) => {
    const location = useNavigate();
    const {image_url, title,details} = news;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image_url}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-justify"> {details} </p>
        <div className="card-actions">
          <Link to={`/category/${news?.category_id}`} className="btn btn-neutral">Back To Categoiry</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
