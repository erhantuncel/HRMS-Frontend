import axios from "axios";

export default class EmployerService{

    getall() {
        return axios.get("/employers/getall")
    }
}