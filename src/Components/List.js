import React from "react";
import { FaBars } from "react-icons/fa";
import User from "./User";

import logo from "../img/logo_.png"

class List extends React.Component{
    constructor(){
        super()
        this.state = {
            list: [
                {
                    id: 0,
                    isPinned: false,
                    logo: logo,
                    name: "user_1",
                    lastMessage: "ya pobedil"
                },
                {
                    id: 1,
                    isPinned: false,
                    logo: null,
                    name: "user_2",
                    lastMessage: "ya pokakal"
                }
            ]
        }
    }
    
    render(){
        return(
            <div className="List">
                <header className="flex-column-nowrap">
                    <div className="flex-row-nowrap">
                        <FaBars/>
                        <form>
                            <input/>
                        </form>
                    </div>
                </header>
                {this.state.list.map((el) => (
                    <User user={el} key={el.id}/>
                ))}
            </div>
        )
    }
}

export default List