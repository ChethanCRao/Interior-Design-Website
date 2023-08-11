import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Homepage() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="parent">
          <img src="./images/Photo.svg" className="center" alt="Search" />
          <h2 className="bottom-left">
            Let Your Home <br /> Be Unique
          </h2>
          <p className="bot-left">
          There are many variations of the passages of
            <br />
            lorem Ipsum from available,majority
          </p>
          <button className="btn1" onClick={() => navigate("/Error404")}>
            Get Started <img src="./images/right.svg" alt="logo" />
          </button>
        </div>
        <div className="row" style={{ marginTop: "180px",marginLeft: "19px",marginRight: "110px"}}>
  <div className="column" style={{ fontSize: "19px", fontFamily: "calibri" }}>
  <h2 style={{ fontFamily: "Times New Roman" }}><b>Project Plan</b></h2>
    <p>
      There are many variations of the<br/>passages of lorem Ipsum from<br/>available, majority.
    </p>
    <br />
    <span>
      Read More
      <img src="./images/right.svg" alt="logo" />{" "}
    </span>
  </div>
  <div className="column" style={{ fontSize: "19px", fontFamily: "calibri" }}>
  <h2 style={{ fontFamily: "Times New Roman" }}><b>Interior Work</b></h2>
    <p>
      There are many variations of the<br/>passages of lorem Ipsum from<br/>available, majority.
    </p>
    <br />
    <span>
      Read More
      <img src="./images/right.svg" alt="logo" />{" "}
    </span>
  </div>
  <div className="column" style={{ fontSize: "19px", fontFamily: "calibri" }}>
  <h2 style={{ fontFamily: "Times New Roman" }}><b>Realizations</b></h2>
    <p>
      There are many variations of the<br/>passages of lorem Ipsum from<br/>available, majority.
    </p>
    <br />
    <span>
      Read More
      <img src="./images/right.svg" alt="logo" />
    </span>
  </div>
</div>
        <div className="Container2">
          <img
            className="img_deg"
            style={{ width: "45%",marginRight: "70px"}}
            src="./images/Photo1.svg"
            alt="logo"
          />
          <h2 style={{ fontFamily: "Times New Roman", fontWeight: "bold", fontSize: "45px" }}>
          We Create The Art <br /> Of Styling Living <br /> Stylishly
          </h2>
          <br />
          <br />
          <p style={{ marginTop: "-30px", fontSize: "20px" }}>
           It is a long established fact that a reader will be<br />
           distracted by the of readable content of a page<br />
           when looking at its layouts the points of using<br />
           that it has a more-or-less normal.
          </p>
          <br />
          <br />
          <img src="./images/call.svg" alt="logo" style={{ marginTop: "18px", marginLeft: "10px" }} />
          <span style={{ marginLeft: "40px", fontSize: "20px" }}>
  <b>012345678</b>
  <br />
  <span style={{ marginLeft: "80px"}}>
  Call Us Anytime
</span>
</span>
          <br />
          <br />
          <button className="btn2" onClick={() => navigate("/Error404")}>
            Get Free Estimated <img src="./images/right.svg" alt="logo" />
          </button>
          <br />
        </div>
        <div className="container3" style={{marginRight: "210px"}}>
        <h2 style={{ fontFamily: "Times New Roman", fontWeight: "bold", fontSize: "38px", marginBottom: "30px",marginLeft: "170px"}}>
  What the People Thinks<br/>About Us
</h2>
          <div className="column">
            <img className="img_rad" src="./images/pic1.svg" alt="logo" />
            <h5 style={{ fontFamily: "Times New Roman",fontWeight: "bold"}}>Nattasha Mith</h5>
            Sydney, USA
            <p className="about-us">Lorem Ipsum is simply dummy<br/>
            text of the typesetting industry <br/>
            Ipsum has been.</p>                           
          </div>

          <div className="column">
            <img className="img_rad" src="./images/pic2.svg" alt="logo" />
            <h5 style={{ fontFamily: "Times New Roman",fontWeight: "bold"}}>Raymond Galario</h5>
            Sydney, Australia
            <p>
            Lorem Ipsum is simply dummy<br/>
            text of the typesetting industry<br/>
            Ipsum has been scrambled it
            <br/>to make a type book.
            </p>
            <br />
          </div>

          <div className="column">
            <img className="img_rad" src="./images/pic3.svg" alt="logo" />
            <h5 style={{ fontFamily: "Times New Roman",fontWeight: "bold"}}>Benny Roll</h5>
            Sydney, New York
            <p>
            Lorem Ipsum is simply dummy<br/>
            text of the typesetting industry<br/>
            Ipsum has been scrambled.
            </p>
            <br />
          </div>
        </div>

        <div className="Container3">
          <img className="Client" src="./images/Client Logo.svg" alt="logo" />
        </div>

        <div className="container4" style={{marginRight: "250px"}}>
          <h1 style={{fontFamily: "times new roman",fontWeight: "bold",marginLeft: "190px"}}>Follow Our Projects</h1>
          <br />
          <p style={{marginLeft: "190px"}}>
            Its is a Long established fact that a reader will be distracted by
            the of readable <br />
            content of page looking at its layouts points.
          </p>
          <br />
          <br />
          <div className="row">
            <div className="col">
              <img className="col1" src="./images/propic1.svg" alt="logo" />
              <br />
              <p style={{ fontFamily: "Times New Roman",fontSize: "20px",marginTop: "10px"}}>
              <b>Modern Kitchen</b></p>
              <p style={{ marginTop: "-15px" }}>Decor/Architecture</p>
              <img
                className="vecRight"
                src="./images/vector_right.svg"
                alt="logo"
              />
            </div>
            <div className="col">
              <img className="col2" src="./images/propic2.svg" alt="logo" />
              <br />
              <p style={{ fontFamily: "Times New Roman",fontSize: "20px",marginTop: "10px"}}>
              <b>Modern Kitchen</b></p>
              <p style={{ marginTop: "-15px" }}>Decor/Architecture</p>
              <img
                className="vecRight"
                src="./images/vector_right.svg"
                alt="logo"
              />
            </div>
            <h1></h1>
            <div className="col">
              <img className="col3" src="./images/propic3.svg" alt="logo" />
              <br />
              <p style={{ fontFamily: "Times New Roman",fontSize: "20px",marginTop: "10px"}}>
              <b>Modern Kitchen</b></p>
              <p style={{ marginTop: "-15px" }}>Decor/Architecture</p>
              <img
                className="vecRight"
                src="./images/vector_right.svg"
                alt="logo"
              />
            </div>
            <div className="col">
              <img className="col4" src="./images/propic4.svg" alt="logo" />
              <br />
              <p style={{ fontFamily: "Times New Roman",fontSize: "20px",marginTop: "10px"}}>
              <b>Modern Kitchen</b></p>
              <p style={{ marginTop: "-15px" }}>Decor/Architecture</p>
              <img
                className="vecRight"
                src="./images/vector_right.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="container5">
          <div className="padd">
            <h2 className="colour">12</h2>
            <p>Year of Experince</p>
          </div>
          <div class="vl"></div>
          <div className="padd">
            <h2 className="colour">85</h2>
            <p>Success Project</p>
          </div>
          <div class="vl"></div>
          <div className="padd">
            <h2 className="colour">15</h2>
            <p>Active Project</p>
          </div>
          <div class="vl"></div>
          <div className="padd">
            <h2 className="colour">95</h2>
            <p>Happy Coustomer</p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <div className="container6" style={{marginRight: "150px"}}>
          <h1 style={{ fontFamily: "Times New Roman",fontWeight: "bold",marginLeft: "150px"}}>Articles & News</h1>
          <p style={{marginLeft: "150px"}}>
          It is a long established fact that a reader will be distracted by the of readable<br/>
          content of a page when lookings at its layouts the points of using.
          </p>
          <br />
          <div className="row">
            <div className="column">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px" }}
                  src="./images/art_pic1.svg"
                />
                <div className="main2">
                  <span>Kitchen Design</span>
                </div>
              </div>
              <h4 style={{ fontFamily: "Times New Roman", fontWeight: "bold", textAlign: "left", marginTop: "10px"}}>
  Let's Get Solution For<br/>Building Construction<br/>Work
</h4>

              <p style={{textAlign: "left"}}>
                26 December,2022{" "}
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
            <div className="column">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px" }}
                  src="./images/art_pic2.svg"
                />
                <div className="main2">
                  <span>Living Design</span>
                </div>
              </div>
              <h4 style={{fontFamily: "Times New Roman", fontWeight: "bold", textAlign: "left", marginTop: "10px"}}>Low Cost Latest Invented<br/>Interior Designing<br/>Ideas.</h4>
              <p style={{textAlign: "left"}}>
                22 December,2022{" "}
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
            <div className="column">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px" }}
                  src="./images/art_pic3.svg"
                />
                <div className="main2">
                  <span>Interior Design</span>
                </div>
              </div>
              <h4 style={{ fontFamily: "Times New Roman", fontWeight: "bold", textAlign: "left", marginTop: "10px"}}>Best For Any Offices &<br/>Business Interior<br/>
              Solution</h4>
              <p style={{textAlign: "left"}}>
                25 December,2022{" "}
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="conatiner7">
        <h1 style={{ fontFamily: "Times New Roman",fontWeight: "bold"}}>Wanna Join The Interno ?</h1>
          <p>It is a long established fact will be distracted</p>
          <button className="butt" onClick={() => navigate("/Contact")}>
            Contact With US <img src="./images/last_right.svg" alt="logo" />
          </button>
        </div>
      </div>
    </>
  );
}
