import IModel from "../types/IModel";

const ModelsUrl = "http://localhost:7181/api/Models";

export function usePostModel(model: IModel) {
  fetch(ModelsUrl, {
    method: "POST",
    body: JSON.stringify(model),
    credentials: "include",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json()) // Extract JSON data from response
    .catch((error) => alert("Something bad happened: " + error));
}
