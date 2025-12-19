/**
 * 禁用表单输入框
 */
const handleData = (params) => {
  let form = view.ctx.controllersMap.get("form");

  console.log("form", form);
  params.forEach((element) => {
    //   form.details[element].state.readonly = true; // 让框框消失
    form.details[element].state.disabled = true; // 禁止输入，让框框变灰
  });
};
const main = () => {
  // 需要禁用表单的属性
  let operationAttrubute = [
    "application_no",
    "settlement_money",
    "application_date",
    "counterparty_account",
    "counterparty_bank",
    "exchange_rate",
    "target_settlement_money",
  ];
  handleData(operationAttrubute);
};
setTimeout(() => {
  main();
}, 100);
