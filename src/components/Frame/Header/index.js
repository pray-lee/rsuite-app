import React from "react";
import {Header} from 'rsuite'
import styled from './index.module.scss'
import logo from '../../../assets/images/logo.png'

export default () => {
    return (
        <Header className="header">
            <div className={styled['header-left']}>
                <img className={styled['header-logo']} src={logo} alt=""/>
                <span>财咖智能ERP</span>
            </div>
        </Header>
    )
}
