/**
 * 刷新父页面
 */
view.closeView()
util.message.success('操作成功')
let grid = view.parentView.ctx.controllersMap.get('grid')
grid.refresh()
