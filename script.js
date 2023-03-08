let sqrt_temp = 0;
let pow_temp = 0;
let state = "";
let percent_temp = 0;
let screanNum = document.getElementById("top");

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
const zerodbl = document.getElementById("zerodbl");
const zerotrp = document.getElementById("zerotrp");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multyply = document.getElementById("multyply");
const devide = document.getElementById("devide");

const power = document.getElementById("pow");
const sqrt = document.getElementById("sqrt");

const equals = document.getElementById("equals");
const ce = document.getElementById("ce");
const percent = document.getElementById("percent");
const dot = document.getElementById("dot");
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
zerodbl.addEventListener("click", addzerodbl);
zerotrp.addEventListener("click", addzerotrp);

plus.addEventListener("click", add);
minus.addEventListener("click", remove);
multyply.addEventListener("click", multiplynumber);
devide.addEventListener("click", devidenumber);

equals.addEventListener("click", equalsnumber);
ce.addEventListener("click", resetnumber);

power.addEventListener("click", powernumber);
sqrt.addEventListener("click", sqrtnumber);
percent.addEventListener("click", percentnum);
dot.addEventListener("click", adddot);
//
//
function addone() {
  screanNum.innerText += "1";
}
function addtwo() {
  screanNum.innerText += "2";
}
function addthre() {
  screanNum.innerText += "3";
}
function addfour() {
  screanNum.innerText += "4";
}
function addfive() {
  screanNum.innerText += "5";
}
function addsix() {
  screanNum.innerText += "6";
}
function addseven() {
  screanNum.innerText += "7";
}
function addeight() {
  screanNum.innerText += "8";
}
function addnine() {
  screanNum.innerText += "9";
}
function addzero() {
  screanNum.innerText += "0";
}
function addzerodbl() {
  screanNum.innerText += "00";
}
function addzerotrp() {
  screanNum.innerText += "000";
}

function add() {
  screanNum.innerText += "+";
}
function remove() {
  screanNum.innerText += "-";
}
function multiplynumber() {
  screanNum.innerText += "*";
}
function devidenumber() {
  screanNum.innerText += "/";
}
function adddot() {
  screanNum.innerText += ".";
}
function equalsnumber() {
  try {
    if (state == "") {
      screanNum.innerText = eval(screanNum.innerText);
      notnum();
      infinyty();
      return 0;
    }
    switch (state) {
      case "percent":
        calcpercent();
        break;
      case "pow":
        calcpow();
        break;
    }
  } catch (err) {
    errors();
  }
}

function resetnumber() {
  screanNum.innerText = "";
}

function calcpercent() {
  try {
    screanNum.innerText = (percent_temp * eval(screanNum.innerText)) / 100;
    state = "";
    notnum();
    infinyty();
  } catch (err) {
    errors();
  }
}
function percentnum() {
  try {
    percent_temp = eval(screanNum.innerText);
    screanNum.innerText = "";
    state = "percent";
    notnum();
    infinyty();
  } catch (err) {
    errors();
  }
}
function calcpow() {
  try {
    screanNum.innerText = Math.pow(eval(pow_temp), eval(screanNum.innerText));
    state = "";
    notnum();
    infinyty();
  } catch (err) {
    state = "";
    errors();
  }
}
function powernumber() {
  try {
    pow_temp = eval(screanNum.innerText);
    screanNum.innerText = "";
    state = "pow";
    notnum();
    infinyty();
  } catch (err) {
    state = "";
    errors();
  }
}
function sqrtnumber() {
  try {
    screanNum.innerText = Math.sqrt(eval(screanNum.innerText));
    notnum();
    infinyty();
  } catch (err) {
    errors();
  }
}

function errors() {
  console.log("Bad syntax");
  screanNum.innerText = "";
  alert("syntax error\ntext box was reseted");
}
function notnum() {
  if (screanNum.innerText == "NaN") {
    console.log("not a number");
    screanNum.innerText = "";
    alert("Not a number\ntext box was reseted");
  }
}
function infinyty() {
  if (screanNum.innerText == "Infinity") {
    console.log("infinity");
    screanNum.innerText = "";
    alert("number was infinity\ntext box was reseted");
  }
}
