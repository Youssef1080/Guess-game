import axios from "axios";
const apiUrl = "https://jsonplaceholder.typicode.com/todos";

export function getTasks() {
  return axios.get(apiUrl);
}
export function searchTask(search) {
  return axios.get(apiUrl + "?search=" + search);
}

export function addTask(task) {
  return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
  return axios.patch(apiUrl + "/" + id, task);
}

export function deleteTaskById(id) {
  return axios.delete(apiUrl + "/" + id);
}
