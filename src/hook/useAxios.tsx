import axios from "axios";
import { VITE_API } from "./useEnv";


export const useAxios = axios.create({baseURL:VITE_API})