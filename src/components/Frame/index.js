import React from "react";
import {Container} from 'rsuite'
import Sidebar from './Nav/LeftNav'
import Header from './Header'
import Content from './Content'
import './index.module.scss'

export default () => {
    return (
        <Container>
            <Header/>
            <Container className="main">
                <Sidebar/>
                <Content/>
            </Container>
        </Container>
    )
}
