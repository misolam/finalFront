import "./module.css";
import { useContext } from "react";
import { ThemeDataContext } from "../contexts/ThemeDataContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function Card() {
  const { data } = useContext(ThemeDataContext);
  console.log(data);


  return (
    <div className="container">


      {data.map((dato) => {
        return (
          
          <Link key={dato.id} to={`${dato.id}`} className="card">
            <p>{dato.name}</p>
            <p>{dato.username}</p>
            <p>{dato.email}</p>
          </Link>
          
        
        );
      })}

  
      </div>
  );
}
export default Card;
