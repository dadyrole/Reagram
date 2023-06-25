import React from "react";
import { FaSearch, FaPhone, FaEllipsisV } from "react-icons/fa";
import logo from "../img/logo_.png"

class Header extends React.Component{
    render(){
        return (
            <header>
                    <div className="float-left flex-row-nowrap">
                    <img src={logo} className="logo" alt=""></img>
                        <div className="flex-column-nowrap">
                            <h3>Fasad Salatov</h3>
                            <p>last seen recently</p>
                        </div>
                    </div>
                    <div className="float-right">
                        <FaSearch className="icon"/>
                        <FaPhone className="icon"/>
                        <FaEllipsisV className="icon"/>
                    </div>
                </header>
        )
    }
}

export default Header