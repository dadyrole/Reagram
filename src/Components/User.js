import React from "react";
import Logo from "./Logo";

class User extends React.Component{
    render(){
        const user = this.props.user
        return(
            <div className="Item flex-row-nowrap">
                <Logo user={user}/>
                <div className="flex-column-nowrap">
                    <h3>{user.name}</h3>
                    <p>{user.lastMessage}</p>
                </div>
            </div>
        )
    }
}

export default User