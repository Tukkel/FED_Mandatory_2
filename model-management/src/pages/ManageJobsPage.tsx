import { useGetJobs } from "../hooks/useJobs";
import IJob from "../types/IJob";
import Job from "../components/Job";
import ModelFormDialog from "../components/ModelFormDialog";

function ManageJobsPage() {
  const jobs: IJob[] = useGetJobs();

  return (
    <div className="flex my-2">
      <div className="flex-grow">
        <h1 className="text-3xl text-center">Manage Jobs Page</h1>
        <div className="flex flex-wrap justify-start">
          {jobs &&
            jobs.map((job, index) => (
              <div className="m-2">
                <Job key={index} job={job} />
              </div>
            ))}
        </div>
      </div>
      <div className="absolute right-2">
        <ModelFormDialog />
      </div>
    </div>
  );
}

export default ManageJobsPage;
