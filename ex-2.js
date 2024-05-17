//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function atLeastFive(array, operation) {
  let count = 0;
  for (let n = 0; n < array.length; n++) {
    if (operation(array[n])) {
      count++;
    }
  }
  return count >= 5;
}

function poitnMoreThan70(score) {
  return score > 70;
}

let scoreRoom1Result = atLeastFive(studentScoresRoom1, poitnMoreThan70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, poitnMoreThan70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, poitnMoreThan70);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);

if (scoreRoom1Result === true) {
  console.log("นักเรียนห้องที่ 1 ผ่านเกณฑ์ ✅");
}

if (scoreRoom2Result !== true) {
  console.log("นักเรียนห้องที่ 2 ไม่ผ่านเกณฑ์ ❌");
}

if (scoreRoom3Result !== true) {
  console.log("นักเรียนห้องที่ 3 ไม่ผ่านเกณฑ์ ❌");
}
