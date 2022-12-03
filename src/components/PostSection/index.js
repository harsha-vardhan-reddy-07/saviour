import React from 'react';
import '../../styles/posts.css';
import Posts from '../Posts';

const Postsection = ({commentToggle, postsData}) => {
  return (
    <>
    <div className="Postsection">
        {postsData.map((postsData, id)=>{
            return <Posts key={postsData.id}  postsData={postsData} id={id} commentToggle = {commentToggle} />
        })}
    </div>
    </>
  )
}

export default Postsection