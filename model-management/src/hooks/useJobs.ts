import { useEffect, useState } from "react";
import IJob, { PostJob } from "../types/IJob";

const JobsUrl = "http://localhost:7181/api/Jobs";

const JobsToModelUrl =
  "http://localhost:7181/api/Jobs/{jobId}/Models/{modelId}";

export function useGetJobs(refreshKey: number) {
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
  }, [refreshKey]);
  return jobs;
}

export function usePostJob(job: PostJob) {
  fetch(JobsUrl, {
    method: "POST",
    body: JSON.stringify(job),
    credentials: "include",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json()) // Extract JSON data from response
    .catch((error) => alert("Something bad happened: " + error));
}

export function usePutJob(job: PostJob, id: number) {
  fetch(`${JobsUrl}/${id}`, {
    method: "PUT",
    body: JSON.stringify(job),
    credentials: "include",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json()) // Extract JSON data from response
    .catch((error) => alert("Something bad happened: " + error));
}

export function useDeleteJob(id: number) {
  fetch(`${JobsUrl}/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  }).catch((error) => alert("Something bad happened: " + error));
}

export function usePostModeltoJob(modelId: number, jobId: number) {
  const url = `${JobsToModelUrl}?modelId=${modelId}&jobId=${jobId}`; // Add parameters to the URL

  fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json()) // Extract JSON data from response
    .catch((error) => alert("Something bad happened: " + error));
}
