import { useGetJobs } from "../hooks/useJobs";
import IJob from "../types/IJob";
import Job from "../components/Job";

function JobsPage() {
  const jobs: IJob[] = useGetJobs(0);

  return (
    <div>
      <h1 className={"text-3xl"}>Jobs Page</h1>
      {jobs && jobs.map((job, index) => <Job key={index} job={job} />)}
    </div>
  );
}

export default JobsPage;
