import React from 'react';
import '../../styles/posts.css';
import { postsData } from '../../Data/postsData';
import Posts from '../Posts';

const Postsection = ({commentToggle}) => {
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