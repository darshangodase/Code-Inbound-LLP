import React, { useEffect } from "react";

const ThankYouScreen=({resetSurvey})=>
{
  useEffect(()=>{
    const timer = setTimeout(()=>{
      resetSurvey();
    }, 5000);
  },[]);

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <div className="text-center">
        <h1 className="text-3xl mb-6">Thank you for completing the survey!</h1>
        <p>Redirecting to the welcome screen...</p>
      </div>
    </div>
  );
};

export default ThankYouScreen;
