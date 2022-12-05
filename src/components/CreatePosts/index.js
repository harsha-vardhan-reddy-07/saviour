import React from 'react';
import { IoClose } from 'react-icons/io5';
import '../../styles/createPost.css';
import { db, storage } from '../../firebase';
import { useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { UserAuth } from '../../Context/AuthContext';
import { addDoc, collection } from 'firebase/firestore';





const CreatePost = ({createPostToggle, isCreatePostOpen, inputButtonsDisplay, setInputButtonsDisplay, createInputType, setCreateInputType}) => {


  let hidePet = 'unset';
  if (createInputType !== 'pet'){
    hidePet = 'none';
  }
  else{
    hidePet = 'unset';
  }

  let hideKid = 'unset';
  if (createInputType !== 'kid'){
    hideKid = 'none';
  }
  else{
    hideKid = 'unset';
  }

  let hideGeneral = 'unset';
  let displayRemain = 'unset';
  if (createInputType !== 'general'){
    hideGeneral = 'none';
    displayRemain = 'unset';
  }
  else{
    hideGeneral = 'unset';
    displayRemain = 'none';
  }


  const closePostBtnHandle =() =>{
    createPostToggle();
    setInputButtonsDisplay(true);
    setCreateInputType('Na');
  }

  let createPostDisplay = {};
  
    if(isCreatePostOpen){
        createPostDisplay = {display: 'none'}
    }


  let displayCreateKidPostInput = () =>{

    setCreateInputType('kid');
    // hide input fields and buttons.
    setInputButtonsDisplay(false);
    document.getElementById('createPostButtonContainer').style.display = "none";
    document.getElementById('createPostInputContainer').style.display = "contents";
  }

  let displayCreatePetPostInput = () =>{

    setCreateInputType('pet');
    // hide input fields and buttons.
    setInputButtonsDisplay(false);
    document.getElementById('createPostButtonContainer').style.display = "none";
    document.getElementById('createPostInputContainer').style.display = "contents";
  }

  let displayCreateGeneralPostInput = (e) =>{

    setCreateInputType('general');
    // hide input fields and buttons.
    setInputButtonsDisplay(false);
    document.getElementById('createPostButtonContainer').style.display = "none";
    document.getElementById('createPostInputContainer').style.display = "contents";

  }


  //upload data
  const [uploadImg, setUploadImg] = useState('');
  const {user} = UserAuth(); 
  const [postImageUrl, setPostImageUrl] = useState('');
  const [foundOrLost, setfoundOrLost] = useState('');
  const [location, setlocation] = useState('');
  const [description, setdescription] = useState('');
  const [kidName, setkidName] = useState('');
  const [kidAge, setkidAge] = useState(0);
  const [kidHeight, setkidHeight] = useState(0);
  const [identityMarks, setidentityMarks] = useState('');
  const [petBreed, setpetBreed] = useState('');
  const [petAge, setpetAge] = useState(0);
  const [petColor, setpetColor] = useState('');
  const [generalLink, setgeneralLink] = useState('');

  const upload = () =>{
    if(uploadImg == null){
      alert("Please select an image!!!");
    }else{
      const imageref = ref(storage, '/images/'+user.uid+uploadImg.name);
      uploadBytes(imageref, uploadImg).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        getDownloadURL(ref(storage, '/images/'+user.uid+uploadImg.name))
        .then((url) => {
          setPostImageUrl(url);
          if (postImageUrl !== ''){
            addDoc(collection(db, "posts"), {
              ownerId: user.uid,
              username: user.displayName,
              userpic: user.photoURL,
              postType: createInputType,
              foundOrLost: foundOrLost,
              location: location,
              supports: 0,
              supported: false,
              postImg: postImageUrl,
              description: description,
              kidName: kidName,
              kidAge: kidAge,
              kidHeight: kidHeight,
              identityMarks: identityMarks,
              petBreed: petBreed,
              petAge: petAge,
              petColor: petColor,
              generalLink: generalLink
            });
            createPostToggle();
            setInputButtonsDisplay(true);
            setCreateInputType('Na');
          }
          
        })
        .catch((error) => {
          console.log(error);
        });
      });

    }    
  }

  

  return (
    <>
    <div className="createPostCard" id="createPostCard" style={createPostDisplay} >
        
        <IoClose className='closeCreatePost' onClick={closePostBtnHandle} />

        <h2 className="createPostTitle">Create post</h2>
        <hr className="CreatePostHr" />
      <div id="createPostButtonContainer" style = {inputButtonsDisplay ? {display: 'contents'}: {display: 'none'}}>
        <button className='createPostButtons' id="forKidBtn"  onClick={displayCreateKidPostInput} >For kid</button>
        <button className='createPostButtons' id="forPetBtn"  onClick={displayCreatePetPostInput}>For pet</button>
        <button className='createPostButtons' id="generalPostBtn"  onClick={displayCreateGeneralPostInput} >General post</button>
      </div>
      <div id='createPostInputContainer' style = {inputButtonsDisplay ? {display: 'none'}: {display: 'contents'}}>
        <input type="file" className='createPostInput' id='createPostImage' onChange={(e) => {setUploadImg(e.target.files[0])}} />
        <input type="text" className="createPostInput" id="createPostDesc" placeholder='Description' onChange={(e) => {setdescription(e.target.value)}} />
        <span style= {{display: "flex", flexDirection: "row"}}><input type="text" className="createPostInput" id="createPostKidName" placeholder='Name' style = {{display:hideKid}} onChange={(e) => {setkidName(e.target.value)}} />
        <input type="text" className="createPostInput hideRightMost" id="createPostKidAge" placeholder='Age' style = {{display:hideKid}} onChange={(e) => {setkidAge(e.target.value)}} /></span>
        <span style= {{display: "flex", flexDirection: "row"}}><input type="text" className="createPostInput" id="createPostPetBreed" placeholder='Breed' style = {{display:hidePet}} onChange={(e) => {setpetBreed(e.target.value)}}  />
        <input type="text" className="createPostInput hideRightMost" id="createPostPetAge" placeholder='Age' style = {{display:hidePet}} onChange={(e) => {setpetAge(e.target.value)}} /></span>
        <span style= {{display: "flex", flexDirection: "row"}}>
          <input type="text" className="createPostInput" id="createPostKidHeight" placeholder='Height' style = {{display:hideKid}} onChange={(e) => {setkidHeight(e.target.value)}} />
          <input type="text" className="createPostInput" id="createPostPetColor" placeholder='Color' style = {{display:hidePet}} onChange={(e) => {setpetColor(e.target.value)}} />
          <input type="text" className="createPostInput" id="createPostGeneralLink" placeholder='Link' style = {{display:hideGeneral}} onChange={(e) => {setgeneralLink(e.target.value)}} />
        <input type="text" className="createPostInput hideRightMost" id="createPostKidLocation" placeholder='Location' onChange={(e) => {setlocation(e.target.value)}} /></span>
        <span style= {{display: "flex", flexDirection: "row"}} ><input type="text" className="createPostInput" id="createPostIdentity" placeholder='Identity Marks' style = {{display:displayRemain}} onChange={(e) => {setidentityMarks(e.target.value)}} />
        <select id="createPostType" className="createPostInput hideRightMost" style = {{display:displayRemain}} onChange={(e) => {setfoundOrLost(e.target.value)}} ><option value="Found" >Found</option><option value="Lost">Lost</option></select></span>
        <input type="submit" className='button' id='createPostUpload' value="Upload" onClick={upload} />
      </div>
    </div>
    
    </>
  )
  

}

export default CreatePost