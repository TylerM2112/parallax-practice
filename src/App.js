import React, { Component } from 'react';
import './App.css';

import logo from './assets/logo.png';
import connecting from './assets/account-multiple-plus.png';
import mark from './assets/mark.png';
import events from './assets/calendar-question.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="loginButton"><p>LOGIN</p></div>  
          <div className="firstPanel">
        <div className="dimmer">
            <div className="landingLogoContainer">
              <img src={logo} />
            </div>
            <div className="landingLogoText">
              <p>middlewhere. anywhere.</p>
            </div>
          </div>
        </div>

        <div className="firstPanelText">
          <div className="fpt">
            <img src={connecting} />
            <p>Connect with your friends!</p>
          </div>
          <div className="fpt">
            <img src={mark} />
            <p>Find the middle point!</p>
          </div>
          <div className="fpt">
            <img src={events} />
            <p>Start an event with friends!</p>
          </div>
        </div>

        <div className="secondPanel">
        </div>
        
        <div className="secondPanelText">  
          <div className="spt">
            <h3>Login using social media!</h3>
              <p>Facebook, Google, Github!</p>
          </div>
          <div className="spt">
          <h3>Connect with friends!</h3>
              <p>Search, connect, and manage friends!</p>
          </div>  
          <div className="spt">
            <h3>Form groups with them!</h3>
              <p>Create groups with as many friends as you like!</p>
          </div>          
        </div>

        <div className="thirdPanel">
        </div>

        <div className="thirdPanelText">
          <div className="tpt">
          <h3>Group up and get out!</h3>
              <p>Personalization allows you to group with who ever you want, how ever you want!</p>  
        </div>    
          <div className="tpt">
          <h3>Find the middle point!</h3>
              <p>We find the middle point between all your group members and suggest locations!</p>  
        </div>    
          <div className="tpt">
          <h3>Set events for groups!</h3>
              <p>Invite your group to a night out near the middle point!</p>  
        </div>    
        </div>

        <div className="fourthPanel">
        </div>

        <div className="fourthPanelText">
        <div className="fopt">
          <h3>Host an event!</h3>
              <p>Set the date, time, and suggested places for a night out!</p>  
        </div>    
          <div className="fopt">
          <h3>Invite groups and friends!</h3>
              <p>Invite your groups or individual friends to a night out near the middle point!</p>  
        </div> 
          <div className="fopt">
          <h3>Event tracking!</h3>
              <p>As members confirm the event, the middle point will update as well as suggested places!</p>  
        </div>    
        </div>

        <div className="fifthPanel">
        </div>

        <div className="fifthPanelText">
          <div className="fopt">
            <p>You know what we're about, now get connecting!!</p>
            <div className="fiptButton">
            <img src="http://res.cloudinary.com/tylermiller/image/upload/c_scale,w_175/v1524217122/mw_copy.png" />
              <p>Try middlewhere!</p>
            </div>  
          </div>  
        </div>



      </div>
    );
  }
}

export default App;
