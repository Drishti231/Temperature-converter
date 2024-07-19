var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");

let button = document.querySelector("button");

cel.addEventListener("input", function(){
    let c = parseFloat(cel.value);
    let f = (c * 9/5) + 32;
    let k = c + 273.15;
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fah.value = f;
    if(!Number.isInteger(k)){
        k = k.toFixed(4);
    }
    kel.value = k;
});

fah.addEventListener("input", function(){
    let f = parseFloat(fah.value);
    let c = (f - 32) * 5/9;
    let k = (f - 32) * 5/9 + 273.15;
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    cel.value = c;
    if(!Number.isInteger(k)){
        k = k.toFixed(4);
    }
    kel.value = k;
});

kel.addEventListener("input", function(){
    let k = parseFloat(kel.value);
    let c = k - 273.15;
    let f = (k - 273.15) * 9/5 + 32;
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
    cel.value = c;
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fah.value = f;
});

button.addEventListener('click', ()=>{
    cel.value = "";
    fah.value = "";
    kel.value = "";
});