import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { PostJob } from "../types/IJob";
import { usePostJob } from "../hooks/useJobs";
import { useEffect } from "react";

export default function JobFormDialog({
  onJobAdded,
}: {
  onJobAdded: () => void;
}) {
  const [open, setOpen] = React.useState(false);
  const [job, setJob] = React.useState<PostJob>({
    customer: "",
    startDate: "",
    days: 0,
    location: "",
    comments: "",
  });

  const postJob = usePostJob(job);

  useEffect(() => {
    postJob;
  }, [job]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setJob({
      customer: event.currentTarget.customer.value,
      startDate: event.currentTarget.startDate.value,
      days: parseInt(event.currentTarget.days.value),
      location: event.currentTarget.location.value,
      comments: event.currentTarget.comments.value,
    });
    handleClose();
    onJobAdded();
  };

  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Job
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Add Job</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your details here.</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="customer"
            name="customer"
            label="Customer"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="startDate"
            name="startDate"
            label="Start Date"
            type="date"
            fullWidth
            variant="standard"
            defaultValue="2020-01-01"
          />
          <TextField
            required
            margin="dense"
            id="days"
            name="days"
            label="Days"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="location"
            name="location"
            label="Location"
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
