let value = "";
let valueOfTop = document.getElementById("top");
function mainfunction(operation) {
  if (operation === "CE") {
    // usówanie watości kalkulatora
    console.log(operation);
    valueOfTop.innerText = "";
    console.log(valueOfTop.innerText);
    return 0;
  }
  if (operation === "=") {
    //wywoływanie funkcji równania
    console.log(operation);
    equals(valueOfTop.innerText);
    return 0;
  }
  if (operation === "pow") {
    //wywoływanie funkcji potengi
    console.log(operation);
    pow(valueOfTop.innerText);
    return 0;
  }
  if (operation === "sqrt") {
    //wywoływanie funkcji pierwiastkowania
    console.log(operation);
    sqrt(valueOfTop.innerText);
    return 0;
  }
  valueOfTop.innerText += operation; // doadawanie znaku do równania
  console.log(valueOfTop.innerText);
}
function equals(value) {
  //funkcja równania
  valueOfTop.innerText = eval(value);
  console.log(valueOfTop.innerText);
}
function pow(value) {
  //funkcja potengi
  valueOfTop.innerText = Math.pow(eval(value), 2);
  console.log(valueOfTop.innerText);
}
function sqrt(value) {
  //funkcja pierwiastkowania
  valueOfTop.innerText = Math.sqrt(eval(value), 2);
  console.log(valueOfTop.innerText);
}
