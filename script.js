let valueOfTop = document.getElementById("top");
const one = document.getElementById("one");
const two = document.getElementById("two");
const thre = document.getElementById("thre");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multyply = document.getElementById("multyply");
const devide = document.getElementById("devide");

const power = document.getElementById("pow");
const sqrt = document.getElementById("sqrt");

const equals = document.getElementById("equals");
const ce = document.getElementById("ce");
//
//
one.addEventListener("click", addone);
two.addEventListener("click", addtwo);
thre.addEventListener("click", addthre);
four.addEventListener("click", addfour);
five.addEventListener("click", addfive);
six.addEventListener("click", addsix);
seven.addEventListener("click", addseven);
eight.addEventListener("click", addeight);
nine.addEventListener("click", addnine);
zero.addEventListener("click", addzero);

plus.addEventListener("click", add);
minus.addEventListener("click", remove);
multyply.addEventListener("click", multiplynumber);
devide.addEventListener("click", devidenumber);

equals.addEventListener("click", equalsnumber);
ce.addEventListener("click", resetnumber);

power.addEventListener("click", powernumber);
sqrt.addEventListener("click", sqrtnumber);
//
//
function addone() {
  valueOfTop.innerText += "1";
}
function addtwo() {
  valueOfTop.innerText += "2";
}
function addthre() {
  valueOfTop.innerText += "3";
}
function addfour() {
  valueOfTop.innerText += "4";
}
function addfive() {
  valueOfTop.innerText += "5";
}
function addsix() {
  valueOfTop.innerText += "6";
}
function addseven() {
  valueOfTop.innerText += "7";
}
function addeight() {
  valueOfTop.innerText += "8";
}
function addnine() {
  valueOfTop.innerText += "9";
}
function addzero() {
  valueOfTop.innerText += "0";
}

function add() {
  valueOfTop.innerText += "+";
}
function remove() {
  valueOfTop.innerText += "-";
}
function multiplynumber() {
  valueOfTop.innerText += "*";
}
function devidenumber() {
  valueOfTop.innerText += "/";
}

function equalsnumber() {
  try {
    valueOfTop.innerText = eval(valueOfTop.innerText);
  } catch (err) {
    errors()
  }
}

function resetnumber() {
  valueOfTop.innerText = "";
}
function powernumber() {
  try {
    valueOfTop.innerText = Math.pow(eval(valueOfTop.innerText), 2);
  } catch (err) {
    errors()
  }
}
function sqrtnumber() {
  try {
    valueOfTop.innerText = Math.sqrt(eval(valueOfTop.innerText), 2);
    if (valueOfTop.innerText == "NaN") {
      valueOfTop.innerText = "";
      console.log("not a number");
    }
  } catch (err) {
    errors();
  }
}
function errors() {
  console.log("Bad syntax");
  valueOfTop.innerText = "";
  alert("syntax error\ntext box was reseted")
}
