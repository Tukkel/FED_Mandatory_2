import * as React from "react";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useGetModels } from "../hooks/useModels";
import { usePostModeltoJob } from "../hooks/useJobs";
import { EfModel } from "../types/IModel";


interface JobAddModelProps {
    jobId: number;
  }


export default function JobAddModelForm( {jobId, onJobChanged,}: {jobId: number, onJobChanged: ()=>void}){

    const [open, setOpen]=React.useState(false);
    const models: EfModel[] = useGetModels();

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const useAddModelToJob = (model: EfModel, jobId: number) => {
        usePostModeltoJob(model.EfModelId, jobId);
    }



    return(
        <React.Fragment>
      <Button variant="contained" onClick={handleClickOpen} sx={{ backgroundColor: '#ffd700', '&:hover': { backgroundColor: '#cca300' } }}>  Change Models
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
        }}
      >
        <DialogTitle>Change Models</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Choose what models should be on the job.
            </DialogContentText>
            {models.map((model, index) => (
    <FormControlLabel
        key={index}
        control={<Checkbox value={model.EfModelId} />}
        label={`${model.firstName} ${model.lastName}`}
    />
))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>

    );
}

