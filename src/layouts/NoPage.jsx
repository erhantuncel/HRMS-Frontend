import React from 'react'
import { Header, Icon, Segment } from 'semantic-ui-react'

export default function NoPage() {
    return (
        <Segment placeholder>
            <Header as="h1" icon>
                <Icon name='exclamation triangle' />
                404 <br />
                There is no page for this path
            </Header>
        </Segment>
    )
}
