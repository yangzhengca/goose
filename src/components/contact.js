import React, { useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  Typography,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  InputLabel,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  formControl: {
    // margin: theme.spacing(1),
    minWidth: "100%",
  },
}));

const contact = ({ open, setOpen, handleClickOpen }) => {
  const classes = useStyles();
  //   const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const [quoteType, setQuoteType] = useState("");

  const handleChange = (e) => {
    setQuoteType(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_codeify",
        e.target,
        "user_vsyekuRt9c6kyjVaIDDOU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    handleClose()
    alert("Message sent successfully!");
  };

  return (
    <>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="contact"
      >
        <DialogTitle id="contact">
          {"Leave a message to get a quote: "}
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText> */}
          <form onSubmit={sendEmail}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="company"
                  name="company"
                  label="Company name"
                  fullWidth
                  autoComplete="company"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="province"
                  name="province"
                  label="Province/State"
                  fullWidth
                  autoComplete="province"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  autoComplete="country"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl required className={classes.formControl}>
                  <InputLabel id="quote-type">Quote Type</InputLabel>
                  <Select
                    labelId="quote-type"
                    id="quote-type"
                    value={quoteType}
                    onChange={handleChange}
                    className={classes.selectEmpty}
                    name='quote-type'
                  >
                    <MenuItem value="Website Development">
                      Website Development
                    </MenuItem>
                    <MenuItem value="Service">Website Service</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  id="message"
                  name="message"
                  label="Message"
                  fullWidth
                  autoComplete="message"
                />
              </Grid>
            </Grid>
            <DialogActions>
              <Button autoFocus onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type='submit' color="primary" autoFocus>
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default contact;
