import axios from "axios";
import { BASE_URL } from "./constant";

export async function getAll(endpoint) {
  try {
    const response = await axios.get(BASE_URL + endpoint);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getOne(endpoint, id) {
  try {
    const response = await axios.get(BASE_URL + endpoint + `${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteOne(endpoint, id) {
  try {
    const response = await axios.delete(BASE_URL + endpoint + `${id}`);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function addOne(endpoint, payload) {
  try {
    const response = await axios.post(BASE_URL + endpoint, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateOne(endpoint, payload, id) {
  try {
    const response = await axios.put(BASE_URL + endpoint + `${id}`, payload);
    return response;
  } catch (error) {
    console.log(error.message);
  }
}
