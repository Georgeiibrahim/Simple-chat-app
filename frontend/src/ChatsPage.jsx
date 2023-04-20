import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props)=>
{
    const chatProps = useMultiChatLogic(
        '34aeb2ae-3060-4f9d-b28b-06a9f7bfddcc',
         props.user.username,
         props.user.secret
         );
    
    return( 
    <div style={{height:'100vh'}}>
        <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100%'}}/>

    </div>
    )

}
export default ChatsPage;