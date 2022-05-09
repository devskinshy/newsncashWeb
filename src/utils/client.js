import axios from "axios";
import {BASE_URL} from "../config";

export const publicClient = axios.create({
  baseURL: BASE_URL
});
