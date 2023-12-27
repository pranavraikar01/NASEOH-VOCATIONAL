// // import react from 'react';
// // import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// // import AppBar from 'material-ui/AppBar'
// // import TextField from 'material-ui/TextField'
// // import RaisedButton from 'material-ui/RaisedButton'
// import "../styles/form-style.css";

// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import { Box } from "@material-ui/core";
// import { Grid } from "@material-ui/core";
// import { useForm } from "react-hook-form";

// const useStyles = makeStyles((theme) => ({
//   textField: {
//     margin: "10px",
//     width: "75%",
//   },
//   buttonColor: {
//     width: "100px",
//     borderRadius: "30px",
//     background: "linear-gradient(to right, #ff105f, #ffad06)",
//     fontWeight: "bold",
//   },
// }));

// export default function FormPersonalDetails({
//   nextStep,
//   handleChange,
//   values,
// }) {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();
//   const classes = useStyles();

//   const onSubmit = (data) => console.log(data);

//   const next = (e) => {
//     e.preventDefault();
//     nextStep();
//   };

//   return (
//     <Grid container>
//       {/* <div className="App-header"> */}
//       <Grid item xs={12}>
//         <TextField
//           id="outlined-basic"
//           label="First Name"
//           onChange={handleChange("firstName")}
//           variant="outlined"
//           className={classes.textField}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="outlined-basic"
//           label="Last Name"
//           onChange={handleChange("lastName")}
//           variant="outlined"
//           className={classes.textField}
//         />
//       </Grid>

//       {/* style={{ paddingLeft: 45, paddingRight: 45,}} */}

//       <Grid
//         container
//         item
//         xs={12}
//         style={{ paddingLeft: 45, paddingRight: 45 }}
//       >
//         <Grid item xs={6}>
//           <TextField
//             id="outlined-basic"
//             label="Birthdate"
//             onChange={handleChange("birthdate")}
//             variant="outlined"
//             className={classes.textField}
//           />
//         </Grid>

//         <Grid item xs={6}>
//           <TextField
//             id="outlined-basic"
//             label="CPF"
//             onChange={handleChange("cpf")}
//             variant="outlined"
//             className={classes.textField}
//           />
//         </Grid>
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           id="outlined-basic"
//           label="Married Status"
//           onChange={handleChange("marriedStatus")}
//           variant="outlined"
//           className={classes.textField}
//         />
//       </Grid>

//       <Grid item xs={12}>
//         <Button
//           variant="contained"
//           color="primary"
//           className={classes.buttonColor}
//           onClick={next}
//         >
//           {" "}
//           Next
//         </Button>
//       </Grid>

//       {/* </div> */}
//     </Grid>
//   );
// }
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import { Box } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: "10px 0",
    width: "70%", // Adjust the width as needed
  },
  buttonColor: {
    width: "100px",
    borderRadius: "30px",
    background: "linear-gradient(to right, #ff105f, #ffad06)",
    fontWeight: "bold",
    marginTop: "20px",
  },
}));

export default function FormEducationDetails({
  nextStep,
  previousStep,
  handleChange,
}) {
  const classes = useStyles();

  // Next and Previous functions
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  const prev = (e) => {
    e.preventDefault();
    previousStep();
  };

  return (
    <>
      <form>
        {/* First Row */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Reg No"
              onChange={handleChange("regno")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Date of Admission</InputLabel>
            <TextField
              id="outlined-basic"
              type="date"
              onChange={handleChange("doa")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Referred by"
              onChange={handleChange("referredby")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Date of Completion</InputLabel>
            <TextField
              id="outlined-basic"
              type="date"
              onChange={handleChange("doc")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
        </Grid>

        {/* Second Row */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Full Name"
              onChange={handleChange("fullname")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Present Address"
              onChange={handleChange("presentaddress")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Permanent Address"
              onChange={handleChange("permanentaddress")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Phone"
              type="tel"
              onChange={handleChange("phone")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
        </Grid>

        {/* Third Row */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Aadhar Card Number"
              type="number"
              onChange={handleChange("aadharcardno")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <InputLabel>Date of Birth</InputLabel>
            <TextField
              id="outlined-basic"
              type="date"
              onChange={handleChange("dob")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Age"
              type="number"
              onChange={handleChange("age")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Single/Married/Divorced"
              onChange={handleChange("relstatus")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
        </Grid>
        {/* Fourth Row */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Religion/Caste"
              onChange={handleChange("religion")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Nature of Disability"
              onChange={handleChange("natureofdisability")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Reason for Referral"
              onChange={handleChange("reasonref")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="History of Present Problem"
              onChange={handleChange("problemhistory")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
        </Grid>

        {/* Fifth Row */}
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="External Aid/Device Currently Used"
              onChange={handleChange("aidinfo")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Any Other Illness/Medication"
              onChange={handleChange("medicationinfo")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Substance/Drug Misuse History"
              onChange={handleChange("druginfo")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              label="Vocational Rehabilitation Centre Reg. No"
              onChange={handleChange("rehabno")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
        </Grid>

        {/* Sixth Row */}
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Special Employee Exchange No"
              onChange={handleChange("empexno")}
              variant="outlined"
              className={classes.textField}
            />
          </Grid>
        </Grid>
        {/* Add more rows for the remaining fields in a similar way */}
      </form>

      <Box className={classes.spaceBetweenBtn}>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonColor}
          onClick={prev}
        >
          {" "}
          Prev{" "}
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.buttonColor}
          onClick={next}
        >
          {" "}
          Next{" "}
        </Button>
      </Box>
    </>
  );
}
