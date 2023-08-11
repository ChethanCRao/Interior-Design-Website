import React from "react";
import "../App.css";

export default function Blog() {
  const posit = {
    width: "100%",
  };
  return (
    <>
      <div className="main1">
        <img style={posit} src="./images/blog1.svg" alt="Search" />
        <div className="main_in">
          <h1 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Articles & News</h1>
          <p>Home/Blog</p>
        </div>
      </div>
      <div className="blog_container">
        <h2 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Latest Post</h2>
        <br />
        <br />
        <img
          style={{ height: "300px", float: "left", borderRadius: "30px" }}
          src="./images/blog2.svg"
          alt="Search"
        />
        <div style={{ marginLeft: "400px" }}>
          <b style={{fontFamily: "times new roman",fontWeight: "bold",fontSize: "20px"}}>
            Low Cost Latest Invented Interior <br /> Designing Ideas
          </b>
          <br />
          <br />
          <p>
          Lorem ipsum dolor sit amet, adipiscing Aliquam
          <br/>eu sem vitae turpis dignissim maximus.posuere
          <br/>in.Contrary to popular belief.<br/><br/>
          Lorem Ipsum is not simply random text. It has<br/>
          roots in a piece of classica.
          </p>
          <br/>
          <p>
            26 December,2022
          </p>
          <img className="vecRight" src="./images/vector_right.svg"/>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div>
          <h2 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Articles & News</h2>
          <br />
          <div className="row">
            <div className="blogcol">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px",marginRight: "30%"}}
                  src="./images/art_pic1.svg"
                />
                <div className="main2">
                  <span>Kitchen Design</span>
                </div>
              </div>
              <h4 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Let's Get Solution For<br/>
              Building Construction <br/>Work</h4>
              <p>
                26 December,2022
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
            <div className="blogcol">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px",marginRight: "30%"}}
                  src="./images/art_pic2.svg"
                />
                <div className="main2">
                  <span>Living Design</span>
                </div>
              </div>
              <h4 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Low Cost Latest Invented<br/>
              Interior Designing<br/>Ideas.</h4>
              <p>
                22 December,2022
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
            <div className="blogcol">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px",marginRight: "30%",marginTop: "20px"}}
                  src="./images/art_pic3.svg"
                />
                <div className="main2">
                  <span>Interior Design</span>
                </div>
              </div>
              <h4 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Best For Any Offices &<br/>
              Business Interior
              <br/>Solution</h4>
              <p>
                25 December,2022
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
            <div className="blogcol">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px",marginRight: "30%",marginTop: "20px"}}
                  src="./images/blog5.svg"
                />
                <div className="main2">
                  <span>Kitchen Design</span>
                </div>
              </div>
              <h4 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Best For Any Offices &<br/>
              Business Interior<br/>Solution</h4>
              <p>
                26 December,2022
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
            <div className="blogcol">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px",marginRight: "30%",marginTop: "40px"}}
                  src="./images/blog6.svg"
                />
                <div className="main2">
                  <span>Living Design</span>
                </div>
              </div>
              <h4 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Best For Any Offices &<br/>
              Business Interior<br/>Solution</h4>
              <p>
                22 December,2022
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
            <div className="blogcol">
              <div className="main1">
                <img
                  style={{ height: "250px", borderRadius: "30px",marginRight: "30%",marginTop: "40px"}}
                  src="./images/blog7.svg"
                />
                <div className="main2">
                  <span>Interior Design</span>
                </div>
              </div>
              <h4 style={{fontFamily: "times new roman",fontWeight: "bold"}}>Best For Any Offices &<br/>
              Business Interior<br/>Solution</h4>
              <p>
                25 December,2022
                <img className="vecRight" src="./images/vector_right.svg" />
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
