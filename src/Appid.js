import React, {useEffect,useState} from 'react';
import AppID from 'ibmcloud-appid-js';

function Appid() {
  let appId  = new AppID();
 const [error, setError] = useState();
 const [userName, setUserName]= useState ('') ;
 useEffect (() => {
 (async () => {
 try {
 await appId.init({
 clientId : '6d0f0bd1-647c-4c32-9db8-4ec37c3c50a3', 
 discoveryEndpoint:'https://eu-gb.appid.cloud.ibm.com/oauth/v4/55a2772e-1b4b-44fd-9004-b3fb7c2ae811/.well-known/openid-configuration'
 })
 }
catch (e) {
      setError(e.message);
    }
    }) ();
  }) ;
    const login = async() => {
    try {
const tokens = await appId.signin();
//console.log(JSON.stringify(tokens.idTokenPayload));
    setUserName(tokens.idTokenPayload.name);
    } catch (e) {
      console.error(e.message);
    }
    }
    return(
    <div className="App">
    <p>{error}</p>
    <div style={{display: 'center',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
    <h1>WELCOME</h1>
    {userName
     && <h2>HeyBuddy</h2>}
    <button onClick={login}>Login</button>
   
    </div>
    </div>
    );
    }
    
    export default Appid;