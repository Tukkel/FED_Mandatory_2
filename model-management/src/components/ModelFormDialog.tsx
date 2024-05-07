import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IModel from "../types/IModel";
import { usePostModel } from "../hooks/useModels";

export default function ModelFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useSubmitModel = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newModel: IModel = {
      firstName: event.currentTarget.firstName.value,
      lastName: event.currentTarget.lastName.value,
      email: event.currentTarget.email.value,
      phoneNo: event.currentTarget.phoneNo.value,
      addresLine1: event.currentTarget.addressLine1.value,
      addresLine2: event.currentTarget.addressLine2.value,
      zip: event.currentTarget.zip.value,
      city: event.currentTarget.city.value,
      country: event.currentTarget.country.value,
      birthDate: event.currentTarget.birthDate.value,
      nationality: event.currentTarget.nationality.value,
      height: parseInt(event.currentTarget.height.value),
      shoeSize: parseInt(event.currentTarget.shoeSize.value),
      hairColor: event.currentTarget.hairColor.value,
      eyeColor: event.currentTarget.eyeColor.value,
      comments: event.currentTarget.comments.value,
      password: event.currentTarget.password.value,
    };
    usePostModel(newModel);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Model
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: useSubmitModel,
        }}
      >
        <DialogTitle>Add Model</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your details here.</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="firstName"
            name="firstName"
            label="First Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="lastName"
            name="lastName"
            label="Last Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="phoneNo"
            name="phoneNo"
            label="Phone Number"
            type="tel"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="addressLine1"
            name="addressLine1"
            label="Address Line 1"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="addressLine2"
            name="addressLine2"
            label="Address Line 2"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="zip"
            name="zip"
            label="ZIP Code"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="city"
            name="city"
            label="City"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="country"
            name="country"
            label="Country"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="birthDate"
            name="birthDate"
            label="Birth Date"
            type="date"
            fullWidth
            variant="standard"
            defaultValue="2020-01-01"
          />
          <TextField
            required
            margin="dense"
            id="nationality"
            name="nationality"
            label="Nationality"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="height"
            name="height"
            label="Height"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="shoeSize"
            name="shoeSize"
            label="Shoe Size"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="hairColor"
            name="hairColor"
            label="Hair Color"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="eyeColor"
            name="eyeColor"
            label="Eye Color"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="comments"
            name="comments"
            label="Comments"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="password"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
