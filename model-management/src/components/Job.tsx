import React from "react";
import IJob, { Model } from "../types/IJob";
import Button from "@mui/material/Button";
import ModelAddDialog from "./ModelAddDialog";

interface JobProps {
  job: IJob;
}

const Job: React.FC<JobProps> = ({ job }) => {
  return (
    <div>
      <h2 className={"text-2xl"}>{job.customer}</h2>
      <p>Start Date: {new Date(job.startDate).toLocaleDateString()}</p>
      <p>Days: {job.days}</p>
      <p>Location: {job.location}</p>
      <p>Comments: {job.comments}</p>
      <div className="m-2">
          <ModelAddDialog jobId={job.jobId}/>
        </div>
      <h3 className={"text-xl"}>Models on this job:</h3>
      {job.models &&
        job.models.map((model, modelIndex) => (
          <div key={modelIndex}>
             <Button variant="contained"  onClick={() => alert(`First Name: ${model.firstName}\nLast Name: ${model.lastName}\nPhone Number: ${model.phoneNo}\nEmail: ${model.email}`)} >
    {model.firstName} {model.lastName}
    </Button>
  
    </div>
        ))}
    </div>
  );
};
export default Job;
