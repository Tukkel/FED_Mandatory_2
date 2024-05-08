import { useGetJobs } from "../hooks/useJobs";
import IJob from "../types/IJob";
import ModelJobs from "../components/Modeljobs";

function JobsPage() {
  const jobs: IJob[] = useGetJobs(0);

  return (
    <div>
      <h1 className={"text-3xl"}>Jobs Page</h1>
      <div className="grid grid-cols-4 gap-4">
        {ModelJobs &&
          jobs.map((job, index) => <ModelJobs key={index} job={job} />)}
      </div>
    </div>
  );
}

export default JobsPage;
