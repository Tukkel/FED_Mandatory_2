import React from "react";
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

export default function ExpensesFormDialog({
  jobId,
  modelId,
}: ExpensesFormDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const useSubmitExpense = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newExpenses: IExpenses = {
      modelId: modelId,
      jobId: jobId,
      date: event.currentTarget.date.value,
      text: event.currentTarget.text.value,
      amount: parseInt(event.currentTarget.amount.value),
    };
    usePostExpenses(newExpenses);
    handleClose();
  };
  return (
    <React.Fragment>
      <Button variant="contained" color="success" onClick={handleClickOpen}>
        Add Expense
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: useSubmitExpense,
        }}
      >
        <DialogTitle>Add Expense</DialogTitle>
        <DialogContent>
          <DialogContentText>Place details about expense</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="date"
            label="dd-mm-åååå"
            type="date"
            fullWidth
            defaultValue="2020-01-01"
          />
          <TextField
            margin="dense"
            id="text"
            label="text"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="amount"
            label="amount"
            type="number"
            fullWidth
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
