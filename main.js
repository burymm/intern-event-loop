// can be changed

function func1() {
  console.log(1); // can't change output value
}

function func2() {
  console.log(2);  // can't change output value
}

// deny to change
func1();
func2();

// should write in console
// 2
// 1