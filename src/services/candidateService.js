import axios from "axios";

export default class CandidateService{

    getall() {
        return axios.get("/candidates/getall")
    }

    add(candidate) {
        return axios.post("/candidates/add", candidate)
    }
}