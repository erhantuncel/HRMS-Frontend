import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Icon, Menu } from 'semantic-ui-react'
import GuestMenu from './GuestMenu'
import UserMenu from './UserMenu'

export default function Navigation() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const history = useHistory()

    function handleSignOut() {
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    return (
        <Menu inverted style={{margin: 0}} >
            <Container>
                <Menu.Item header as="h3">
                    <Link to="/">
                    <Icon name="group" />
                    Human Resources Management
                    </Link>
                </Menu.Item>
                { isAuthenticated ? <UserMenu signOut={handleSignOut} /> 
                                  : <GuestMenu signIn={handleSignIn} /> }
            </Container>
        </Menu>
    )
}
