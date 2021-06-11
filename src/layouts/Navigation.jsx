import React from 'react'
import { Container, Icon, Menu } from 'semantic-ui-react'
import GuestMenu from './GuestMenu'
import UserMenu from './UserMenu'

export default function Navigation() {
    const isSignedIn = false
    
    return (
        <Menu inverted style={{margin: 0}} >
            <Container>
                <Menu.Item header as="h3">
                    <Icon name="group" />
                    Human Resources Management
                </Menu.Item>
                { isSignedIn ? <UserMenu /> : <GuestMenu/> }
            </Container>
        </Menu>
    )
}
