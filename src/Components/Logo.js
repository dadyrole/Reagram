import React from "react";

function getInitials(name) {
    const nameParts = name.split(' ');
    return nameParts.map(part => part[0].toUpperCase()).join('');
}
function getRandomColor(id) {
    const colors = ['#FF5733', '#C70039', '#900C3F', '#581845'];
    return colors[id%4];
}

class Logo extends React.Component{
    render(){
        const user = this.props.user
        var result = null
        if(user.logo === null){
            result = <div className="logo" style={{backgroundColor: getRandomColor(user.id)}}>{getInitials(user.name)}</div>
        }else{
            result = <img src={user.logo} className="logo" alt=""/>
        }
        return result
    }
}

export default Logo