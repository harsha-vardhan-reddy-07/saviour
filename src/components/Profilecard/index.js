import React from "react";
import Cover from "../../img/coverr.jpg";
import Profile from "../../img/harsha.jpg";
import "../../styles/ProfileCard.css";
import { UserAuth } from "../../Context/AuthContext";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useEffect } from "react";
import { useState } from "react";


const Profilecard = ({appUserId}) => {


  const {user} = UserAuth();

  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [posts, setPosts] = useState(0);
  const [profileImg, setProfileImg] = useState('');


  
    
  useEffect(() => {
      if (user !== null) {
            onSnapshot(doc(db, "users", user.uid), (doc) => {
            const userData = doc.data();
            setName(userData.name);
            setBio(userData.bio);
            setProfileImg(userData.profilePic);
            setFollowers(userData.followers);
            setFollowing(userData.following);
            setPosts(userData.posts);
          
        });
      
      }
   
  }, [user]);

  //   id = user.uid;
  //   if (id !== ''){
  //     console.log('id');
  //     // onSnapshot(doc(db, "users", id), (doc) => {
  //     //   console.log("Current data: ", doc.data());
  //     // })}
  //   }
    

    // onSnapshot(doc(db, "users", user.uid), (doc) => {
    //   const userData = doc.data();
      
      
    // });  
  

  return (
    <div className="ProfileCard" >
      <div className="ProfileImages">
        <img src={Cover} />
        <img src={profileImg} alt="" />
      </div>

      <div className="ProfileName" >
        <span>{name}</span>
        <span>{bio}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{following}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{followers}</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{posts}</span>
            <span>Posts</span>
          </div>
        </div>
        <hr />
      </div>
      
    </div>
  );
};

export default Profilecard;
