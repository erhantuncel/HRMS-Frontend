import axios from "axios";

export default class EducationService{

    add(education) {
        return axios.post(`/educations/add`, education)
    }

    getallByResumeId(resumeId) {
        return axios.get(`/educations/getall-by-resume-id/${resumeId}`)
    }

    getallByResumeIdOrderedByEndDateDesc(resumeId) {
        return axios.get(`/educations/getall-by-resume-id-order-by-end-date-desc/${resumeId}`)
    }


}