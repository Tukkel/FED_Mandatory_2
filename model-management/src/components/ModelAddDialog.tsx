import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { usePostModeltoJob } from "../hooks/useJobs";

interface ModelAddDialogProps {
  jobId: number;
}

export default function ModelAddDialog({ jobId }: ModelAddDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useSubmitModel = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const modelId = event.currentTarget.modelId.value;
    usePostModeltoJob(modelId, jobId);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
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
        <DialogTitle>Add Model to job</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter model id</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="modelId"
            name="modelId"
            label="modelId"
            type="number"
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