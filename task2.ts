const startNum: number = 1;
const endNum: number = 20;

let result: string = "0";

//Написать программу, которая выводит сумму всех чисел от 1 до 20
for (let counter = startNum; counter <= endNum; counter++) {
  //result += counter; //result=result+counter
  result = String(Number(result) + counter);
}

console.log(result);
