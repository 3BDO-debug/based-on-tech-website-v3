import axiosInstance from "./axios";

export const contactUsRequest = async (requestData) =>
  axiosInstance
    .post("/inquires/inquires-handler", requestData)
    .then((response) => response.data);
