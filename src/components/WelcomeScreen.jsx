import React, { useEffect } from "react";
import { generateSessionId } from "../utils/session";

const WelcomeScreen=({startSurvey})=> 
{
  useEffect(()=>{
    const sessionid=localStorage.getItem('sessionId');
    if(!sessionid) 
    {
      const newSessionid=generateSessionId();
      localStorage.setItem('sessionId',newSessionid);
      console.log("New session ID created:",newSessionid);
    } 
    else {
      console.log("Existing session ID found:",sessionid);
    }
  },[]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <div className="text-center">
        <h1 className="text-3xl mb-6">Welcome to the Survey!</h1>
        <button className=" bg-blue-500 px-3 py-3 rounded-md" onClick={startSurvey}>Start Survey</button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
