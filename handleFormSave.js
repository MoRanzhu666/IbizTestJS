/**
 * @description: 处理表单保存
 * @param {type}
 * @return: 
 */
const handleData = () => {
    let form = view.ctx.controllersMap.get('form')
    let grid = view.parentView.ctx.controllersMap.get('grid')
    let data = {}
    data = form.state.data

    // data.id = grid.state.selectedData[0].id

    uiLogic.data = data
}
handleData()