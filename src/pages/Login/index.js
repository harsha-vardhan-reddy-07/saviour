import React, { useEffect } from 'react'
import '../../styles/loginPage.css'
import GoogleButton from 'react-google-button'

import { UserAuth } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

import { db } from '../../firebase'
import { doc, getDoc, setDoc } from "firebase/firestore";

const Login = () => {

  const {googleSignIn, user} = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn()
    
    }catch(error){
      console.log(error);
    }
  };
  useEffect(() => {
    if(user != null){

      navigate('/');

      //Creates new field if user logged in for thhe first time
      
      if (getDoc(doc(db, "users", user.uid)).exists){
        console.log(null)
      }else{
        setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          profilePic: user.photoURL,
          bio: "Update your bio!!",
          following: 0,
          followers: 0,
          posts: 0
        });
      }
      

    }
  }, [user, navigate]);


  return (
    <>

        <h3 className='loginPageHead'>Login Page</h3>
        <div className='googleLoginBtn'>
        <GoogleButton  onClick={handleGoogleSignIn}  />
        </div>


    </>
  )
}

export default Login;