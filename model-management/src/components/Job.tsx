import React from "react";
import IJob, { JobModel } from "../types/IJob";

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
      <h3 className={"text-xl"}>Job Models:</h3>
      {job.jobModels &&
        job.jobModels.map(
          (model: JobModel, modelIndex: number) =>
            model.model && (
              <div key={modelIndex}>
                <p>Job: {model.job}</p>
                <p>Model First Name: {model.model.firstName}</p>
                <p>Model Last Name: {model.model.lastName}</p>
                {/* Add more fields as needed */}
              </div>
            )
        )}
    </div>
  );
};

export default Job;
