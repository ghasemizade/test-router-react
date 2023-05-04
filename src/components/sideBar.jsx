import React, { Children } from "react";
import '../App.css';
import{
    FaAd,
    FaAdjust,
    FaBars,
    FaFileImage,
    FaHome,
    FaSafari,
    FaTh, FaUserAlt,
}from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = ({Children})=> {
    const menuItem=[
        {
            path:"/",
            name:"dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        {
            path:"/additives",
            name:"Additives",
            icon:<FaAd/>
        },
        {
            path:"/homepage",
            name:"HomePage",
            icon:<FaHome/>
        },
        {
            path:"/explore",
            name:"Explore",
            icon:<FaSafari/>
        },
        {
            path:"/setting",
            name:"Setting",
            icon:<FaAdjust/>
        }
    ]
    return (
        <div className="container">
            <div className="sidebar">
                <div className="top-section">
                    <h1 className="logo"><a href="https://halalvar.com">HalalVar</a></h1>
                    <div className="bars">
                        <FaBars/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{Children}</main>
        </div>
    )
}
export default SideBar;