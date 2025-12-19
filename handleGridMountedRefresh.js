/**
 * 表格装载时自定义刷新数据
 */
const handleData = () => {
    let searchform = view.ctx.controllersMap.get('searchform')
    let grid = view.ctx.controllersMap.get('grid')

    searchform.state.data.approval_status = 'SENDED'
    grid.refresh()
}
handleData()