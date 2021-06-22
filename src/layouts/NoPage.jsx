import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

export default function NoPage() {
    return (
        <Segment placeholder>
            <Header as="h1" icon>
                <Icon name='exclamation' color="red" />
                <br />404 <br />
                There is no page
            </Header>
        </Segment>
    )
}
