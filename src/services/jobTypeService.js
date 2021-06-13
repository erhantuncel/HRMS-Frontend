import axios from "axios";

export default class JobTypeService{
    getall() {
        return axios.get(`/job-types/getall`)
    }
}