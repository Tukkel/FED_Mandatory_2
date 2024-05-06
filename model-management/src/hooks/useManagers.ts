import IManager from "../types/IManager";

const ManagerUrl = "http://localhost:7181/api/Managers";

export function usePostManager(manager: IManager) {
  fetch(ManagerUrl, {
    method: "POST",
    body: JSON.stringify(manager),
    credentials: "include",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json()) // Extract JSON data from response
    .catch((error) => alert("Something bad happened: " + error));
}
