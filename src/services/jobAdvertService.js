import axios from "axios";

export default class JobAdvertService{

    add(jobAdvert) {
        return axios.post("/jobadverts/add", jobAdvert)
    }

    changeActiveStatus(employerId, jobAdvertId) {
        return axios.post(`/jobadverts/change-active-status
                            ?employerId=${employerId}
                            &jobAdvertId=${jobAdvertId}`)
    }

    getallActive() {
        return axios.get("/jobadverts/getall-active")
    }

    getAllActiveByEmployerId(employerId) {
        return axios.get(`/jobadverts/getall-active-by-employer-id/${employerId}`)
    }

    getAllActiveOrderByCreatedDateAsc() {
        return axios.get(`jobadverts/getall-active-order-by-createddate-asc`)
    }

    getAllActiveOrderByCreatedDateDesc() {
        return axios.get(`jobadverts/getall-active-order-by-createddate-desc`)
    }

}