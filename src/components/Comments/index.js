import React from 'react';
import { AiTwotoneHeart } from 'react-icons/ai';
import { IoClose } from 'react-icons/io5';
import '../../styles/comments.css';
import profilepic from '../../img/img1.png';
import profilepicrply from '../../img/img2.png';

const Comments = ({commentToggle, isCommentBoxOpen}) => {
    let boxAppear ={};
    if(isCommentBoxOpen){
        boxAppear = {display: 'none'}
    };

  return (
    <>
    <div className="commentBox" style={boxAppear}>
        <IoClose className='closeComments' onClick={commentToggle} />
        <h3 className='CommentsHeading'>Comments</h3>
        <hr className="commentsHeadHr" />
        <div className="commentBody">
            <div className="comment">
                <div className="commentProfile"><img src={profilepic} alt="" className="commentUserPic" />
                <h3 className="commentUsername">Jackie Chan</h3></div>
                <p className="commentContentMain">This is the greatest comment I ever saw..!</p>
            
                <div className="commentReact">
                    <div className="likeComment">
                    <AiTwotoneHeart className='likeCommentBtn' name='likeCommentBtn' />
                    <label htmlFor="likeCommentBtn" className='likeCommentCount'>1000</label>
                    </div>
                    <button className='replyCommentMain'>reply</button>
                </div>
            </div>
            <div className="commentReplies">
                <div className="commentProfile"><img src={profilepicrply} alt="" className="ReplycommentUserPic" />
                <h3 className="ReplycommentUsername">Tony</h3></div>
                <p className="ReplycommentContentMain">This is a demo comment reply</p>
                <div className="ReplycommentReact">
                    <div className="likeReplyComment">
                    <AiTwotoneHeart className='likeCommentBtn likeReplyCommentBtn' name='likeReplyCommentBtn' />
                    <label htmlFor="likeReplyCommentBtn" className='likeCommentCount likeReplyCommentCount'>1000</label>
                    </div>
                    <button className='replyCommentMain replyCommentReply'>reply</button>
                </div>
            </div>
        </div>
        <div className="createCommentBox">
            <input type="text" className="writeComment" placeholder='Add comment' />
            <button className="postCommentBtn">Post</button>
        </div>
    </div>
    </>
  )
}

export default Comments