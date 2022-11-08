import { useState } from 'react';
import Comments from '../../components/Comments';
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

  const commentToggle = () => {
    setCommentBoxOpen(!isCommentBoxOpen);
  };

//   const [isCreatePostOpen, setCreatePostOpen] = useState(true);

//   const createPostToggle = () => {
//     setCreatePostOpen(!isCreatePostOpen);
//   };

//   const [isCreatePetPostOpen, setCreatePetPostOpen] = useState(true);

//   const createPetPostToggle = () => {
//     setCreatePetPostOpen(!isCreatePetPostOpen);
//   };


  return (
    <div className="App">

      <Logo />
      {/* <Profilecard /> */}
      <Navbar  />
      <Postsection commentToggle = {commentToggle}/>
      <Comments isCommentBoxOpen = {isCommentBoxOpen} commentToggle = {commentToggle} />
      {/* <Suggestions />
      <Comments isCommentBoxOpen = {isCommentBoxOpen} commentToggle = {commentToggle} />
      <CreatePost isCreatePostOpen={isCreatePostOpen} createPostToggle={createPostToggle} />
      <CreatePetPost isCreatePetPostOpen={isCreatePetPostOpen} createPetPostToggle={createPetPostToggle} />
      <Postsection commentToggle = {commentToggle}  /> */}
    </div>
  );
}

export default Home;
