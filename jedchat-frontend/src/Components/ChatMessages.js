

export default function ChatMessages(props){
    const listItems = props.messages.map( (message) => 
            <li>{message.user}: {message.message}</li>            
            );
    
    return(
        <ul >
        {
            listItems
        }
        </ul>
    );
}