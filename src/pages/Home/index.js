import { useState } from 'react';
import Comments from '../../components/Comments';
import CreatePost from '../../components/CreatePosts';
// import CreatePost from '../../components/CreatePost';
// import CreatePetPost from '../../components/CreatePetPost';
import Logo from '../../components/Logo';
import Navbar from '../../components/Navbar';

import Postsection from '../../components/PostSection';

// import postsData from '../../Data/postsData';

// import Postsection from '../../components/Postsection';
// import Profilecard from '../../components/Profilecard';
// import Suggestions from '../../components/Suggestions';

function Home() {

  const [isCommentBoxOpen, setCommentBoxOpen] = useState(true);
  // for comment box toggling
  const commentToggle = () => {
    setCommentBoxOpen(!isCommentBoxOpen);
  };



  const [isCreatePostOpen, setCreatePostOpen] = useState(true);
 //To monitor whether the create post dialogbox is open or closed
  const createPostToggle = () => {
    setCreatePostOpen(!isCreatePostOpen);
  };

  //to display input fields only when they are selected in create post
  const [inputButtonsDisplay, setInputButtonsDisplay] = useState(true);

  // to know the create post type. This helps to select & display the input fields w.r.t the post type
  const [createInputType, setCreateInputType] = useState('Na');



  return (
    <div className="App">

      <Logo />
      <Navbar createPostToggle={createPostToggle} setInputButtonsDisplay = {setInputButtonsDisplay} setCreateInputType = {setCreateInputType} />
      <Postsection commentToggle = {commentToggle}/>
      <Comments isCommentBoxOpen = {isCommentBoxOpen} commentToggle = {commentToggle} />
      <CreatePost isCreatePostOpen = {isCreatePostOpen} createPostToggle={createPostToggle} inputButtonsDisplay = {inputButtonsDisplay} setInputButtonsDisplay = {setInputButtonsDisplay} createInputType = {createInputType} setCreateInputType = {setCreateInputType} />
      {/* <Suggestions />
      <Comments isCommentBoxOpen = {isCommentBoxOpen} commentToggle = {commentToggle} />
      <CreatePost isCreatePostOpen={isCreatePostOpen} createPostToggle={createPostToggle} />
      <CreatePetPost isCreatePetPostOpen={isCreatePetPostOpen} createPetPostToggle={createPetPostToggle} />
      <Postsection commentToggle = {commentToggle}  /> */}
    </div>
  );
}

export default Home;
