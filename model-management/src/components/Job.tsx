import React from "react";
import IJob from "../types/IJob";
import Button from "@mui/material/Button";
import ChangeJobFormDialog from "./ChangeJobFormDialog";
import JobAddModel from "./JobAddModelForm";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface JobProps {
  job: IJob;
  onJobChanged: () => void;
}

const Job: React.FC<JobProps> = ({ job, onJobChanged }) => {
  return (
    <Card sx={{ backgroundColor: '#d3d3d3'  }}>
      <CardContent>
        <div>
          <ChangeJobFormDialog onJobChanged={onJobChanged} job={job} />
        </div>
        <p>Start Date: {new Date(job.startDate).toLocaleDateString()}</p>
        <p>Days: {job.days}</p>
        <p>Location: {job.location}</p>
        <p>Comments: {job.comments}</p>
        <p className={""}>Models on this job:</p>
        {job.models &&
          job.models.map((model, modelIndex) => (
            <div key={modelIndex}>
              <Button
                variant="contained"
                onClick={() =>
                  alert(
                    `First Name: ${model.firstName}\nLast Name: ${model.lastName}\nPhone Number: ${model.phoneNo}\nEmail: ${model.email}`
                  )
                }
              >
                {model.firstName} {model.lastName}
              </Button>
            </div>
          ))}
          <div className="p-2">
          <JobAddModel job={job} onJobChanged={onJobChanged}/>
          </div>
      </CardContent>
    </Card>
  );
};
export default Job;import React from "react";
import IJob from "../types/IJob";
import Button from "@mui/material/Button";
import ChangeJobFormDialog from "./ChangeJobFormDialog";
import JobAddModelForm from "./JobAddModelForm";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

interface JobProps {
  job: IJob;
  onJobChanged: () => void;
}

const Job: React.FC<JobProps> = ({ job, onJobChanged }) => {
  return (
    <Card sx={{ backgroundColor: "#d3d3d3" }}>
      <CardContent>
        <div>
          <ChangeJobFormDialog onJobChanged={onJobChanged} job={job} />
        </div>
        <p>Start Date: {new Date(job.startDate).toLocaleDateString()}</p>
        <p>Days: {job.days}</p>
        <p>Location: {job.location}</p>
        <p>Comments: {job.comments}</p>
        <p className={""}>Models on this job:</p>
        {job.models &&
          job.models.map((model, modelIndex) => (
            <div key={modelIndex} className="my-2">
              <Button
                variant="contained"
                onClick={() =>
                  alert(
                    `First Name: ${model.firstName}\nLast Name: ${model.lastName}\nPhone Number: ${model.phoneNo}\nEmail: ${model.email}`
                  )
                }
              >
                {model.firstName} {model.lastName}
              </Button>
            </div>
          ))}
        <div className="my-2">
          <JobAddModelForm job={job} onJobChanged={onJobChanged} />
        </div>
      </CardContent>
    </Card>
  );
};
export default Job;
