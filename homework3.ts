// Решение 1: while
let current: number = 100;
let step: number = 1;

while (current > 0) {
  console.log(current);
  current -= step;
  step++;
}

console.log(0);

// Решение 2: for (все переменные и условия в одной строке) + break
for (let current = 100, step = 1; ; current -= step, step++) {
  if (current < 0) {
    break;
  }
  console.log(current);
}

console.log(0);
