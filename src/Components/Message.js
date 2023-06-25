import React from "react";
import { FaCheckDouble, FaCheck } from "react-icons/fa"

class Message extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isread: false
        }
        this.toRead = this.toRead.bind(this)
    }
    
    render(){
        return (
            <div className="message flex-column-nowrap" onMouseDown={this.toRead}>
                <p>{this.props.msg.text}</p>
                <div className="flex-row-nowrap message-time">
                    <p>{this.props.msg.time}</p>
                    {this.state.isread & !this.props.msg.received ? <FaCheckDouble size="10px"/> : <FaCheck size="10px"/>}
                </div>
            </div>
        )
    }
    toRead(){
        this.setState({isread:true})
    }
}

export default Message