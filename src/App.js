import React from 'react';
import logo from './statics/logo.png';
import serch from './statics/search.png';
import ari from './statics/ari.jpg';
import kane from './statics/kane.jpg';
import cam from './statics/cam.png';
import vikada from './statics/vikada.gif';
import bean from './statics/bean.jpg';
import newt from './statics/newton.jpg';
import "./styles.css";
import up from './statics/up.png';
import down from './statics/down.png';
import {useState} from 'react';

const Chats = ()=> {
  return(<>
  <div className="chats">
    <div className="chat1">
      <div className="chat111">
        <img src={ari} alt="" className="phots"/>
        <div className="text">
          <span className="name">Aravind</span>
          <span className="msg">Hello Me.. How u doin'?</span>
        </div>
      </div>
      <div className="time">
        <span>9:45</span>
      </div>
    </div>
      <hr id="hr"/>
    <div className="chat1">
      <div className="chat111">
        <img src={kane} alt="" className="phots"/>
        <div className="text">
          <span className="name">Kane</span>
          <span className="msg">Veil on the Fire</span>
        </div>
      </div>
      <div className="time">
        <span>9:45</span>
      </div>
    </div>
      <hr id="hr"/>
    <div className="chat1">
      <div className="chat111">
        <img src={vikada} alt="" className="phots"/>
        <div className="text">
          <span className="name">VikadaNagan</span>
          <span className="msg">I am so dangerous dude</span>
        </div>
      </div>
      <div className="time">
        <span>9:45</span>
      </div>
    </div>
      <hr id="hr"/>
    <div className="chat1">
      <div className="chat111">
        <img src={bean} alt="" className="phots"/>
        <div className="text">
          <span className="name">Mr.Bean</span>
          <span className="msg">I am looking for my watch</span>
        </div>
      </div>
      <div className="time">
        <span>9:45</span>
      </div>
    </div>
      <hr id="hr"/>
    <div className="chat1">
      <div className="chat111">
        <img src={newt} alt="" className="phots"/>
        <div className="text">
          <span className="name">Isac Newton</span>
          <span className="msg">don't sit under apple trees pls</span>
        </div>
      </div>
      <div className="time">
        <span>9:45</span>
      </div>
    </div>
      <hr id="hr"/>
  </div>
  </>);
}



const Status = ()=> {
  return(<>
    <div className="chat1">
      <div className="chat111">
        <img src={ari} alt="" className="photstatus"/>
        <div className="text">
          <span className="name">My Status</span>
          <span className="msg">13 minutes ago</span>
        </div>
      </div>
    </div>
      <div className="recupt">
      <span className="recuptxt">Recent Updates</span>
      </div>
  <div className="chats">
    <div className="chat1">
      <div className="chat111">
        <img src={vikada} alt="" className="photstatus"/>
        <div className="text">
          <span className="name">VikadaNagan</span>
          <span className="msg">Just Now</span>
        </div>
      </div>
    </div>
      <hr id="hr"/>
    <div className="chat1">
      <div className="chat111">
        <img src={bean} alt="" className="photstatus"/>
        <div className="text">
          <span className="name">Mr.Bean</span>
          <span className="msg">Just Now</span>
        </div>
      </div>
    </div>
      <div className="recupt">
      <span className="recuptxt">Viewed Status</span>
      </div>

    <div className="chat1">
      <div className="chat111">
        <img src={newt} alt="" className="photstatus"/>
        <div className="text">
          <span className="name">Isac Newton</span>
          <span className="msg">30 Minutes Ago</span>
        </div>
    </div>
      </div>
  </div>
  </>);
}

const Calls = ()=> {
  return(
  <>
    <div className="chat1">
      <div className="chat111">
        <img src={kane} alt="" className="photcalls"/>
        <div className="text">
          <span className="name">Kane</span>
          <div className="calldets">
            <img src={up} alt="" className="logos"/>
            <span className="msg">8 August, 9:22 pm</span>
          </div>
        </div>
      </div>
    </div>
      <hr id="hr"/>
    <div className="chat1">
      <div className="chat111">
        <img src={kane} alt="" className="photcalls"/>
        <div className="text">
          <span className="name">Kane</span>
          <div className="calldets">
            <img src={down} alt="" className="logos"/>
            <span className="msg">18 August, 12:22 am</span>
          </div>
        </div>
      </div>
    </div>
      <hr id="hr"/>
    <div className="chat1">
      <div className="chat111">
        <img src={bean} alt="" className="photcalls"/>
        <div className="text">
          <span className="name">Mr.Bean</span>
          <div className="calldets">
            <img src={down} alt="" className="logos"/>
            <span className="msg">11 August, 1:22 am</span>
          </div>
        </div>
      </div>
    </div>
      <hr id="hr"/>
    <div className="chat1">
      <div className="chat111">
        <img src={bean} alt="" className="photcalls"/>
        <div className="text">
          <span className="name">Mr.Bean</span>
          <div className="calldets">
            <img src={up} alt="" className="logos"/>
            <span className="msg">11 August, 1:25 am</span>
          </div>
        </div>
      </div>
    </div>
      <hr id="hr"/>
  </>
    );
}

export default function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
      setActiveTab("tab1");
    };
  const handleTab2 = () => {
      setActiveTab("tab2");
    };
  const handleTab3 = () => {
      setActiveTab("tab3");
    };
    return (<>
    <div className="first">
      <div className="first1">
        <span id="whatsapp">WhatsApp</span>
        <div className="first11">
          <img className="logos" src={serch} alt=""/>
          <span className="logos">⋮</span>
        </div>
      </div>
      <div className="first2">
        <img id="cam" src={cam} alt=""/>
        <span onClick={handleTab1}>CHATS</span>
        <span onClick={handleTab2}>STATUS</span>
        <span onClick={handleTab3}>CALLS</span>
      </div>
    </div>         
    {activeTab=="tab1"?<Chats/>:activeTab=="tab2"?<Status/>:<Calls/>}
  </>);
}
