import React from 'react'
import {Table, Icon} from 'rsuite'
import './table.module.scss'

const {Column, HeaderCell, Cell, Pagination} = Table;

class CommonTable extends React.Component {
    static defaultProps = {
        loading:false,
        isTree:false,
        virtualized: true,
        cellBordered: true,
        columns: [{
            id: '1',
            field: 'corp',
            fieldName: '企业名称',
            resizable: true,
        }],
        onExpandChange: (isOpen, rowData) => {
            console.log(isOpen, rowData)
        },
        onSortColumn: (sortColumn, sortType) => {
            console.log(sortColumn, sortType)
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            data: this.props.rowData.concat(),
            tableHeight: 600
        }
    }
    componentDidMount() {
        this.setTableHeight()
    }

    // 表格高度
    setTableHeight() {
        const tableContainerHeight = document.querySelector('.table-container').offsetHeight
        this.setState(state =>({
            tableHeight: tableContainerHeight - 10
        }))
    }

    render() {
        return (
            <section className="table-container">
                <Table
                    height={this.state.tableHeight}
                    loading={this.props.loading}
                    defaultExpandAllRows
                    virtualized={this.props.virtualized}
                    isTree={this.props.isTree}
                    rowKey="menuUrl"
                    data={this.state.data}
                    cellBordered={this.props.cellBordered}
                    onExpandChange={this.props.onExpandChange}
                    onSortColumn={this.props.onSortColumn}
                >
                    {
                        this.props.columns.map(item => (
                            <Column
                                key={item.field}
                                resizable={item.resizable ? true : false}
                                sortable={item.sortable ? true : false}
                                fixed={item.fixed ? item.fixed : false}
                                width={item.width ? item.width : 120}
                            >
                                <HeaderCell>{item.fieldName}</HeaderCell>
                                {
                                    item.fieldName === '操作' ? (
                                        <Cell>
                                            {item.action}
                                        </Cell>
                                    ) : (
                                        <Cell dataKey={item.field}/>
                                    )
                                }
                            </Column>
                        ))
                    }
                </Table>
            </section>
        )
    }
}

export default CommonTable
