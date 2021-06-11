import axios from "axios";

export default class SocialMediaService{
    getall() {
        return axios.get(`/social-medias/getall`)
    }

    getById(id) {
        return axios.get(`/social-medias/get-by-id/${id}`)
    }
}