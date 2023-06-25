import React from "react";
import {FaPaperclip, FaPaperPlane, FaSmile} from "react-icons/fa";

class Entry extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            text:""
        }
    }
    
    render(){
        return (
            <form className="flex-row-nowrap" ref={(el) => this.entry = el}>
                <FaPaperclip className="icon"/>
                <textarea 
                    className="tinput"
                    onChange={(event) => {
                        var lines = 1
                        for(let i = 0; i<event.target.value.length; i++){
                            if(event.target.value[i]==='\n') lines = lines + 1
                        }
                        event.target.style.height = `${16*lines}px`
                        console.log(`event.target.style.height = ${event.target.style.height}`)
                        this.setState({text: event.target.value})
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            if (!event.shiftKey) {
                                event.preventDefault()
                                if (this.state.text !== '') {
                                    console.log('Отправлено сообщение: ' + this.state.text);
                                    event.target.value = '';
                                }
                            }
                        }
                    }}
                    type="text" rows="1"
                    placeholder="Write a message"
                    autoFocus
                    />
                <FaSmile className="icon"/>
                <FaPaperPlane className="icon" onClick={() => {
                    this.props.addMsg({
                        received: false,
                        text:this.state.text,
                    })
                    this.entry.reset()
                }}/>
            </form>
        )
    }
}

export default Entry