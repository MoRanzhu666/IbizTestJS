/**
 * 表格操作后刷新数据
 */
util.message.success('操作成功')
let grid = view.ctx.controllersMap.get('grid')
grid.refresh()
