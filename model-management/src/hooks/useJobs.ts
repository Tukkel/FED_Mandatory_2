import { useEffect, useState } from "react";
import IJob from "../types/IJob";

const JobsUrl = "http://localhost:7181/api/Jobs";

export function useGetJobs() {
  const [jobs, setJobs] = useState<IJob[]>([]);
  useEffect(() => {
    fetch(JobsUrl, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // Extract JSON data from response
      .then((data) => {
        setJobs(data);
      })
      .catch((error) => alert("Something bad happened: " + error));
  }, []);
  return jobs;
}
