function refresh() {
  let userConfirm = confirm("Are you sure!\nYou want to reload the game?");

  if (userConfirm) {
    window.location.reload() ;
  }
}

let boxes = document.querySelectorAll(".box");
let mark = "X";
let count ="0";
let winCondtions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [2,5,8],
  [1,4,7],
  [0,3,6],
[0,4,8],
[2,4,6]
];
boxes.forEach(box => {
box.addEventListener("click",() => {
console.log(box.id);
box.innerText = mark;
changeMark();
box.disabled = true;
check();
 checkdraw();
}
)
});
function changeMark(){
  if ( mark == "X"){
    mark = "O";
  }
  else {
    mark = "X";
  }
}

function check (){
  for (let winCondition of winCondtions) {
  let pos1val = boxes[winCondition[0]].innerText;
  let pos2val = boxes[winCondition[1]].innerText;
  let pos3val = boxes[winCondition[2]].innerText;
if (pos1val !="" && pos2val !="" && pos3val !=""){
  if (pos1val == pos2val && pos2val == pos3val){
    console.log("Winner ")
  winnerAnnouncement(pos1val);
   count++;
  }
}
  }
      console.log(count);
}


function winnerAnnouncement( won){
  document.getElementById("announcement").innerText="Congratulations !\n  "+won+ " won";
  for( var i=0;i<9;i++)
    boxes[i].disabled = true;
}

function checkdraw()
{
  count++
   if (count> 8) {
     document.getElementById("announcement").innerText = "The Game is draw. ";
   }
}

// let mark ="X";
//  let btn1 = document.getElementById("1");
//  let btn2 = document.getElementById("2");
//  let btn3 = document.getElementById("3");
//  let btn4 = document.getElementById("4");
//  let btn5 = document.getElementById("5");
//  let btn6 = document.getElementById("6");
//  let btn7 = document.getElementById("7");
//  let btn8 = document.getElementById("8");
//  let btn9 = document.getElementById("9");

// function one(){

//  btn1.innerText = mark;
// btn1.disabled = true;
// if (btn1.innerText == mark) {
//   if (
//     (btn1.innerText === btn2.innerText && btn2.innerText === btn3.innerText) ||
//     (btn1.innerText === btn5.innerText && btn5.innerText === btn9.innerText) ||
//     (btn1.innerText === btn4.innerText && btn4.innerText === btn7.innerText)
//   ) {
//   alert(mark + " won");
//  }
// }
// if (mark=="X")
// {

//   mark= "O"
// }
// else{
//   mark = "X";
// }
// console.log(mark);

// // checking if they won

// }
// function two() {
//   btn2.innerText = mark;
//   btn2.disabled = true;
//   // checking if they won
//   if (btn2.innerText == mark) {
//     if (
//       (btn1.innerText === btn2.innerText && btn2.innerText === btn3.innerText) ||
//       (btn2.innerText === btn5.innerText && btn5.innerText === btn8.innerText)
//     ) {
//   alert(mark + " won");   }
//   }
//   if (mark == "X") {
//     mark = "O";
//   } else {
//     mark = "X";
//   }
//   console.log(mark);
// }

// function three() {
//   btn3.innerText = mark;
//   btn3.disabled = true;
//   // checking if they won
//   if (btn2.innerText == mark) {
//     if (
//       (btn1.innerText == btn2.innerText && btn2.innerText == btn3.innerText) ||
//       (btn3.innerText == btn6.innerText && btn6.innerText == btn9.innerText) ||
//       (btn3.innerText == btn5.innerText && btn5.innerText == btn7.innerText)
//     ) {
//   alert(mark + " won");   }
//   }
//   if (mark == "X") {
//     mark = "O";
//   } else {
//     mark = "X";
//   }
//   console.log(mark);
// }

// function four() {
//   btn4.innerText = mark;
//   btn4.disabled = true;
//   // checking if they won
//   if (btn4.innerText == mark) {
//     if (
//       (btn4.innerText == btn5.innerText && btn5.innerText == btn6.innerText) ||
//       (btn1.innerText == btn4.innerText && btn4.innerText == btn7.innerText)
//     ) {
//   alert(mark + " won");   }
//   }
//   if (mark == "X") {
//     mark = "O";
//   } else {
//     mark = "X";
//   }
//   console.log(mark);
// }
// function five() {
//   btn5.innerText = mark;
//   btn5.disabled = true;
//   // checking if they won
//   if (btn5.innerText == mark) {
//     if (
//       (btn4.innerText == btn5.innerText && btn5.innerText == btn6.innerText) ||
//       (btn1.innerText == btn5.innerText && btn5.innerText == btn9.innerText) ||
//       (btn2.innerText == btn5.innerText && btn5.innerText == btn8.innerText) ||
//       (btn3.innerText == btn5.innerText && btn5.innerText == btn7.innerText)
//     ) {
//  alert(mark + " won");   }
//   }
//   if (mark == "X") {
//     mark = "O";
//   } else {
//     mark = "X";
//   }
//   console.log(mark);
// }

// function six() {
//   btn6.innerText = mark;
//   btn6.disabled = true;
//   // checking if they won
//   if (btn6.innerText == mark) {
//     if (
//       (btn3.innerText == btn6.innerText && btn6.innerText == btn9.innerText) ||
//       (btn4.innerText == btn5.innerText && btn5.innerText == btn6.innerText)
//     ) {
//   alert(mark + " won");    }
//   }
//   if (mark == "X") {
//     mark = "O";
//   } else {
//     mark = "X";
//   }
//   console.log(mark);
// }

// function seven() {
//   btn7.innerText = mark;
//   btn7.disabled = true;
//   // checking if they won
//   if (btn7.innerText == mark) {
//     if (
//       (btn1.innerText == btn4.innerText && btn4.innerText == btn7.innerText) ||
//       (btn7.innerText == btn8.innerText && btn8.innerText == btn9.innerText) ||
//       (btn3.innerText == btn5.innerText && btn5.innerText == btn7.innerText)
//     ) {
//   alert(mark + " won");    }
//   }
//   if (mark == "X") {
//     mark = "O";
//   } else {
//     mark = "X";
//   }
//   console.log(mark);
// }

// function eight() {

//   btn8.innerText = mark;
//   btn8.disabled = true;
// if (btn8.innerText == mark){
//    if (

//     (btn7.innerText == btn8.innerText && btn8.innerText== btn9.innerText )||

//     (btn2.innerText == btn5.innerText &&  btn5.innerText== btn8.innerText)
//   ) {
//  alert(mark + " won");  }
// }

//   if (mark == "X") {
//     mark = "O";
//   } else {
//     mark = "X";
//   }
//   console.log(mark);

//   // checking if they won

// }

// function nine() {

//   btn9.innerText = mark;
//   btn9.disabled = true;
//   if (btn9.innerText == mark ){
//     // checking if they won
//     if (
//       (btn7.innerText == btn8.innerText && btn8.innerText == btn9.innerText) ||
//       (btn1.innerText == btn5.innerText && btn5.innerText == btn9.innerText) ||
//       (btn3.innerText == btn6.innerText && btn6.innerText == btn9.innerText)
//     ) {
//        alert(mark + " won");
//     }
//   }
//   if (mark == "X") {
//     mark = "O";
//   } else {
//     mark = "X";
//   }
//   console.log(mark);

// }

