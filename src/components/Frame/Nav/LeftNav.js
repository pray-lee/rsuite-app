import React, {useState} from "react";
import {
    Sidebar,
    Sidenav,
    Nav,
    Dropdown,
    Icon,
    Button,
} from 'rsuite'
import styled from './LeftNav.module.scss'

export default props => {
    const [expanded, setExpanded] = useState(true)
    const [activeKey, setActiveKey] = useState("1")
    const handleToggle = () => {
        setExpanded(!expanded)
    }
    // 设置激活状态
    const handleSelect = (eventKey, event) => {
        setActiveKey(eventKey)
    }
    return (
        <Sidebar
            width={expanded ? 220 : 56}
            collapsible
        >
            <Sidenav
                className="leftNavContainer"
                expanded={expanded}
                defaultOpenKeys={['3', '4']}
                activeKey={activeKey}
                onSelect={handleSelect}
            >
                <Sidenav.Body className="leftNavBody">
                    <Nav className="leftNavScroll">
                        <Nav.Item eventKey="1" icon={<Icon icon="dashboard"/>}>
                            Dashboard
                        </Nav.Item>
                        <Nav.Item eventKey="2" icon={<Icon icon="group"/>}>
                            User Group
                        </Nav.Item>
                        <Dropdown
                            placement="rightStart"
                            eventKey="3"
                            title="Advanced"
                            icon={<Icon icon="magic"/>}
                        >
                            <Dropdown.Item eventKey="3-1">Geo</Dropdown.Item>
                            <Dropdown.Item eventKey="3-2">Devices</Dropdown.Item>
                            <Dropdown.Item eventKey="3-3">Loyalty</Dropdown.Item>
                            <Dropdown.Item eventKey="3-4">Visit Depth</Dropdown.Item>
                        </Dropdown>
                        <Dropdown
                            placement="rightStart"
                            eventKey="4"
                            title="Settings"
                            icon={<Icon icon="gear-circle"/>}
                        >
                            <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
                            <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
                            <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
                            <Dropdown.Menu eventKey="4-5" title="Custom Action">
                                <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                                <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Sidenav.Body>
                <Button block onClick={handleToggle} className={styled.toggle}>
                    <Icon icon={expanded ? "angle-left" : "angle-right"}/>
                </Button>
            </Sidenav>
        </Sidebar>
    )
}
