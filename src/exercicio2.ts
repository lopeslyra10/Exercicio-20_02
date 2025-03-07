interface Multiplicacao {
    (num1: number, num2: number): number;
  }
  
  const multiplicar: Multiplicacao = (a, b) => a * b;
  
  console.log(multiplicar(5, 3)); // 15
  console.log(multiplicar(7, 2)); // 14
  