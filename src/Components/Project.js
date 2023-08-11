import React from "react";
import "../App.css";

export const Project = () => {
  const posit = {
    width: "100%",
  };
  return (
    <>
      <div className="main1">
        <img style={posit} src="./images/blog25.png" alt="Search" />
        <div className="main_in">
          <h1 style={{ fontFamily: "times new roman", fontWeight: "bold" }}>Our Projects</h1>
          <p>Home/Project</p>
        </div>
      </div>
      <div className="project_cont">
        <div className="pro_col">
          <img
            style={{ height: "500px"}}
            src="./images/blocpic1.svg"
            alt="logo"/>
          <br />
          <b style={{ fontFamily: "times new roman", fontWeight: "bold", fontSize: "20px" }}>
            Minimal Bedroom
          </b>
          <br />
          <p>Decor/Architecture</p>
          <img className="vecRight" src="./images/vector_right.svg" alt="logo" />
        </div>
        <div className="pro_col">
          <img style={{ height: "330px"}} src="./images/project3.svg" alt="logo" />
          <br />
          <b style={{ fontFamily: "times new roman", fontWeight: "bold", fontSize: "20px" }}>
            Minimal Bedroom
          </b>
          <br />
          <p>Decor/Architecture</p>
          <img className="vecRight" src="./images/vector_right.svg" alt="logo" />
        </div>
        <div className="pro_col">
          <img style={{ height: "450px",width: "450px",marginRight: "20%"}} src="./images/project5.svg" alt="logo" />
          <br />
          <b style={{fontFamily: "times new roman",fontWeight: "bold", fontSize: "20px"}}>Modern Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img className="vecRight" src="./images/vector_right.svg" alt="logo" />
        </div>
        <div className="pro_col">
          <img style={{ height: "330px"}} src="./images/project4.svg" alt="logo" />
          <b style={{fontFamily: "times new roman",fontWeight: "bold", fontSize: "20px"}}>Classic Minimal Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img className="vecRight" src="./images/vector_right.svg" alt="logo"/>
        </div>
        <div className="pro_col">
          <img
            style={{ height: "500px", marginLeft: "15%"}}
            src="./images/project11.svg"
            alt="logo"
          />
          <br />
          <b style={{fontFamily: "times new roman",fontWeight: "bold", fontSize: "20px"}}>Minimal Bedroom Table</b>
          <br />
          <p>Decor/Architecture</p>
          <img className="vecRight" src="./images/vector_right.svg" alt="logo" />
        </div>
        <div className="pro_col">
          <img style={{ height: "330px" }} src="./images/project22.svg" alt="logo" />
          <br />
          <b style={{fontFamily: "times new roman",fontWeight: "bold", fontSize: "20px"}}>System Table</b>
          <br />
          <p>Decor/Architecture</p>
          <img className="vecRight" src="./images/vector_right.svg" alt="logo" />
        </div>
        <div className="pro_col">
          <img style={{ height: "350px"}} src="./images/project33.svg" alt="logo" />
          <br />
          <b style={{fontFamily: "times new roman",fontWeight: "bold", fontSize: "20px"}}>Modern Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img className="vecRight" src="./images/vector_right.svg" alt="logo" />
        </div>
        <div className="pro_col">
          <img style={{ height: "330px" }} src="./images/project44.svg" alt="logo" />
          <br />
          <b style={{fontFamily: "times new roman",fontWeight: "bold", fontSize: "20px"}}>Modern Bedroom</b>
          <br />
          <p>Decor/Architecture</p>
          <img className="vecRight" src="./images/vector_right.svg" alt="logo" />
        </div>
      </div>
    </>
  );
};
