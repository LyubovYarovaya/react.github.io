let rerenderEntireTree = () => {

}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Post wall',  likeCount: 12},
            {id: 2, message: 'Post wall 2',  likeCount: 1},
            {id: 3, message: 'Post wall 3',  likeCount: 33},
        ],
        newPostText: 'fix'
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
    },
}

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,  
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    
    rerenderEntireTree (state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree (state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;