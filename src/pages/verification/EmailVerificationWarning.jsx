import React from 'react'
import { Header, Segment, Icon } from 'semantic-ui-react'

export default function EmailVerificationWarning() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name="mail"/>
                To complete your registration verification e-mail has been sent. 
                <br />Please check your e-mail address.
            </Header>
        </Segment>
    )
}
