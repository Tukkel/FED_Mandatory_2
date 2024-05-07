import React from "react";
import IJob, { Model } from "../types/IJob";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IExpenses from "../types/IExpenses";
import { usePostExpenses } from "../hooks/useExpenses";

interface ExpensesFormDialogProps {
    jobId: number;
    modelId: number;
  }

  export default function ExpensesFormDialog({ jobId, modelId }: ExpensesFormDialogProps) {
  const [open, setOpen] = React.useState(false);
  const [Expense, setModel] = React.useState<IExpenses>({
    efExpenseId: 0,
    modelId: modelId,
    jobId: jobId,
    date: "",
    text: "",
    amount: 0,
  });
  const postExpens = usePostExpenses(Expense);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setModel({
        efExpenseId: 0,
        modelId: parseInt(event.currentTarget.modelId.value),
        jobId: jobId,
        date: event.currentTarget.date.value,
        text: event.currentTarget.text.value,
        amount: parseInt(event.currentTarget.amount.value),
    });
    postExpens;
    handleClose();
  };
  return (
    <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Expens
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Add Expens</DialogTitle>
        <DialogContent>
          <DialogContentText>Place details about expens</DialogContentText>
            <TextField
            margin="dense"
            id="date"
            label="dd-mm-åååå"
            type="date"
            fullWidth />
            <TextField
            autoFocus
            margin="dense"
            id="text"
            label="text"
            type="text"
            fullWidth />
            <TextField
            autoFocus
            margin="dense"
            id="amount"
            label="amount"
            type="number"
            fullWidth />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Add</Button>
        </DialogActions>
        </Dialog>
        </React.Fragment>
        );
}
