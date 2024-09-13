import React,{ useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import SurveyForm from "./components/SurveyForm";
import ConfirmationDialog from "./components/ConfirmationDialog";
import ThankYouScreen from "./components/ThankYouScreen";

const App=()=>{

    const [step,setStep]=useState("welcome");
    const [showConfirmation,setShowConfirmation]=useState(false);
    
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

      {step==="survey"&& (<SurveyForm goToThankYouScreen={goToThankYouScreen} showConfirmationDialog={showConfirmationDialog}/>)}
      {step==="thankyou" && <ThankYouScreen resetSurvey={resetSurvey} />}

      {showConfirmation && (<ConfirmationDialog onConfirm={confirmSubmission} onCancel={cancelSubmission} />)}
    </div>
  );
};

export default App;
