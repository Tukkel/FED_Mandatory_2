import React from "react";
import IJob, { Model } from "../types/IJob";
import Button from "@mui/material/Button";
import ExpensesFormDialog from "./ExpensFormDialog";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface JobProps {
  job: IJob;
}

const ModelJobs: React.FC<JobProps> = ({ job }) => {
  return (
    <Card sx={{backgroundColor: '#d3d3d3' }}>
      <CardContent>
        <h2 className={"text-2xl"}>{job.customer}</h2>
        <p>Start Date: {new Date(job.startDate).toLocaleDateString()}</p>
        <p>Days: {job.days}</p>
        <p>Location: {job.location}</p>
        <p>Comments: {job.comments}</p>
        <div className="m-2">
          <ExpensesFormDialog jobId={job.jobId} modelId={Number(localStorage.getItem("modelId"))} />
        </div>
      </CardContent>
    </Card>
  );
};

export default ModelJobs;
