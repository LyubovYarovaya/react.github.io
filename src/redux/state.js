const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_POST_BODY = 'UPDATE_NEW_POST_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state : {
        profilePage: {
            posts: [
                {id: 1, message: 'Post wall',  likeCount: 12},
                {id: 2, message: 'Post wall 2',  likeCount: 1},
                {id: 3, message: 'Post wall 3',  likeCount: 33},
            ],
            newPostText: ''
        },
        
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Jon Wileyam"},
                {id: 2, name: "Erik Jonson"},
                {id: 3, name: "Musa Kollins"},
                {id: 4, name: "William Jowel"},
                {id: 5, name: "Kate Midiltoin"},
            ],
            
            messages: [
                {id: 1, message: "Many desktop publishing"},
                {id: 2, message: "Many desktop"},
                {id: 3, message: "Many"},
                {id: 4, message: "Many desktop"},
                {id: 5, message: "Many desktop publishing"},
            ],
            newMessageBody: ""
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('state changed');
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
    
    dispatch (action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,  
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            
            this._callSubscriber (this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber (this._state);
        } else if (action.type === UPDATE_NEW_POST_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber (this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 7, message: body});
            this._callSubscriber (this._state);
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST }) 
export const updateNewPostTextActionCreator = (text) => 
({ type : UPDATE_NEW_POST_TEXT, newText: text })
 
export const sendMessageCreator = () => ({ type: SEND_MESSAGE }) 
export const updateNewMessageBodyCreator = (body) => 
({ type : UPDATE_NEW_POST_BODY, body: body })

export default store;
window.store = store;