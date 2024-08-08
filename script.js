const textBox=document.getElementById('textbox');
const tofah=document.getElementById('toFah');
const tocels=document.getElementById('toCels');
const result=document.getElementById('result');
let temp;
function convert(){
    if(tofah.checked){
        temp=Number(textbox.value);
        temp=temp*9/5+32;
        result.textContent=temp.toFixed(1)+"F"


    }
    else if(tocels.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"C"

    }
    else{
        result.textContent="Select a Unit"
    }
}
