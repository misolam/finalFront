import "./module.css";
import { useContext, useState, useEffect } from "react";
import { ThemeDataContext } from "../contexts/ThemeDataContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


function Detail() {
  const { data } = useContext(ThemeDataContext); 
  const params = useParams();

  const filteredData = data.filter(function (objeto) {
    return objeto.id === parseInt(params.id);
  });

  

  const userInfo = filteredData[0];
  console.log(userInfo);


  return (
    <div className="">
      <h1>{userInfo.name}</h1>
      <p>Email: {userInfo.email}</p>
      <p>Phone: {userInfo.phone}</p>
      <p>Address:</p>
      <ul>
        <li>Street: {userInfo.address.street}</li>
        <li>Suite: {userInfo.address.suite}</li>
        <li>City: {userInfo.address.city}</li>
        <li>Zipcode: {userInfo.address.zipcode}</li>
      </ul>
      <p>Company:</p>
      <ul>
        <li>Name: {userInfo.company.name}</li>
        <li>Catchphrase: {userInfo.company.catchPhrase}</li>
        <li>BS: {userInfo.company.bs}</li>
      </ul>
      <p>Username: {userInfo.username}</p>
      <p>Website: {userInfo.website}</p>
    </div>
  );
}
export default Detail;
