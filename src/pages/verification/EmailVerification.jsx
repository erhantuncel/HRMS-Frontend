import React, { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Segment, Header, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import AuthService from '../../services/authService'

export default function EmailVerification() {

    const [isVerified, setIsVerified] = useState(false)
    const { userId, code } = useParams()

    useLayoutEffect(() => {
        let authService = new AuthService()
        authService.verifyEmail(userId, code).then(
            result => {
                console.log(result)
                setIsVerified(result.data.success)
            }
        )
    }, [userId, code])

    return (
        <Segment placeholder>
            <Header icon>
                {isVerified ?
                    <Icon name="checkmark" color="green" /> :
                    <Icon name="exclamation" color="red" />
                }
                Email verification is {!isVerified ? "not" : null} successful.
            </Header>
            {isVerified ? <Button primary as={Link} to="/login">LogIn</Button>
                        : null}
            
        </Segment>
    )
}
