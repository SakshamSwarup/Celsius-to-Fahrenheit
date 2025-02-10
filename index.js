function myTemp(tempvalue){
    var celcius = document.getElementById("celcius").value;
    var fahrenheit = (celcius * 9/5) + 32;
    var btnconvert = document.querySelector(".button");

    btnconvert.addEventListener("click", function(){
        document.getElementById("Fahrenheit").value = fahrenheit;  
    })
    
}