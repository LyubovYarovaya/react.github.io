import rerenderEntireTree from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Many desktop publishing packages and web page editors now use Lorem Ipsum',  likeCount: 12},
            {id: 2, message: 'Many desktop publishing packages',  likeCount: 1},
            {id: 3, message: 'Many desktop',  likeCount: 33},
        ],
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

export let addPost = (addPost) => {
    let newPost = {
        id: 4,
        message: addPost,  
        likeCount: 5
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree (state);
}


export default state;