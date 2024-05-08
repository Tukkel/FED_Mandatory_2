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

  const handleJobChanged = () => {
    setTimeout(() => {
      setRefreshKey((prevKey) => prevKey + 1);
    }, 1000);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-3xl text-center m-2">Manage Jobs Page</h1>
        <div className="flex">
          <div className="m-2">
            <ModelFormDialog />
          </div>
          <div className="m-2">
            <ManagerFormDialog />
          </div>
          <div className="m-2">
            <JobFormDialog onJobAdded={handleJobChanged} />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-start gap-4">
        {jobs &&
          jobs.map((job, index) => (
            <div className="m-2">
              <Job key={index} job={job} onJobChanged={handleJobChanged} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ManageJobsPage;
