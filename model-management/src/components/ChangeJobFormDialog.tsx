import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IJob, { PostJob } from "../types/IJob";
import { usePutJob, useDeleteJob } from "../hooks/useJobs";

export default function ChangeJobFormDialog({
  onJobChanged,
  job,
}: {
  onJobChanged: () => void;
  job: IJob;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useSubmitJob = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newJob: PostJob = {
      customer: event.currentTarget.customer.value,
      startDate: event.currentTarget.startDate.value,
      days: parseInt(event.currentTarget.days.value),
      location: event.currentTarget.location.value,
      comments: event.currentTarget.comments.value,
    };
    usePutJob(newJob, job.jobId);
    handleClose();
    onJobChanged();
  };

  const useRemoveJob = () => {
    useDeleteJob(job.jobId);
    handleClose();
    onJobChanged();
  };

  return (
    <React.Fragment>
      <Button 
  variant="contained" 
  onClick={handleClickOpen} 
  sx={{ 
    backgroundColor: '#4a4a4a', 
    color: '#fff', 
    fontSize: '20px', 
    padding: '10px 20px', 
    '&:hover': { 
      backgroundColor: '#3a3a3a' 
    } 
  }}>
        {job.customer}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: useSubmitJob,
        }}
      >
        <DialogTitle>Change Job</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please change your details here.
          </DialogContentText>
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
            defaultValue={job.customer}
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
            defaultValue={new Date(job.startDate).toISOString().split("T")[0]}
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
            defaultValue={job.days}
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
            defaultValue={job.location}
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
            defaultValue={job.comments}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Change</Button>
          <Button onClick={useRemoveJob} variant="contained" color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
