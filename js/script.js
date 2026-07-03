<<<<<<< HEAD
function sumCalculator(){
    const n1 = document.getElementById('num1').value ;
    const n2 = document.getElementById('num2').value ;
    const n3 = document.getElementById('num3').value ;

    const number1 = parseFloat(n1);
    const number2 = parseFloat(n2);
    const number3 = parseFloat(n3);

    const sum = number1 + number2 + number3;
    
    document.getElementById('res').textContent=sum;
}
function clearInput(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
    document.getElementById('num3').value="";
    document.getElementById('res').textContent="Answer is shown here..";

=======
function sumCalculator(){
    const n1 = document.getElementById('num1').value ;
    const n2 = document.getElementById('num2').value ;

    const number1 = parseFloat(n1);
    const number2 = parseFloat(n2);

    const sum = number1 + number2;
    
    document.getElementById('res').textContent=sum;
}
function clearInput(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
    document.getElementById('res').textContent="Answer is shown here..";

>>>>>>> 4eda5a4cff35f489c5059c38c3bc72437f318eff
}