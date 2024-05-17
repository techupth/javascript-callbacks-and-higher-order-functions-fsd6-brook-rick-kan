// Exercise #1: For Each Function

function operation(number, plus) {
  return number + plus;
}

function operationArray(callbackOperation, arr, num) {
  const result = [];
  for (let n = 0; n < arr.length; n++) {
    result.push(callbackOperation(arr[n], num));
  }
  return result;
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
let newEmployeeSalaries = [];
const numberToPlus = 5000;
newEmployeeSalaries = operationArray(operation, employeeSalaries, numberToPlus);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
