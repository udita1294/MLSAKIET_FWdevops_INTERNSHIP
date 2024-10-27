function clear_all() {
    document.getElementById("display").value = "";
  }
  
  function delete_last(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  function appendNumber(number) {
    let display = document.getElementById("display");
    display.value += number;
  }
  
  function appendOperator(operator) {
    let display = document.getElementById("display");
    let lastChar = display.value.slice(-1);
  
    if ("+-*/%".includes(lastChar)) {
      display.value = display.value.slice(0, -1) + operator;
    } else {
      display.value += operator;
    }
  }
  
  function calculate() {
    let display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  }
  