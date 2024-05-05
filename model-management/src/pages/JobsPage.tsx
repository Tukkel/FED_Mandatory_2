import { useGetJobs } from "../hooks/useJobs";
import IJob from "../types/IJob";
import Job from "../components/Job";

function JobsPage() {
  const jobs: IJob[] = useGetJobs();

  return (
    <div>
      <h1>Jobs Page</h1>
      {jobs && jobs.map((job, index) => <Job key={index} job={job} />)}
    </div>
  );
}

export default JobsPage;
