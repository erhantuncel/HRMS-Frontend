import React, { useEffect, useState } from 'react'
import { Grid, Image, Segment, Button } from 'semantic-ui-react'
import HrmsTextInput from '../../../../utilities/customFormControls/HrmsTextInput'

export default function PersonalInformationForm(props) {
    const {
        formField: {
            firstName,
            lastName,
            identityNumber,
            yearOfBirth,
            email
        },
        selectedPhoto,
        setSelectedPhoto,
        selectedPhotoUrl,
        setSelectedPhotoUrl
    } = props
    
    useEffect(() => {
        selectedPhoto ? setSelectedPhotoUrl(URL.createObjectURL(selectedPhoto)) :
            setSelectedPhotoUrl("/noProfilePhoto.jpg")
    }, [selectedPhoto, setSelectedPhotoUrl])

    const handleFileChange = (event) => {
        setSelectedPhoto(event.target.files[0])
        setSelectedPhotoUrl(URL.createObjectURL(event.target.files[0]))
    }
    return (
        <React.Fragment>
            <Grid >
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Segment basic style={{ margin: "0", padding: "0.4rem 0 0.6rem 0", height: "225px" }}>
                            <Image src={selectedPhotoUrl} />
                        </Segment>
                        <Segment basic style={{ margin: "0", padding: "0" }}>
                            <Button as="label" type="button" color="grey" fluid size="mini"
                                htmlFor="fileInput"
                            >
                                {selectedPhoto ? "Change Photo" : "Upload Photo"}
                            </Button>
                            <input type="file" id="fileInput" hidden
                                onChange={(event) => handleFileChange(event)} />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={11}>
                        <HrmsTextInput
                            name={firstName.name} id={firstName.name} type="text"
                            label={firstName.label} value="First Name1" readOnly 
                        />
                        <HrmsTextInput
                            name={lastName.name} id={lastName.name} type="text"
                            label={lastName.label} value="Last Name1" readOnly
                        />
                        <HrmsTextInput
                            name={identityNumber.name} id={identityNumber.name} type="text"
                            label={identityNumber.label} value="12345678910" readOnly
                        />
                        <HrmsTextInput
                            name={yearOfBirth.name} id={yearOfBirth.name} type="text"
                            label={yearOfBirth.label} value="1983" readOnly
                        />
                        <HrmsTextInput
                            name={email.name} id={email.name} type="text"
                            label={email.label} value="candidate@abc.com" readOnly
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </React.Fragment >
    )
}
