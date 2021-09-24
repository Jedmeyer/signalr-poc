

export default function ChatMessages(props){
    const listItems = props.messages.map( (message) => 
            <li>{message.user}: message.message</li>            
            );
    
    return(
        <ul style>
        {
            listItems
        }
        </ul>
    );
}