import axios from "axios";

export default class WorkLocationService{
    getall() {
        return axios.get(`/work-locations/getall`)
    }
}