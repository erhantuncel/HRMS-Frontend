import axios from "axios";

export default class LanguageService{

    add(language) {
        return axios.post(`/languages/add`, language)
    }
}