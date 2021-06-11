import axios from "axios";

export default class AuthService{

    confirmEmployer(employerId, staffId) {
        return axios.get(`/auth/confirm-employer/${employerId}/${staffId}`)
    }

    registerCandidate(candidate) {
        return axios.post(`/auth/registercandidate`, candidate)
    }

    registerEmployer(employer) {
        return axios.post(`/auth/registeremployer`, employer)
    }

    verifyEmail(userId, code) {
        return axios.get(`/auth/verify-email/${userId}/${code}`)
    }
}