import React, { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import ProjectsDeveloped from "./ProjectsDeveloped";
import EducationalDetails from "./EducationalDetails";
import ExperienceDetails from "./ExperienceDetails";
import ExtraDetails from "./ExtraDetails";
import Header from "./Header";

function Resume() {
  const [step, setStep] = useState(1);
  // personal details
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [githubUsername, setgithubUsername] = useState("");
  const [linkedinUsername, setlinkedinUsername] = useState("");
  const [twitterUsername, settwitterUsername] = useState("");
  const [facebookUsername, setfacebookUsername] = useState("");
  const [instagramHandle, setinstagramHandle] = useState("");

  // educational details

  // projects details

  // experience details

  // extra details

  const personalDetails = {
    firstName,
    lastName,
    email,
    phoneNumber,
    website,
    githubUsername,
    linkedinUsername,
    twitterUsername,
    facebookUsername,
    instagramHandle,
  };

  const nextStep = () => {
    setStep(step + 1);
    console.log(step);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {};

  const componentRendered = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            nextStep={nextStep}
            EducationDetails
            prevStep={prevStep}
            step={step}
            personalDetails={personalDetails}
          />
        );
      case 2:
        return (
          <EducationalDetails
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 3:
        return (
          <ProjectsDeveloped
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 4:
        return (
          <ExperienceDetails
            nextStep={nextStep}
            prevStep={prevStep}
            step={step}
          />
        );
      case 5:
        return (
          <ExtraDetails nextStep={nextStep} prevStep={prevStep} step={step} />
        );
      default:
      // break;
    }
  };

  return (
    <div>
      <Header />
      {componentRendered()}
    </div>
  );
}

export default Resume;
