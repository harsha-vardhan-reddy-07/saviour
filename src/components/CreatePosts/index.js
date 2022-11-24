import React from 'react';
import { IoClose } from 'react-icons/io5';
import '../../styles/createPost.css';





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
        <input type="file" className='createPostInput' id='createPostImage' />
        <input type="text" className="createPostInput" id="createPostDesc" placeholder='Description'/>
        <span style= {{display: "flex", flexDirection: "row"}}><input type="text" className="createPostInput" id="createPostKidName" placeholder='Name' style = {{display:hideKid}} />
        <input type="text" className="createPostInput hideRightMost" id="createPostKidAge" placeholder='Age' style = {{display:hideKid}} /></span>
        <span style= {{display: "flex", flexDirection: "row"}}><input type="text" className="createPostInput" id="createPostPetBreed" placeholder='Breed' style = {{display:hidePet}}  />
        <input type="text" className="createPostInput hideRightMost" id="createPostPetAge" placeholder='Age' style = {{display:hidePet}} /></span>
        <span style= {{display: "flex", flexDirection: "row"}}>
          <input type="text" className="createPostInput" id="createPostKidHeight" placeholder='Height' style = {{display:hideKid}} />
          <input type="text" className="createPostInput" id="createPostPetColor" placeholder='Color' style = {{display:hidePet}}/>
          <input type="text" className="createPostInput" id="createPostGeneralLink" placeholder='Link' style = {{display:hideGeneral}} />
        <input type="text" className="createPostInput hideRightMost" id="createPostKidLocation" placeholder='Location' /></span>
        <span style= {{display: "flex", flexDirection: "row"}} ><input type="text" className="createPostInput" id="createPostIdentity" placeholder='Identity Marks' style = {{display:displayRemain}} />
        <select id="createPostType" className="createPostInput hideRightMost" style = {{display:displayRemain}} ><option value="Found" >Found</option><option value="Lost">Lost</option></select></span>
        <input type="submit" className='button' id='createPostUpload' value="Upload" />
      </div>
    </div>
    
    </>
  )
  

}

export default CreatePost