import axios from "axios";

export default class PhotoService{

    add(photo) {
        return axios.post(`/photos/add`, photo)
    }

    getall() {
        return axios.get(`/photos/add`)
    }

    delete(photoId) {
        return axios.get(`/photos/delete/${photoId}`)
    }
}