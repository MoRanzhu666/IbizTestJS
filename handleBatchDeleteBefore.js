/**
 * 批量删除前确认
 */
let is_execute = await util.confirm.warning({
  title: "操作确认",
  desc: "您确认执行此操作吗？",
});
if (is_execute) is_execute = 1;
else is_execute = 0;

uiLogic.is_execute = is_execute;
