import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="box11">
        <p className="heigh">404</p>
        <p className="font">
          <b style={{fontFamily: "times new roman"}}>
            We are sorry, But the page you <br />
            requested was not found
          </b>
        </p>
        <button className="btn11" onClick={() => navigate("/")}>
          Back To Home <img src="./images/right.svg" alt="logo" />
        </button>
      </div>
      <div className="box22">
        <img className="boxsize" src="./images/error.svg" alt="logo" />
        <br />
      </div>
    </div>
  );
}
