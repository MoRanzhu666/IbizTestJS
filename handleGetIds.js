/**
 * 获取表格选中数据的ids
 */
const handleData = () => {
    let grid = view.ctx.controllersMap.get('grid')
    let selectedDataList = grid.state.selectedData
    let data = {ids:[]}
    selectedDataList.forEach(item => {
        data.ids.push(item.id)
    })

    uiLogic.data = data
}
handleData()