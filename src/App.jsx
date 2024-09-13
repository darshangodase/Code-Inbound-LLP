import React,{ useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import SurveyForm from "./components/SurveyForm";
import ConfirmationDialog from "./components/ConfirmationDialog";
import ThankYouScreen from "./components/ThankYouScreen";

const App=()=>{

    const[step,setStep]=useState("welcome");
    const[showConfirmation,setShowConfirmation]=useState(false);
    
    const showConfirmationDialog=()=>setShowConfirmation(true);

  const startSurvey=()=>setStep("survey");
  const goToThankYouScreen=()=>setStep("thankyou");
  const resetSurvey=()=>setStep("welcome");

  const confirmSubmission=()=>{
    setShowConfirmation(false);
    goToThankYouScreen();
  };

  const cancelSubmission=()=>setShowConfirmation(false);

  return (
    <div className="">
      {step==="welcome" && <WelcomeScreen startSurvey={startSurvey} />}

      {step==="survey"&&(<SurveyForm showConfirmationDialog={showConfirmationDialog}/>)}
      {showConfirmation && (<ConfirmationDialog onConfirm={confirmSubmission} onCancel={cancelSubmission} />)}
      {step==="thankyou"&& <ThankYouScreen resetSurvey={resetSurvey} />}

    </div>
  );
};

export default App;
