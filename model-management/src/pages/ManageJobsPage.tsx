import { useState } from "react";
import { useGetJobs } from "../hooks/useJobs";
import IJob from "../types/IJob";
import Job from "../components/Job";
import ModelFormDialog from "../components/ModelFormDialog";
import ManagerFormDialog from "../components/ManagerFormDialog";
import JobFormDialog from "../components/JobFormDialog";

function ManageJobsPage() {
  const [refreshKey, setRefreshKey] = useState(0);
  const jobs: IJob[] = useGetJobs(refreshKey);

  const handleJobAdded = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="my-2">
      <div className="flex justify-between">
        <h1 className="text-3xl text-center">Manage Jobs Page</h1>
        <div className="flex">
          <div className="m-2">
            <ModelFormDialog />
          </div>
          <div className="m-2">
            <ManagerFormDialog />
          </div>
          <div className="m-2">
            <JobFormDialog onJobAdded={handleJobAdded} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-start">
        {jobs &&
          jobs.map((job, index) => (
            <div className="m-2">
              <Job key={index} job={job} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ManageJobsPage;
