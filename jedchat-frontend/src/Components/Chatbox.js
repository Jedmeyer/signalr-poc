import React from 'react';
import ChatMessages from './ChatMessages';
import $ from 'jquery';
import { uuidv4 } from '../Services/randomGuid'
import {
    JsonHubProtocol,
    HubConnectionState,
    HubConnectionBuilder,
    LogLevel
} from '@microsoft/signalr';

class Chatbox extends React.Component {
    constructor(props) {
        super(props);

        const userId = uuidv4();
        this.state = {
            messages: [
                {
                    user: "Admin",
                    message: "Welcome to jedChat. Hope you have a good time."
                }
            ],
            currentTime: new Date(),
            connection: null,
            userId: userId,
        }

    }    
    componentDidMount() {
        const con = new HubConnectionBuilder()
            .withUrl(process.env.REACT_APP_API_URL)
            .withAutomaticReconnect()
            .build();
        con.on("ReceiveMessage", (user, message) => {
            var tmp = this.state.messages;
            tmp.push({ user, message });
            this.setState({ messages: tmp });
        });
        con.start();
        this.setState({
            connection: con
        });

    }
    sendMessage(e) {
        var msgValue = $('#msg').val();
        try {
            this.state.connection.invoke("BroadcastMessage", this.state.userId, msgValue);
        }
        catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div>
                <ChatMessages messages={this.state.messages} />

                <input type="text" id="msg" minLength="2" maxLength="256"/> 
                <button onClick={(e) => this.sendMessage(e)}>Send Message</button>
            </div>
        )
    }
}

export default Chatbox;