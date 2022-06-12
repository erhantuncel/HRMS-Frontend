import { addResumeFormModel } from "./addResumeFormModel";

const {
    formField: {
        name,
        preface,
        firstName,
        lastName,
        identityNumber,
        email,
        githubUrl,
        linkedinUrl
    }
} = addResumeFormModel

export const addResumeFormInitialValues = {
    [name.name]: "",
    [preface.name]: "",
    [firstName.name]: "",
    [lastName.name]: "",
    [identityNumber.name]: "",
    [email.name]: "",
    [githubUrl.name]: "",
    [linkedinUrl.name]: "",
    // [skills.name]: "",
    "educations": [],
    "jobExperiences": [],
    "languages": [],
    "skillStr": []
};