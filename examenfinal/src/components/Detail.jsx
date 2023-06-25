import "./module.css";
import { useContext, useState } from "react";
import { ThemeDataContext } from "../contexts/ThemeDataContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function Detail() {
  const { data } = useContext(ThemeDataContext);
  
  const params = useParams();
  const userId = params.id;
;
  

  return (
    <>
        <div>holis</div>
      {/* <p>name: {user.id} </p>
    <p>username: {user.username}</p> */}
    {/* <p>email: {data[userId - 1].email}</p>
    <p>address: {data[userId - 1].address}</p>
    <p>phone: {data[userId - 1].phone}</p>
    <p>website: {data[userId - 1].website}</p>
    <p>company: {data[userId - 1].company} </p> */}
    </>
  );
}
export default Detail;
