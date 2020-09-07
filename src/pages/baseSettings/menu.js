import React, {useCallback} from "react";
import {ButtonToolbar, Button, Icon} from "rsuite";
import {
    addIcon,
    editIcon
} from '../../components/Icons'
import {useFetch} from "../../components/Frame/customHook/useFetch";
import {test1, test2} from '../../api/test'

export default () => {
    const loading = useFetch(useCallback(() => test1(), []))
    console.log(loading, '///////////')
    const loading1 = useFetch(useCallback(() => test2(), []))
    console.log(loading1, '.....')
    return (
        <div className="content">
            <ButtonToolbar>
                <Button size="sm" loading={!!loading}>
                    <Icon icon={addIcon} size="lg"/>菜单录入
                </Button>
                <Button size="sm" loading={!!loading1}>
                    <Icon icon={editIcon} size="lg"/>菜单编辑
                </Button>
            </ButtonToolbar>
        </div>
    )
}
