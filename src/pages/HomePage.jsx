import { Container, Icon, Typography } from "@mui/material";
import React from "react";
import '../App.css';
import{ FaBars, }from "react-icons/fa";

const HomePage = ()=> {
    return (
        <Container maxWidth="sm" className="container-center">
            <Typography style={{backgroundColor: '', height: 'auto'}}>
                <div className="container-homepage">
                    <header className="header-homepage">
                        <div className="head-top">
                            <Icon><FaBars/></Icon>
                            <p className="selected-lang">English</p>
                        </div>
                        <div className="avatar">
                            <img src={require('../avatar-2023.jpg')} alt="avatar" />
                            <h3>hosein ghasemizade</h3>
                        </div>
                    </header>
                    <div className="main">
                        <div className="main-content">
                            <h2>Welcome back!</h2>
                            <div className="banner">
                                <div className="banner-box">
                                    <img src={require('../banner.jpg')} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-main">
                        <div className="history">
                            <h2>History</h2>
                        </div>
                    </div>
                </div>
            </Typography>
        </Container>
    )
}
export default HomePage;
