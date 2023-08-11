import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

export const Services = () => {
  const navigate = useNavigate();

  const posit = {
    width: "100%",
  };
  return (
    <>
      <div className="main1">
        <img style={posit} src="./images/servicepic1.svg" alt="Search" />
        <div className="main_in">
          <h1 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Services</h1>
          <p>Home/Services</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="row">
        <div className="column">
          <h2 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Project Plan</h2>
          <p>
          There are many variations of the<br/>passages of lorem Ipsum from<br/>
          available, majority.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />{" "}
          </span>
        </div>
        <div className="column">
          <h2 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Interior Work</h2>
          <p>
          There are many variations of the<br/>passages of lorem Ipsum from<br/>
          available,majority.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />{" "}
          </span>
        </div>
        <div className="column">
          <h2 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Retail Design</h2>
          <p>
          There are many variations of the<br/>passages of lorem Ipsum from<br/>
          available,majority.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />
          </span>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="column">
          <h2 style={{fontFamily: "times new roman",fontWeight: "bold"}}>2d/3d Art Work</h2>
          <p>
          There are many variations of the<br/>passages of lorem Ipsum from<br/>
          available,majority.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />{" "}
          </span>
        </div>
        <div className="column">
          <h2 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Interior Work</h2>
          <p>
          There are many variations of the<br/>passages of lorem Ipsum from<br/>
          available,majority.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />{" "}
          </span>
        </div>
        <div className="column">
          <h2 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Decoration Work</h2>
          <p>
          There are many variations of the<br/>passages of lorem Ipsum from<br/>
          available,majority.
          </p>
          <br />
          <span>
            Read More
            <img src="./images/right.svg" alt="logo" />
          </span>
        </div>
      </div>

      <div className="ser_container">
        <h1 style={{fontFamily: "times new roman",fontWeight: "bold"}}>How We Work</h1>
        <p>
        It is a long established fact  will be distracted.
        Lorem Ipsum is simply dummy text of<br/>
        the printing and typesetting industry.
        </p>
        <br />
        <br />
        <br />
        <div>
          <img
            src="./images/servicepic2.svg"
            style={{
              float: "left",
              height: "300px",
              borderRadius: "0 50px 0 200px",
            }}
          />
          <img src="./images/icon1.svg" style={{marginRight: "210px"}}/>
          <br />
          <br />
          <br />
          <h4 style={{fontFamily: "times new roman",fontWeight: "bold",marginRight: "19%"}}>
            <b>Concept & Details</b>
          </h4>
          <p>
          It is a long established fact  will be distracted.<br/>
          Lorem Ipsum is simply dummy from text of the<br/>
          and typesetting industry. 
          </p>
        </div>
        <br />
        <br />
        <div style={{ marginTop: "100px" }}>
          <img
            src="./images/servicepic3.svg"
            style={{
              float: "right",
              height: "300px",
              borderRadius: "0 50px 0 200px",
            }}
          />
          <img src="./images/Pen.svg" style={{marginRight: "230px"}}/>
          <br />
          <br />
          <br />
          <h4 style={{fontFamily: "times new roman",marginRight: "66%"}}>
            <b>Idea for Work</b>
          </h4 >
          <p>
          It is a long established fact  will be distracted.<br/>
          Lorem Ipsum is simply dummy from text of the<br/>
          and typesetting industry. 
          </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div style={{ marginTop: "100px" }}>
          <img
            src="./images/servicepic4.svg"
            style={{
              float: "left",
              height: "300px",
              borderRadius: "0 50px 0 200px",
            }}
          />
          <img src="./images/icon3.svg" style={{marginRight: "210px"}}/>
          <br />
          <br />
          <br />
          <h4 style={{fontFamily: "times new roman",marginRight: "36%"}}>
            <b>Design</b>
          </h4>
          <p>
          It is a long established fact  will be distracted.<br/>
          Lorem Ipsum is simply dummy from text of the<br/>
          and typesetting industry. 
          </p>
        </div>
        <br />
        <br />
        <div style={{ marginTop: "100px" }}>
          <img
            src="./images/servicepic5.svg"
            style={{
              float: "right",
              height: "300px",
              borderRadius: "0 50px 0 200px",
            }}
          />
          <img src="./images/Flag.svg" style={{marginRight: "210px"}}/>
          <br />
          <br />
          <br />
          <h4 style={{fontFamily: "times new roman",marginRight: "72%"}}>
            <b>Perfection</b>
          </h4>
          <p>
          It is a long established fact  will be distracted.<br/>
          Lorem Ipsum is simply dummy from text of the<br/>
          and typesetting industry. 
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="conatiner7">
        <h1 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Wanna Join The Interno ?</h1>
        <p>It is a long established fact will be distracted</p>
        <button className="butt" onClick={() => navigate("/Contact")}>
          Contact With US <img src="./images/last_right.svg" alt="logo" />
        </button>
      </div>
    </>
  );
};
