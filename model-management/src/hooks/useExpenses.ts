import IExpenses from "../types/IExpenses";

const ModelUrl = "http://localhost:7181/api/Expenses";

export function usePostExpenses(Expense: IExpenses) {
  fetch(ModelUrl, {
    method: "POST",
    body: JSON.stringify(Expense),
    credentials: "include",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json()) // Extract JSON data from response
    .catch((error) => alert("Something bad happened: " + error));
}
