import { Model } from "../types/IJob";
import {EfModel, IModel} from "../types/IModel";
import { useEffect, useState } from "react";

const ModelUrl = "http://localhost:7181/api/Models";

export function usePostModel(model: IModel) {
  fetch(ModelUrl, {
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


export function useGetModels() {
    const [models, setModels] = useState<EfModel[]>([]);
    useEffect(() => {
      fetch(ModelUrl, {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json()) // Extract JSON data from response
        .then((data) => {
          setModels(data);
        })
        .catch((error) => alert("Something bad happened: " + error));
    }, []);
    return models;
  }

/*   export function usePutModel(id: number, model: Model ) {
    fetch(`${ModelUrl}/${id}`, {
      method: "PUT",
      body: JSON.stringify(model),
      credentials: "include",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json()) // Extract JSON data from response
      .catch((error) => alert("Something bad happened: " + error));
  } */


