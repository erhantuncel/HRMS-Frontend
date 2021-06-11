import axios from "axios";

export default class SocialMediaLinkService{
    add(socialMediaLink) {
        return axios.post(`/social-media-links/add`, socialMediaLink)
    }

    getallByResumeId(resumeId) {
        return axios.get(`/social-media-links/getall-by-resume-id/${resumeId}`)
    }
}