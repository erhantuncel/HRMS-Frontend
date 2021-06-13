import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function GuestMenu({signIn}) {
    return (
        <Menu.Menu position="right">
            <Menu.Item position="right">
                <Button color={'green'} inverted style={{ marginLeft: '0.5em' }}
                    onClick={signIn}>Create Resume</Button>
                <Button color={'blue'} inverted style={{ marginLeft: '0.5em' }}
                    onClick={signIn}>Post Job</Button>
            </Menu.Item>
        </Menu.Menu>
    )
}
