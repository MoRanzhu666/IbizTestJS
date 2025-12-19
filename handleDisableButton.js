/**
 * 禁用按钮 button
 */
function handleDisableButton(){
  // 获取按钮列表
    let buttonList = view.ctx.controllersMap.get('toolbar1')
    console.log(buttonList, 'buttlist')
    buttonList.state.buttonsState.deuiaction1.disabled = !(view.ctx.controllersMap.get('grid2').state.selectedData.length>0)
}
handleDisableButton()
