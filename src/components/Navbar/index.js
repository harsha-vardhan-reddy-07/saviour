
import "../../styles/navbar.css";
import { BiHomeAlt } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { TbNotification } from "react-icons/tb";
import Profile from "../../img/profileImg.jpg";
import { useNavigate } from "react-router-dom";


const Navbar = ({createPostToggle, setInputButtonsDisplay, setCreateInputType}) => {

  const createPostBtnHandle = () =>{
    createPostToggle();
    setInputButtonsDisplay(true);
    setCreateInputType('Na');
  }

  let navigate = useNavigate();
  const openProfilePage = () =>{
    navigate('/profile');
  }

  
  return (
    <div className="Navbar">
      <div className="navIcons">
        <BiHomeAlt className="homebtn btns"  />
        <BsChatSquareText  className="chatbtn btns" />
        <CgAddR className="createPostbtn btns" onClick={createPostBtnHandle}  />
        <TbNotification className="Notifybtn btns" />
        <img className="profile btns" src={Profile} alt="" onClick={openProfilePage} />
      </div>

     

  
      
    </div>
  );
};

export default Navbar;

