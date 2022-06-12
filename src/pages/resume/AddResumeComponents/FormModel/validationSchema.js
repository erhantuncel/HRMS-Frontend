import * as Yup from 'yup';
import { addResumeFormModel } from "./addResumeFormModel";

const {
    formField: {
        name,
        preface,
        githubUrl,
        linkedinUrl,
        schoolName,
        department,
        startDate,
        endDate,
        jobPosition,
        workplaceName,
        languageName,
        level
    }
} = addResumeFormModel

const validationSchema = [
    Yup.object().shape({
        [name.name]: Yup.string().required("Required"),
        [preface.name]: Yup.string().required("Required"),
    }),
    null,
    Yup.object().shape({
        "educations": Yup.array().of(
            Yup.object({
                [schoolName.name]: Yup.string().required("Required"),
                [department.name]: Yup.string().required("Required"),
                [startDate.name]: Yup.date().required("Required"),
                [endDate.name]: Yup.date().required("Required"),
            })
        ),
    }),
    Yup.object().shape({
        "jobExperiences": Yup.array().of(
            Yup.object().shape({
                [jobPosition.name]: Yup.object().shape({
                    id: Yup.number().required("Required")
                }),
                [workplaceName.name]: Yup.string().required("Required"),
                [startDate.name]: Yup.date().required("Required"),
                [endDate.name]: Yup.date().required("Required")
            }),
        ),
    }),
    Yup.object().shape({
        "languages": Yup.array().of(
            Yup.object().shape({
                [languageName.name]: Yup.string().required("Required"),
                [level.name]: Yup.string().required("Required")
            })
        ),
    }),
    Yup.object().shape({
        [githubUrl.name]: Yup.string().required("Required"),
        [linkedinUrl.name]: Yup.string().required("Required"),
    }),
    null
];

export default validationSchema;