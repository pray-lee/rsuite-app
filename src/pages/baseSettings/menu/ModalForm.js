import React, {useState} from 'react'
import {Modal, Form, ControlLabel, FormControl, FormGroup, Button, Schema, Placeholder, Loader} from 'rsuite'
import useForm from '../../../customHook/useForm'

// 校验
const {StringType} = Schema.Types
const model = Schema.Model({})


export default props => {
    const [formValue, setFormValue] = useForm({
        name: '',
        email: '',
        password: '',
        textarea: ''
    })

    const onSubmit = () => {
        props.close()
    }
    const onClose = () => {
        props.close()
    }

    return (
        <Modal show={props.show} size="sm" overflow>
            <>
                <Modal.Header>
                    <Modal.Title>New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        fluid
                        model={model}
                        onChange={formValue => setFormValue(formValue)}
                        formValue={formValue}
                    >
                        <FormGroup>
                            <ControlLabel>Username</ControlLabel>
                            <FormControl name="name"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl name="email" type="email"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl name="password" type="password"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Textarea</ControlLabel>
                            <FormControl
                                rows={5}
                                name="textarea"
                                componentClass="textarea"
                            />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onSubmit} appearance="primary">
                        Confirm
                    </Button>
                    <Button onClick={onClose} appearance="subtle">
                        Cancel
                    </Button>
                </Modal.Footer>
            </>
        </Modal>
    )
}
