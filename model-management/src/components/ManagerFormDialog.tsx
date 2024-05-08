import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Modal from '@mui/material/Modal';
import IManager from "../types/IManager";
import { usePostManager } from "../hooks/useManagers";

export default function ManagerFormDialog() {
  const [open, setOpen] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useSubmitManager = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newManager: IManager = {
      firstName: event.currentTarget.firstName.value,
      lastName: event.currentTarget.lastName.value,
      email: event.currentTarget.email.value,
      password: event.currentTarget.password.value,
    };
    usePostManager(newManager);
    handleClose();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 500); // Display checkmark for 2 seconds
  
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Add Manager
      </Button>
      <Modal
        open={submitted}
        onClose={() => setSubmitted(false)}
        aria-labelledby="submission-success-modal"
        aria-describedby="indicates-successful-manager-submission"
      >
        <CheckCircleIcon sx={{ fontSize: 300, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#00b200' }} />
      </Modal>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: useSubmitManager,
        }}
      >
        <DialogTitle>Add Manager</DialogTitle>
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
