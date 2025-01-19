function calculator(a,b,operator){
    switch(operator){
        case '+':
            console.log("Sum=",a+b)
            break;
        case '-':
            console.log("Difference=",a-b)
            break;
        case '*':
            console.log("Product:",a*b)
            break;
        case '/':
            console.log("Division=",a/b)
            break;
        default:
            console.log("Invalid Input")
    }
}
calculator(1,2,'+')
calculator(3,2,'-')
calculator(4,5,'*')
calculator(4,2,'/')