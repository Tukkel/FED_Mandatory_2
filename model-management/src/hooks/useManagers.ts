import IManager from "../types/IManager";

const ManagersUrl = "http://localhost:7181/api/Managers";

export function usePostManager(manager: IManager) {
  fetch(ManagersUrl, {
    method: "POST",
    body: JSON.stringify(manager),
    credentials: "include",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  })
    .catch((error) => alert("Something bad happened: " + error));
}
