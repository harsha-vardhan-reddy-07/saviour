import React from "react";
import Cover from "../../img/coverpic.jpeg";
import Profile from "../../img/harsha.jpg";
import "../../styles/ProfileCard.css";

  
  
  
    const openProfilePage = () => {
        // history.push("/profile")
        alert("hiii");
    }


const Profilecard = () => {
  return (
    <div className="ProfileCard" onClick={openProfilePage}>
      <div className="ProfileImages">
        <img src={Cover} alt="" className="coverPic" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName" >
        <span>Harsha</span>
        <span>Eat🤤|Sleep😴|Repeat😉</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>256</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>225</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>300</span>
            <span>Posts</span>
          </div>
        </div>
        <hr />
      </div>
      
    </div>
  );
};

export default Profilecard;
