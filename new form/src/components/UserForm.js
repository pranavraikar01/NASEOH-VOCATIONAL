import React, { useState } from "react";
import FormPersonalDetails from "./FormPersonalDetails";
import FormContactDetails from "./FormFamilyDetails";
import FormEducationDetails from "./FormEducationDetails";

import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/Styles";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";

import PersonIcon from "@material-ui/icons/Person";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import SchoolIcon from "@material-ui/icons/School";

import "../styles/form-style.css";

//Line the connect the Icons
const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  completed: {
    "& $line": {
      backgroundImage:
        "linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  completed: {
    backgroundImage:
      "linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",
  },
});

const useStyle = makeStyles({
  p: {
    color: "rgb(233,64,87)",
    margin: "0px",
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { completed } = props;

  const icons = {
    1: <PersonIcon />,
    2: <SupervisorAccountIcon />,
    3: <SchoolIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return [
    "Insert personal information",
    "Insert Family Details",
    "Insert Educational information",
  ];
}
export default function UserForm() {
  const steps = getSteps();
  const styles = useStyle();

  const [step, setStep] = useState(1);
  const [state, setState] = useState({
    regno: "",
    doa: "",
    referredby: "",
    doc: "",
    fullname: "",
    presentaddress: "",
    permanentaddress: "",
    phone: "",
    aadharcardno: "",
    dob: "",
    age: "",
    relstatus: "",
    religion: "",
    natureofdisability: "",
    reasonref: "",
    problemhistory: "",
    aidinfo: "",
    medicationinfo: "",
    druginfo: "",
    rehabno: "",
    empexno: "",
    fathername: "",
    fatherage: "",
    fathereducation: "",
    fatheroccupation: "",
    fatherincome: "",
    mothername: "",
    motherage: "",
    mothereducation: "",
    motheroccupation: "",
    motherincome: "",
    SSCpassingyear: "",
    SSCmarks: "",
    HSCpassingyear: "",
    Hscmarks: "",
    graduation: "",
    GraduationYear: "",
    Graduationmarks: "",
  });

  //Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };
  //Proceed to previous step
  const previousStep = () => {
    setStep(step - 1);
  };

  //handle fields change
  const handleChange = (input) => (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [input]: value,
    });
    console.log(state);
  };
  const {
    // Existing fields

    // New fields
    regno,
    doa,
    referredby,
    doc,
    fullname,
    presentaddress,
    permanentaddress,
    aadharcardno,
    dob,
    age,
    relstatus,
    religion,
    natureofdisability,
    reasonref,
    problemhistory,
    aidinfo,
    medicationinfo,
    druginfo,
    rehabno,
    empexno,
    fathername,
    fatherage,
    fathereducation,
    fatheroccupation,
    fatherincome,
    mothername,
    motherage,
    mothereducation,
    motheroccupation,
    motherincome,
    SSCpassingyear,
    SSCmarks,
    HSCpassingyear,
    Hscmarks,
    graduation,
    GraduationYear,
    Graduationmarks,
  } = state;

  // Create the values object with all the fields
  const values = {
    // Existing fields

    // New fields
    regno,
    doa,
    referredby,
    doc,
    fullname,
    presentaddress,
    permanentaddress,
    aadharcardno,
    dob,
    age,
    relstatus,
    religion,
    natureofdisability,
    reasonref,
    problemhistory,
    aidinfo,
    medicationinfo,
    druginfo,
    rehabno,
    empexno,
    fathername,
    fatherage,
    fathereducation,
    fatheroccupation,
    fatherincome,
    mothername,
    motherage,
    mothereducation,
    motheroccupation,
    motherincome,
    SSCpassingyear,
    SSCmarks,
    HSCpassingyear,
    Hscmarks,
    graduation,
    GraduationYear,
    Graduationmarks,
  };

  switch (step) {
    case 1:
      return (
        <>
          {/* First Screen */}
          <div className="App-header">
            <Stepper
              alternativeLabel
              activeStep={step}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <p className={styles.p}>Let's Start</p>
            <FormPersonalDetails
              nextStep={nextStep}
              previousStep={previousStep}
              handleChange={handleChange}
              values={values}
            ></FormPersonalDetails>
          </div>
        </>
      );
    case 2:
      return (
        <>
          <div className="App-header">
            <Stepper
              alternativeLabel
              activeStep={step}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <p className={styles.p}>Keep Going</p>
            <FormContactDetails
              nextStep={nextStep}
              previousStep={previousStep}
              handleChange={handleChange}
              values={values}
            ></FormContactDetails>
          </div>
        </>
      );

    case 3:
      return (
        <>
          <div className="App-header">
            <Stepper
              alternativeLabel
              activeStep={step}
              connector={<ColorlibConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
            <p className={styles.p}>We'll finish</p>
            <FormEducationDetails
              nextStep={nextStep}
              previousStep={previousStep}
              handleChange={handleChange}
              values={values}
            ></FormEducationDetails>
          </div>
        </>
      );

    default:
      return (
        <div>
          <h1>Não existe</h1>
        </div>
      );
  }
}
