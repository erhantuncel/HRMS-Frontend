import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

export default function UserMenu({signOut}) {
    return (
        <Menu.Menu position="right">
            <Dropdown item text='Name Surname'>
                <Dropdown.Menu>
                    <Dropdown.Item>Edit Profile</Dropdown.Item>
                    <Dropdown.Item onClick={signOut}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    )
}
