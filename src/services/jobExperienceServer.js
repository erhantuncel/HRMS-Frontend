import axios from "axios";

export default class JobExperienceService{
    add(jobExperience) {
        return axios.post(`/job-experinces/add`, jobExperience)
    }

    getallByResumeIdOrderedByEndDateDesc(resumeId) {
        return axios.get(`/job-experinces/getall-by-resume-id-order-by-end-date-desc/${resumeId}`)
    }
    
    getallByResumeId(resumeId) {
        return axios.get(`/job-experinces/getall-by-resume-id/${resumeId}`)
    }
}