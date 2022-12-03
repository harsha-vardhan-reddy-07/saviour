import React, { useEffect } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Postsection from '../../components/PostSection'
import '../../styles/profilePage.css'
import Profilecard from '../../components/Profilecard';
import { postsData } from '../../Data/profilePageData';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../Context/AuthContext';

const Profile = () => {

  const navigate = useNavigate();
  const {user} = UserAuth();

  useEffect(() => {
    if (user == null){
      navigate('/login');
    }
  },[user, navigate]);

  const {logOut} = UserAuth();
  const handleLogout = async () =>{
    try{
      await logOut();
    }catch(error){
      console.log(error);
    }
  };

  let handleArrowClick = () =>{
    navigate('/');
  }

  return (
    <>


    <div className='profilePageNav'> 
    <BiArrowBack id='arrowProfilePage' onClick={handleArrowClick}/>
    <button className="logoutBtn" onClick={handleLogout}>Logout</button>
    </div>
    <Profilecard />
    <div id='postSectionInProfilePage' >
    <Postsection postsData = {postsData}  />
    </div>
    </>
  )
}

export default Profile