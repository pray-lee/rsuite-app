import React, {useState} from "react";
import {
    ButtonToolbar,
    Button,
    Icon,
} from "rsuite";
import {
    addIcon,
    editIcon,
} from '../../../components/Icons'
import Table from '../../../components/Table'
import Modal from './ModalForm'

const columns = [
    {
        field: 'menuName',
        fieldName: '菜单名称',
        resizable: true
    },
    {
        field: 'menuUrl',
        fieldName: '菜单地址',
        resizable: true
    },
    {
        field: 'menuOrder',
        fieldName: '菜单顺序',
        resizable: true
    },
    {
        resizable: true,
        field: 'action',
        fieldName: '操作',
        fixed: 'right',
        width: 240,
        action: rowData => {
            const handleDelete = () => {
                console.log(rowData)
            }
            const handleControlPermission = () => {
            }
            const handleDataRule = () => {
            }
            return (
                <ButtonToolbar>
                    <Button color="red" size="xs" onClick={handleDelete}>删除</Button>
                    <Button color="green" size="xs" onClick={handleControlPermission}>页面控件权限</Button>
                    <Button color="violet" size="xs" onClick={handleDataRule}>数据规则</Button>
                </ButtonToolbar>
            )
        }
    }
]

const rowData = [
    {
        menuName: '菜单1',
        menuOrder: '1',
        menuUrl: '/a',
        children: [
            {
                menuName: '菜单1-1',
                menuOrder: '1-1',
                menuUrl: '/a/aa',

            }
        ]
    },
    {
        menuName: '菜单2',
        menuOrder: '2',
        menuUrl: '/b',
    },
]

export default () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="content">
                <div className="main-top">
                    <ButtonToolbar>
                        <Button size="sm" onClick={() => setShow(true)}>
                            <Icon icon={addIcon} size="lg"/>菜单录入
                        </Button>
                        <Button size="sm">
                            <Icon icon={editIcon} size="lg"/>菜单编辑
                        </Button>
                    </ButtonToolbar>
                </div>
                <Table
                    isTree={true}
                    columns={columns}
                    rowData={rowData}
                ></Table>
            </div>
            <Modal show={show} close={() => setShow(false)}/>
        </>
    )
}
