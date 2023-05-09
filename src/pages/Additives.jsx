import { Container, Icon, Typography } from "@mui/material";
import React from "react";
import{ FaBars, FaSearch, }from "react-icons/fa";


const Additives = ()=> {
    return (
        <div>
            <Container maxWidth="sm" className="container-center">
                <Typography style={{backgroundColor: '', height: 'auto'}}>
                    <div className="container-additives">
                        <div className="search-section">
                            <div className="search-box">
                                <input type="text" name="search-bar" id="search-additives" className="search-additives" placeholder="Search" />
                                <Icon><FaSearch/></Icon>
                            </div>
                        </div>
                    </div>
                </Typography>
            </Container>
        </div>
    )
}
export default Additives;