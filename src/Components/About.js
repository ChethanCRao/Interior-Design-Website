import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function About() {
  const navigate = useNavigate();
  const posit = {
    width: "100%",
  };
  return (
    <>
      <div className="main1">
        <img style={posit} src="./images/about1.svg" alt="Search" />
        <div className="main_in">
          <h1 style={{fontFamily: "times new roman",fontWeight: "bold"}}>About US</h1>
          <p>Home/About Us</p>
        </div>
      </div>
      <div className="about_Container" style={{marginRight: ""}}>
        <span style={{ fontSize: "150px" }}>“</span>
        <h5>
          <i><b>
            I Like an interior that defines labeling. i don't <br />
            really Want someone to walk into a room and
            <br />
            know that i did it</b></i>
        </h5>
        <p>-BUNNY WILLIAMS </p>
        <br />
        <br />
        <br />
        <div style={{marginTop: "65px"}}>
          <img
            style={{ height: "250px", float: "right", borderRadius: "30px" }}
            src="./images/about2.svg"
            alt="Search"
          />
          <h3 style={{fontFamily: "times new roman",marginRight: "68%"}}>
            <b>What We Do </b>
          </h3>
          <br/>
          <p>
           It is a long established fact that a reader will be<br/>distracted by the of readable content of a page<br/>
           when lookings at its layouts the points of using <br/>that it has a more-or-less normal.
          </p>
          <button
            style={{
              paddingRight: "2%",
              paddingLeft: "2%",
              paddingTop: "15px",
              paddingBottom: "15px",
              borderRadius: "10px",
              backgroundColor: "#292F36",
              fontWeight: "bold",
              marginRight: "17%",
              color: "white",
            }}
            onClick={() => navigate("/Error404")}>
            Our Concpet <img src="./images/right.svg" alt="logo" />
          </button>
        </div>
        <div style={{ padding: "60px",marginTop: "50px"}}>
          <img
            style={{ height: "250px", float: "left", borderRadius: "30px"}}
            src="./images/about3.svg"
            alt="Search"
          />
          <h3 style={{fontFamily: "times new roman",marginRight: "18%",marginTop: "10px"}}>
            <b>The End Result </b>
          </h3>
          <br />
          <p>
          It is a long established fact that a reader will be<br/>
          distracted by the of readable content of a page<br/>
          when lookings at its layouts the points of using<br/>
          that it has a more-or-less normal.
          </p>
          <button
            style={{
              paddingRight: "2%",
              paddingLeft: "2%",
              paddingTop: "15px",
              paddingBottom: "15px",
              fontWeight: "bold",
              marginRight: "21%",
              borderRadius: "10px",
              backgroundColor: "#292F36",
              color: "white",
            }}
            onClick={() => navigate("/Error404")}
          >
            Our PortFolio <img src="./images/right.svg" alt="logo" />
          </button>
        </div>
      </div>
      <div className="about_container2">
        <h2 style={{fontFamily: "times new roman",fontWeight: "bold"}}>What the People Thinks<br/>About Us</h2>
        <div>
          <img
            style={{ borderRadius: "20px", padding: "10px" }}
            src="./images/about4.svg"
            alt="Search"
          />
          <img
            style={{ borderRadius: "20px", padding: "10px" }}
            src="./images/about5.svg"
            alt="Search"
          />
          <img
            style={{ borderRadius: "20px", padding: "10px" }}
            src="./images/about7.svg"
            alt="Search"
          />
        </div>
      </div>
      <div className="about_container3" style={{marginRight: "10px"}}>
        <h2 style={{fontFamily: "times new roman",fontWeight: "bold"}}>
          Creative Project? Let's have <br />a productive talk.
        </h2>
        <form>
          <input
            type="text"
            name="name"
            class="formStyle"
            placeholder="Name"
            required
          />
        <br/>
          <input
            type="email"
            name="email"
            class="formStyle"
            placeholder="Email"
            required
          />
          <br />
          <textarea
            type="text"
            name="email"
            class="formStyle"
            placeholder="Hello Iam Intrested In"
            required
          />
          <br />
          <button
            style={{
              paddingRight: "2%",
              paddingLeft: "2%",
              paddingTop: "15px",
              paddingBottom: "15px",
              fontWeight: "bold",
              borderRadius: "10px",
              backgroundColor: "#292F36",
              color: "white",
            }}
            onClick={() => navigate("/Error404")}
          >
            Send Now <img src="./images/right.svg" alt="logo" />
          </button>
        </form>
      </div>
    </>
  );
}
