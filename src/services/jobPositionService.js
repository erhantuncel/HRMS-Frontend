import axios from "axios";

export default class JobPositionService{

    add(jobPosition) {
        return axios.post("/jobpositions/add", jobPosition)
    }

    getall() {
        return axios.get("/jobpositions/getall")
    }
}