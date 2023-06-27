import "./module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Card({ data }) {
  const [isLiked, setIsLiked] = useState();

  const addFav = () => {
    const newIsLiked = !isLiked;
    setIsLiked(newIsLiked);

    if (newIsLiked) {
      window.localStorage.setItem(`idCardLikeada_${data.id}`, data.id);
    } else {
      window.localStorage.removeItem(`idCardLikeada_${data.id}`);
    }
  };

  return (
    <>
      <div key={data.id} className={`card ${isLiked ? "like" : "dislike"}`}>
        <Link to={`/dentist/${data.id}`} className="link">
          <p>{data.name}</p>
          <p>{data.username}</p>
          <p>{data.email}</p>
        </Link>
        <button onClick={addFav}>
          <i className={isLiked ? "like" : "dislike"}>♥</i>
        </button>
      </div>
    </>
  );
}

export default Card;
