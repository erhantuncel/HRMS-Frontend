import React, { useEffect, useState } from 'react'
import { FieldArray } from 'formik'
import { Grid, Segment, Header, Menu, Icon, FormGroup, Button } from 'semantic-ui-react'
import HrmsSelect from '../../../../utilities/customFormControls/HrmsSelect'
import HrmsTextInput from '../../../../utilities/customFormControls/HrmsTextInput'

export default function LanguageForm(props) {

    const {
        formField: {
            languageName,
            level
        }
    } = props

    const [levels, setLevels] = useState([])

    const handleSetLevel = (maxLevel) => {
        let levelArray = []
        for (let i = 1; i <= maxLevel; i++) {
            levelArray.push({
                key: i, value: i.toString(), text: i
            })
        }
        setLevels(levelArray)
    }

    useEffect(() => {
        handleSetLevel(5)
    }, [])

    return (
        <FieldArray name="languages">
            {({ form, ...arrayHelpers }) => {
                const handleAddLanguage = () => {
                    console.log("add language")
                    arrayHelpers.push({
                        name: "",
                        level: ""
                    })
                }

                const handleRemoveLanguage = (index) => {
                    console.log("remove language")
                    arrayHelpers.remove(index)
                }

                return (
                    <React.Fragment>
                        {
                            form.values.languages.map((language, index) => (
                                <Segment
                                    key={index} color="blue"
                                    style={{ marginTop: 0, padding: "0 2px 8px 2px" }}
                                >
                                    <Header as="h6" textAlign="right" color="blue" style={{ margin: 0, padding: 0 }}>
                                        <Menu size="small" text style={{ margin: 0, padding: 0 }}>
                                            <Menu.Item as="h4" style={{ fontWeight: "bold", color: "black" }}>
                                                Language {index + 1}
                                            </Menu.Item>
                                            <Menu.Item style={{ fontWeight: "bold" }}
                                                onClick={() => handleRemoveLanguage(index)} position="right">
                                                <Icon name='trash alternate' color="black" />
                                            </Menu.Item>
                                        </Menu>
                                    </Header>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column stretched verticalAlign="middle" width={16}>
                                                <FormGroup widths="equal" style={{ margin: 0 }}>
                                                    <HrmsTextInput
                                                        name={`languages[${index}].name`} id={languageName.name}
                                                        label={languageName.label} type="text"
                                                    />
                                                    <HrmsSelect
                                                        name={`languages[${index}].level`} id={level.name} label={level.label}
                                                        options={levels}
                                                        selectOnBlur={false} clearable
                                                    />
                                                </FormGroup>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Segment>
                            ))
                        }
                        
                        <Button type="button" color="blue"
                            onClick={handleAddLanguage}>
                            Add New Language
                        </Button>
                    </React.Fragment>
                )
            }}
        </FieldArray>
    )
}
