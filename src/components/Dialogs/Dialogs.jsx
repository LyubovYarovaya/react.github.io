import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import style from './Dialogs.module.css';

const Dialogs = (props) =>  {

    let dialogElem = props.state.dialogs.map( d => <Dialog name={d.name} id={d.id} />)
    
    let messageElem = props.state.messages.map( m => <Message message={m.message} id={m.id} />)
    
    let addMessage = React.createRef();

    let sendMessage = () => {
       let text = addMessage.current.value;
       alert(text);
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
                <textarea ref={addMessage} name="text"></textarea>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;