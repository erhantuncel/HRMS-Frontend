import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Icon, Menu } from 'semantic-ui-react'
import GuestMenu from './GuestMenu'
import UserMenu from './UserMenu'

export default function Navigation() {
    const {user} = useSelector(state => state.userInfo)
    return (
        <Menu inverted style={{margin: 0}} >
            <Container>
                <Menu.Item header as="h3">
                    <Link to="/">
                    <Icon name="group" />
                    Human Resources Management
                    </Link>
                </Menu.Item>
                { user === null ? <GuestMenu /> : <UserMenu />}
            </Container>
        </Menu>
    )
}
