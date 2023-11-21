import axiosInstance from "./axios";

export const startProjectRequest = async (requestData) =>
  axiosInstance
    .post("/projects-requests/projects-requests-handler", requestData)
    .then((response) => response.data);
