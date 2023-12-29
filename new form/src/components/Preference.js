import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textField: {
    margin: "10px 10px 0 10px",
    width: "80%",
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
  dropdown: {
    width: '200px', 
    margin: "10px 10px 0 10px",
  },
  
  dropdownInput: {
    width: '100%', 
    margin: "10px 10px 0 10px",
    height: "10px !important",
  },
}));

export default function CoursePreferenceComponent({ nextStep, previousStep, handleChange }) {
  const [selectedOptions, setSelectedOptions] = useState(Array(8).fill(''));
  const classes = useStyles();

  const prev = (e) => {
    e.preventDefault();
    previousStep();
  };

  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handlePreferenceChange = (index, value) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = value;
    setSelectedOptions(updatedOptions);
  };

  return (
    <>
      <form>
        <table>
          <tbody>
            {[...Array(8)].map((_, index) => (
              <tr key={index}>
                <td>
                  <TextField
                    id={`outlined-basic-${index}`}
                    select
                    label={`Preference ${index + 1}`}
                    value={selectedOptions[index]}
                    onChange={(e) => handlePreferenceChange(index, e.target.value)}
                    variant="outlined"
                    className={classes.dropdown} // Apply custom style here
                    InputProps={{
                      classes: { input: classes.dropdownInput },
                    }}
                  >

                    <MenuItem value="Gardening" disabled={selectedOptions.includes('Gardening')}>Gardening</MenuItem>
                    <MenuItem value="Tailoring" disabled={selectedOptions.includes('Tailoring')}>Tailoring</MenuItem>
                    <MenuItem value="Ceremic" disabled={selectedOptions.includes('Ceremic')}>Ceremic</MenuItem>
                    <MenuItem value="Computer" disabled={selectedOptions.includes('Computer')}>Computer</MenuItem>
                    <MenuItem value="Data entry" disabled={selectedOptions.includes('Data entry')}>Data entry</MenuItem>
                    <MenuItem value="Assembly" disabled={selectedOptions.includes('Assembly')}>Assembly</MenuItem>
                    <MenuItem value="Baking" disabled={selectedOptions.includes('Baking')}>Baking</MenuItem>
                    <MenuItem value="Candle making" disabled={selectedOptions.includes('Candle making')}>Candle making</MenuItem>
                  </TextField>
                </td>
              </tr>
            ))}
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
      </Box>
    </>
  );
}
