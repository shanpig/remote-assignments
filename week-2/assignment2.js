function calculate(args){
  let result;
  if (args.op === "+"){
    result = args.n1+args.n2;
  }
  else if (args.op==="-"){
    result = args.n1-args.n2;
  }
  else {
    result = "Not supported";
  }
  return result;
}

class CalculateObject {
  constructor(n1, n2, op){
    this.n1 = n1;
    this.n2 = n2;
    this.op = op;
  }
}

// object literal
console.log(calculate({n1:22, n2:33, op:"+"}));

// class & constructor
console.log(calculate(new CalculateObject(2,13,"-")));

// variable assignment
let object = {};
object["n1"] = 100;
object["n2"] = 23;
object["op"] = "+";
console.log(calculate(object));