/**
 * 获取表格选中数据的ids
 */
const handleData = () => {
    let grid = view.ctx.controllersMap.get('grid')
    let selectedDataList = grid.state.selectedData
    let req = {ids:[]}
    selectedDataList.forEach(item => {
        req.ids.push(item.id)
    })

    uiLogic.req = req
}
handleData()