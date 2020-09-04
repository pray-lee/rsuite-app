import React from 'react'
import {Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar, Schema} from 'rsuite'
import styled from './index.module.scss'

// 校验
const {StringType} = Schema.Types
const model = Schema.Model({
    name: StringType().isRequired('请填写用户名'),
    password: StringType().isRequired('请填写密码'),
    imageCode: StringType().isRequired('请填写图片验证码')
})

export default () => {
    return (
        <Form fluid className={styled.container} model={model}>
            <FormGroup>
                <ControlLabel>用户名</ControlLabel>
                <FormControl name="name"/>
            </FormGroup>
            <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl name="password" type="password"/>
            </FormGroup>
            <FormGroup>
                <ControlLabel>图片验证码</ControlLabel>
                <FormControl name="imageCode"/>
            </FormGroup>
            <FormGroup>
                <ButtonToolbar>
                    <Button appearance="primary" block type="submit">
                        登录
                    </Button>
                </ButtonToolbar>
            </FormGroup>
        </Form>
    )
}
