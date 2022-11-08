import React, { useState } from 'react';
import '../../styles/posts.css';
import { AiOutlineLink, AiTwotoneHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";



const Posts = ({postsData, commentToggle}) => {

  // Add "view more" option to description and identity marks

  let windowWidth = window.innerWidth;//get size of screen

  // length of strin (no.of characters of desc, identity marks)
  var limitdesc = 130;
  var limitidentity = 70;

  if (windowWidth < 500){
    limitdesc = 60;
    limitidentity = 25;
  }
  else if (windowWidth < 750){
    limitdesc = 90;
    limitidentity = 40;
  }

  // original length of data
  let descLen = postsData.description.length;
  let identityLen = postsData.identityMarks.length;

  // to note whether toggle is opened or not  
  const [isReadMoreShownDesc, setReadMoreShownDesc] = useState(false);
  const [isReadMoreShownIdentity, setReadMoreShownIdentity] = useState(false);

  const toggleIdentity =(e) =>{
    e.preventDefault();
    setReadMoreShownIdentity(prevState => !prevState);
  }

  const toggledesc =(e) =>{
    e.preventDefault();
    setReadMoreShownDesc(prevState => !prevState);
  }


  // //User Found or Lost Notification
  let LFNstyle = {};
  if (postsData.foundOrLost === 'lost') {
    LFNstyle={color:'rgb(249, 27, 31)'};
  }else if (postsData.foundOrLost === 'found'){
    LFNstyle={color:'rgb(27, 249, 108)'};
  }else{
    LFNstyle={display:'none'};
  }


  // Support button (Like)

  const Support =(e) => {
    e.preventDefault();
    
  }

  
  let Supportstyle = {};
  if (postsData.supported) {
    Supportstyle={color: 'rgb(18, 180, 249)'};
  }else if (!postsData.supported){
    Supportstyle={color: 'rgb(185, 215, 249)'};
  }

  let kidPostFeatures = {};
  if (postsData.postType !== 'kid'){
    kidPostFeatures = {
      display: 'none'
    }
  }

  let petPostFeatures = {};
  if (postsData.postType !== 'pet'){
    petPostFeatures = {
      display: 'none'
    }
  }

  let genPostFeatures = {};
  let hideIdentityFeature = {};
  if (postsData.postType !== 'general'){
    genPostFeatures = {
      display: 'none'
    }
  }
  else{
      hideIdentityFeature = {
        display: 'none'
      }
  }


  return (
    <>
    <div className="Post">

        <div className="postTop">
          <img src={postsData.userpic} alt="" className="userpic" />
          <h3 className="usernameTop">{postsData.username}</h3>
          <HiSpeakerphone className='foundOrLostNotify' style={LFNstyle}/>
        </div>

        <img className='postimg' src={postsData.postImg} alt="" />


        <div className="postReact">
            <div className="supliconcol"><AiTwotoneHeart className='support reactbtn' name='support' onClick={Support} style={Supportstyle}/>
            <label htmlFor="support" className='supportCount'>{postsData.supports}</label></div>
            <BiCommentDetail className='comment reactbtn' onClick={commentToggle}/>
            <FiSend className='share reactbtn' />
            <div className="placeiconcol"><FaGlobeAmericas className='placeicon reactbtn' name='place' />
            <label htmlFor="place" className='place'>{postsData.location}</label></div>
        </div>


        <div className="detail">
            <div className="desccol datacol" ><span className="username" name='username'>{postsData.username} </span>
            <div className='descdataWithBtn'><label htmlFor='username' className="desc labeldata" id='desc'>{isReadMoreShownDesc ? postsData.description : postsData.description.substr(0, limitdesc) + "....."}</label>
            <button id='viewMoreDesc' className='viewMore' onClick={toggledesc} >{descLen > limitdesc ? (isReadMoreShownDesc ? "View less" : "View more") : '' }</button></div></div>
            <div className="namecol datacol " style = { kidPostFeatures}><span className="name datatitle" name='name'>Name: </span>
            <label htmlFor='name' className="breeddata labeldata " style = { kidPostFeatures}>{postsData.kidName}</label></div>
            <div className="agecol datacol" style = { kidPostFeatures}><span className="age datatitle" name='age'>Age: </span>
            <label htmlFor='age' className="agedata labeldata" style = { kidPostFeatures}>{postsData.kidAge} yrs</label></div>
            <div className="heightcol datacol" style = { kidPostFeatures}><span className="height datatitle" name='height'>Height: </span>
            <label htmlFor='height' className="heightdata labeldata" style = { kidPostFeatures}>{postsData.kidHeight} cm</label></div> 
            <div className="breedcol datacol" style = { petPostFeatures}><span className="breed datatitle" name='breed'>Breed: </span>
            <label htmlFor='breed' className="breeddata labeldata" style = { petPostFeatures}>{postsData.petBreed}</label></div>
            <div className="agecol datacol" style = { petPostFeatures}><span className="age datatitle" name='age'>Age: </span>
            <label htmlFor='age' className="agedata labeldata" style = { petPostFeatures}>{postsData.petAge} yrs</label></div>
            <div className="colorcol datacol" style = { petPostFeatures}><span className="color datatitle" name='color'>Color: </span>
            <label htmlFor='color' className="colordata labeldata" style = { petPostFeatures}>{postsData.petColor}</label></div>
            <div className="idcol datacol"style = { hideIdentityFeature}><span className="identity datatitle" name='identity'>IdentityMarks: </span>
            <div className='identitydataWithBtn'><label htmlFor='identity' className="identitydata labeldata">{isReadMoreShownIdentity ? postsData.identityMarks : postsData.identityMarks.substr(0,limitidentity) + "....."}</label>
            <button id='viewMoreIdentitypet' className='viewMore' onClick={toggleIdentity} >{identityLen > limitidentity ? (isReadMoreShownIdentity ? "View less" : "View more") : ''}</button></div></div>
            <div className="genpost-linkdiv" style = { genPostFeatures}><AiOutlineLink name='linkIcon'  />
            <label htmlFor='linkIcon'><a href={postsData.generalLink} target='_blank' rel="noreferrer" className='genPostLink'>{postsData.generalLink}</a></label></div>
        </div>
    </div>
    </>
  )

}

export default Posts