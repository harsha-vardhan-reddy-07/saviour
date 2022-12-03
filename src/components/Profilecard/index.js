import React from "react";
import Cover from "../../img/coverpic.jpeg";
import Profile from "../../img/harsha.jpg";
import "../../styles/ProfileCard.css";
import { UserAuth } from "../../Context/AuthContext";


const Profilecard = () => {

  const {user} = UserAuth();
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" className="coverPic" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName" >
        <span>{user.displayName}</span>
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
