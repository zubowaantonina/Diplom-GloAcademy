const calculator = () => {
  const calcBlock = document.getElementById("calc");
  const area = document.getElementById("calc-input");
  const total = document.getElementById("calc-total");
  const type = document.getElementById("calc-type");
  const material = document.getElementById("calc-type-material");

  const countCalc = () => {
    const calcTypeValue = +type.options[type.selectedIndex].value;
    const calcMaterialValue = +material.options[material.selectedIndex].value;
    const calcAreaValue = +area.value;
    let totalValue;

    totalValue = +calcTypeValue * +calcMaterialValue * +calcAreaValue;
    total.textContent = totalValue;
  };

  calcBlock.addEventListener("input", (e) => {
    if (
      (e.target === type || e.target === material || e.target === area) &&
      type.selectedIndex &&
      material.selectedIndex &&
      area.value
    ) {
      countCalc();
    } else if (
      !type.selectedIndex ||
      !material.selectedIndex ||
      area.value === ""
    ) {
      total.textContent = 0;
    }
  });
};
export default calculator;
