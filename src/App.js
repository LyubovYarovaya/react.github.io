import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="page">
        <Header/>
        <Navbar/>
        <div>
          <Route path='/dialogs' render={ () => 
            <Dialogs state={props.state.dialogsPage} />} />
          <Route path='/profile' component={ () => 
            <Profile 
              state={props.state.profilePage}
              addPost={props.addPost} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
