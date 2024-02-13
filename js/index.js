var calcDisplay = ""
 
function btnClick(e){
    if(e == "1" || e == "2" || e == "3" || e == "4" || e =="/" || e == "*"){
        if(e == "AC"){
            calcDisplay = ""
        } else{
        console.log(calcDisplay);
        calcDisplay = calcDisplay + e;
        }
        document.getElementById("display").value = calcDisplay;
    } else{
        console.log("Input harus berupa angka dan simbol")
    }
    
}

document.getElementById("display").addEventListener('input', function displayChange(){
    console.log(this.value)
    let e = this.value
    if(e == "1" || e == "2" || e == "3" || e == "4" || e =="/" || e == "*"){

    } else{
        console.log("error")
    }
})

