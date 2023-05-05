import React, { Children } from "react";
import '../App.css';
// import{
//     FaAd,
//     FaAdjust,
//     FaBars,
//     FaFileImage,
//     FaHome,
//     FaSafari,
//     FaTh, FaUserAlt,
// }from "react-icons/fa";
import { NavLink } from "react-router-dom";

// const[isOpen, setIsOpen] = useState(false);
// const toggle = () => setIsOpen (!isOpen);
const SideBar = ({children})=> {
    const menuItem=[
        {
            path:"/homepage",
            name:"HomePage",
            // icon:<FaHome/>
        },
        {
            path:"/additives",
            name:"Additives",
            // icon:<FaAd/>
        },
        
        {
            path:"/explore",
            name:"Explore",
            // icon:<FaSafari/>
        },
        {
            path:"/setting",
            name:"Setting",
            // icon:<FaAdjust/>
        },
        {
            path:"/about",
            name:"About",
            // icon:<FaUserAlt/>
        },
    ]
    return (
        <div className="container">
            <div className="sidebar">
                <div className="top-section">
                    <h1 className="logo"><a href="https://halalvar.com">HalalVar</a></h1>
                    {/* <div className="bars">
                        <FaBars/>
                    </div> */}
                </div>
                <div className="items">
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
                </div>
            </div>
            <main>{children}</main>
        </div>
    )
}
export default SideBar;