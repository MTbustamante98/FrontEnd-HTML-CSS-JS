export const calculate = (operator: string, a: number, b: number) => {
  let result;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = b === 0 ? "Erro" : a / b;
      break;
    case "x":
      result = a * b;
      break;
  }

  return result;
};
