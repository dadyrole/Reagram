import React from "react";
import Entry from "./Entry";
import Message from "./Message";
import Header from "./Header";

class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msgs:[
                {
                    id: 0,
                    received: true,
                    text:"ahahahahhahahaah",
                    time:"21:36"
                },
                {
                    id: 1,
                    received: true,
                    text:"cool => {REALLY}",
                    time:"21:37"
                }
            ]
        }
        this.addMsg = this.addMsg.bind(this)
    }
    
    render(){
        return(
            <div className="chat">
                <Header/>
                <main>
                    {this.state.msgs.map((msg) => (
                        <Message msg={msg} key={msg.id}/>
                    ))}
                </main>
                <Entry addMsg={this.addMsg}/>
            </div>
        )
    }
    addMsg(msg){
        const now = new Date()
        const time = now.toLocaleTimeString()
        var maxId = 0;
        for(let i=0; i < this.state.msgs.length; i++){
            if(this.state.msgs[i].id>maxId) {maxId = this.state.msgs[i].id}
        }
        var id = ++maxId
        this.setState({ msgs: [...this.state.msgs, {id, time, ...msg}] })
        
        console.log(this.state.msgs)
    }
    removeMsg(id){
        this.setState({
            msgs: this.state.msgs.filter((el) => el.id !== id)
        })
    }
}

export default Chat