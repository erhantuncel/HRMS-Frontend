import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu } from 'semantic-ui-react'

export default function GuestMenu() {
    return (
        <Menu.Menu position="right">
            <Menu.Item position="right">
                <Button color={'green'} inverted style={{ marginLeft: '0.5em' }}
                   as={Link} to="/login">Create Resume</Button>
                <Button color={'blue'} inverted style={{ marginLeft: '0.5em' }}
                   as={Link} to="/login">Post Job</Button>
            </Menu.Item>
        </Menu.Menu>
    )
}
