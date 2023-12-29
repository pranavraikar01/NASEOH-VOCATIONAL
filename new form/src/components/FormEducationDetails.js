// import React, { useState } from "react";
// // import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// // import AppBar from 'material-ui/AppBar'
// // import TextField from 'material-ui/TextField'
// // import RaisedButton from 'material-ui/RaisedButton'

// import Confirm from "./Confirm";

// import { makeStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import { Box } from "@material-ui/core";

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
//   spaceBetweenBtn: {
//     width: "75%",
//     display: "flex",
//     justifyContent: "space-between",
//   },
// }));

// export default function FormEducationDetails({ previousStep, handleChange }) {
//   const [openDialog, setOpenDialog] = useState(false);

//   const classes = useStyles();

//   const prev = (e) => {
//     e.preventDefault();
//     previousStep();
//   };

//   const handleBtnClick = () => {
//     setOpenDialog(true);
//     console.log("the first open:", openDialog);
//   };

//   return (
//     <>
//       <form>
//         <TextField
//           id="outlined-basic"
//           label="State"
//           onChange={handleChange("stateCity")}
//           variant="outlined"
//           className={classes.textField}
//         />

//         <TextField
//           id="outlined-basic"
//           label="City"
//           onChange={handleChange("city")}
//           variant="outlined"
//           className={classes.textField}
//         />

//         <TextField
//           id="outlined-basic"
//           label="Neighbourhood"
//           onChange={handleChange("neighbourhood")}
//           variant="outlined"
//           className={classes.textField}
//         />

//         <TextField
//           id="outlined-basic"
//           label="Street"
//           onChange={handleChange("street")}
//           variant="outlined"
//           className={classes.textField}
//         />

//         <TextField
//           id="outlined-basic"
//           label="Number"
//           onChange={handleChange("number")}
//           variant="outlined"
//           className={classes.textField}
//         />
//       </form>
//       <Box className={classes.spaceBetweenBtn}>
//         <Button
//           variant="contained"
//           color="primary"
//           className={classes.buttonColor}
//           onClick={prev}
//         >
//           {" "}
//           Prev{" "}
//         </Button>
//         <Button
//           variant="contained"
//           color="primary"
//           className={classes.buttonColor}
//           onClick={() => handleBtnClick()}
//         >
//           {" "}
//           Send{" "}
//         </Button>
//       </Box>
//       <Box>{openDialog ? <Confirm value={openDialog}> </Confirm> : null}</Box>
//     </>
//   );
// }
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Box, InputLabel } from "@material-ui/core";
import Confirm from "./Confirm";

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: "10px 10px 10 10px",
    width: "95%",
  },
  buttonColor: {
    width: "100px",
    borderRadius: "30px",
    background: "linear-gradient(to right, #ff105f, #ffad06)",
    fontWeight: "bold",
  },
  spaceBetweenBtn: {
    width: "75%",
    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function FormEducationDetails({ nextStep,previousStep, handleChange }) {
  const [openDialog, setOpenDialog] = useState(false);

  const classes = useStyles();

  const prev = (e) => {
    e.preventDefault();
    previousStep();
  };

  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handleBtnClick = () => {
    setOpenDialog(true);
    console.log("the first open:", openDialog);
  };

  return (
    <>
      <form>
        {/* Table for Education Details */}
        <table>
          <tbody>
            {/* Row 1: SSC */}
            <tr>
              
              <td>
                <TextField
                  id="outlined-basic"
                  label="SSC - Year of Passing"
                  onChange={handleChange("SSCpassingyear")}
                  variant="outlined"
                  className={classes.textField}
                />
              </td>
              <td>
                <TextField
                  id="outlined-basic"
                  label="SSC - Marks Obtained"
                  onChange={handleChange("SSCmarks")}
                  variant="outlined"
                  className={classes.textField}
                />
              </td>
            </tr>

            {/* Row 2: HSC */}
            <tr>
              <td>
                <TextField
                  id="outlined-basic"
                  label="HSC - Year of Passing"
                  onChange={handleChange("HSCpassingyear")}
                  variant="outlined"
                  className={classes.textField}
                />
              </td>
              <td>
                <TextField
                  id="outlined-basic"
                  label="HSC - Marks Obtained"
                  onChange={handleChange("HSCmarks")}
                  variant="outlined"
                  className={classes.textField}
                />
              </td>
            </tr>

            {/* Row 3: Graduation */}
            <tr>
              <td>
                <TextField
                  id="outlined-basic"
                  label="Graduation - Year of Passing"
                  onChange={handleChange("GraduationYear")}
                  variant="outlined"
                  className={classes.textField}
                />
              </td>
              <td>
                <TextField
                  id="outlined-basic"
                  label="Graduation - Marks Obtained"
                  onChange={handleChange("Graduationmarks")}
                  variant="outlined"
                  className={classes.textField}
                />
              </td>
             
            </tr>

            <tr>
            <td>
                <TextField
                  id="outlined-basic"
                  select
                  label="Select Graduation"
                  value={handleChange("graduation")}
                  onChange={handleChange("graduation")}
                  variant="outlined"
                  className={classes.textField}
                >
                  <MenuItem value="B.Sc">B.Sc</MenuItem>
                  <MenuItem value="B.A">B.A</MenuItem>
                  {/* Add more options as needed */}
                </TextField>
              </td>
            </tr>
          </tbody>
        </table>
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
        {/* <Button
          variant="contained"
          color="primary"
          className={classes.buttonColor}
          onClick={() => handleBtnClick()}
        >
          {" "}
          Send{" "}
        </Button> */}
      </Box>
      <Box>{openDialog ? <Confirm value={openDialog}> </Confirm> : null}</Box>
    </>
  );
}
