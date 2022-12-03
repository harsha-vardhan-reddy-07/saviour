import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import Postsection from '../../components/PostSection'
import '../../styles/profilePage.css'
import Profilecard from '../../components/Profilecard';
import { postsData } from '../../Data/profilePageData';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();

  let handleArrowClick = () =>{
    navigate('/');
  }

  return (
    <>


    <div className='profilePageNav'> 
    <BiArrowBack id='arrowProfilePage' onClick={handleArrowClick}/>
    </div>
    <Profilecard />
    <div id='postSectionInProfilePage' >
    <Postsection postsData = {postsData}  />
    </div>
    </>
  )
}

export default Profile