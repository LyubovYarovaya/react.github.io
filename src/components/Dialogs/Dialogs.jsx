import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import style from './Dialogs.module.css';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/state';

const Dialogs = (props) =>  {

    let state = props.store.getState().dialogsPage;

    let dialogElem = state.dialogs.map( d => <Dialog name={d.name} id={d.id} />)
    
    let messageElem = state.messages.map( m => <Message message={m.message} id={m.id} />)
    let newMessageBody = state.newMessageBody;
    
    let addMessage = React.createRef();

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogItem}> 
                {dialogElem}
            </div>
            <div className={style.messages}>
                {messageElem}
            </div>
            <div className={style.messageSend}>
                <textarea value={newMessageBody} onChange={onNewMessageChange} name="text" /> 
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;