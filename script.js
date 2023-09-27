function decimalToBinary(num) {
  //Write you code here
  if (num == 0) {
    return "0"; 
  }

  let bin = "";
  while (num > 0) {
    let remainder = num % 2; 
    bin = remainder + bin;
    num = Math.floor(num / 2);
  }

  return bin;
}

window.decimalToBinary = decimalToBinary;
