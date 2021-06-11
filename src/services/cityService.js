import axios from "axios";

export default class CityService{
    getall() {
        return axios.get(`cities/getall`)
    }
}