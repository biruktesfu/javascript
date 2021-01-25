var num1;
var num2;
var oper;
var numbers;
var added;
arrayOfNumbers = [];


oper = prompt("1.add  2.multiply  3.divide  4.subtract q.quit")


if(oper == "2" || oper == "1"){

    function mult(){
        if (oper == "2"){
            numbers = prompt("how many numbers do you want to multiply: ");

            for (let i = 0; i < parseInt(numbers); i++){
                arrayOfNumbers[i] = prompt("number " + (i + 1));

            }

            console.log(multiply());
        }
    }
    
    function add(){
        if (oper == "1"){
            numbers = prompt("how many numbers do you want to add: ");

            for (let i = 0; i < parseInt(numbers); i++){
                arrayOfNumbers[i] = prompt("number " + (i + 1));

            }
            console.log(sum());
        }
    }
    mult();
    add();

    
}
else if (oper == "4" || oper == "3") {

    num1 = prompt("enter the first number: ");
    num2 = prompt("enter the second number: ");
    numbers = [];

    num1 = Number(num1);
    num2 = Number(num2);


    function div(){
        if (oper == "3"){
            if (num2 == 0){
                console.log("denominator must be diffrent from zero");
            }else{
                console.log(num1 / num2);
            }
        }
    }    


    function subs(){
        if (oper == "4"){
            console.log(num1 - num2);
        }
    }

    div();
    subs();


}else if(oper == "q"){
    console.log("program terminated");

}else{
    console.log("Enter the correct operator!!")
}

function multiply(){
    multiplied = 1;
    for(i=0; i < arrayOfNumbers.length;i++){
        multiplied = multiplied  * Number(arrayOfNumbers[i])

    }
    return multiplied;
}

function sum(){
    added = 0;
    for(i=0; i < arrayOfNumbers.length;i++){
        added = added + Number(arrayOfNumbers[i]);

    }
    return added;
}


