function checknum(){
    let num = parseInt(document.getElementById("num").value)
     if (num > 0) {
                document.getElementById("result1").value =
                  "given number "+ num +" is Positive";
              } 
              else {
                document.getElementById("result1").value =
                  "given number "+ num +" is Negative";
              }
}


function numsec(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    if(num1< num2){
         document.getElementById("result2").value =
                 "number"+ num1 + "is less than "+num2;
              } 
              else {
                document.getElementById("result2").value =
                 " number"+ num1 + "is greater than "+num2;
              }

}


function divisible(){
      let number = parseInt(document.getElementById("number").value)
     if (number%5==0) {
                document.getElementById("result3").value =
                  "given number "+ number +" is divided by 5";
              } 
              else {
                document.getElementById("result3").value =
                  "given number "+ number +" is not diviided by 5";
              }

}


function evenodd(){
     let number = parseInt(document.getElementById("number1").value)
     if (number%2==0) {
                document.getElementById("result4").value =
                  "given number "+ number +" is Even";
              } 
              else {
                document.getElementById("result4").value =
                  "given number "+ number +" is Odd";
              }

}


function bill(){
     let bill_amount = parseInt(document.getElementById("amount").value);

    if (bill > 5000) {
        let discount = bill_amount * 20 / 100;
        let finalBill = bill_amount - discount;

        document.getElementById("result5").value =
            "Bill: " + bill_amount + ", Discount: " + discount +
            ", Final Bill: " + finalBill;
    }
    else {
        document.getElementById("result5").value =
            "Bill: " + bill_amount + ", No Discount, Final Bill: " + bill_amount;
    }
}