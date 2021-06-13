import axios from "axios";

export default class StaffConfirmationService{
    confirmJobAdvert(jobAdvertId, staffId) {
        axios.get(`/staff-confirmations/confirm-jobadvert/${jobAdvertId}/${staffId}`)
    }
}