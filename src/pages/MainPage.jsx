import React from 'react'
import { Button, Container, Form, Grid, Image, Segment, Select } from 'semantic-ui-react'

export default function MainPage() {
    const countryOptions = [
        { key: 6, value: 'Ankara', text: 'Ankara' },
        { key: 14, value: 'Bolu', text: 'Bolu' },
    ]
    return (
        <Container className="main">
            <Grid columns={2} style={{height: '90vh'}}>
                <Grid.Row verticalAlign="middle">
                    <Grid.Column width={10} style={{paddingRight:'3em'}}>
                        <Image src={process.env.PUBLIC_URL + 'colleagues.jpg'} fluid centered />
                    </Grid.Column>
                    <Grid.Column width={6} style={{paddingRight:'2em'}}>
                        <Segment  color="blue">
                            <Form >
                                <Form.Field>
                                    <label>Job Position</label>
                                    <input placeholder='Job Position' />
                                </Form.Field>
                                <Form.Field>
                                    <label>City</label>
                                    <Select
                                        placeholder='City' 
                                        options={countryOptions} 
                                    />
                                </Form.Field>
                                <Button primary type='submit' >Find Job</Button>
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
    )
}
