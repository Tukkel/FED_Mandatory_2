import { useGetJobs } from "../hooks/useJobs";
import IJob from "../types/IJob";
import Job from "../components/Job";
import ModelJobs from "../components/Modeljobs";

function JobsPage() {
  const jobs: IJob[] = useGetJobs(0);

  return (
    <div>
      <h1 className={"text-3xl"}>Jobs Page</h1>
      {ModelJobs && jobs.map((job, index) => <ModelJobs key={index} job={job} />)}
    </div>
  );
}

export default JobsPage;
