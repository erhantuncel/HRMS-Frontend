import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'
import { logOut } from '../store/actions/userActions'

export default function UserMenu() {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSignOut = () => {
        dispatch(logOut())
        history.push("/")
    }

    return (
        <Menu.Menu position="right">
            <Dropdown item text='Name Surname'>
                <Dropdown.Menu>
                    <Dropdown.Item>Edit Profile</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleSignOut()}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    )
}
