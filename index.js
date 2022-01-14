
const input1 = document.getElementById('input1');
const button1 = document.getElementById('button1');
const result1 = document.getElementById('result1');

const input2 = document.getElementById('input2');
const button2 = document.getElementById('button2');
const result2 = document.getElementById('result2');

const change = document.getElementById('change');
const text = document.getElementById('text');

const body = document.querySelector('body');

let isblack = false;
const h2 = document.querySelectorAll('h2')

const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')




button1.onclick = function(){
    let content = input1.value.trim();
    if (isNaN(content))
    {
        result1.innerText = `Input must be a number`        
    }
    else if (content == "")
    {
        result1.innerText = `The input field is empty`
    }
    if (!isNaN(content) && content != "")
    {
        
        result1.innerText = `${content}°C is ${((content * (9/5)) + 32).toFixed(2)}°F`;
    }


}




button2.onclick = function(){
    let content = input2.value.trim();

    if (isNaN(content))
    {
        result2.innerText = `Input must be a number`
        
    }
    else if (content == "")
    {
        result2.innerText = `The input field is empty`
    }
    if (!isNaN(content) && content != "")
    {
        
        result2.innerText = `${content}°F is ${((content - 32) * (5/9)).toFixed(2)}°C`;
    }


}


change.onclick = function ()
{
    if(!isblack)
    {
    body.style.backgroundColor = "rgb(44, 44, 44)";
    for(let i = 0; i < h2.length; i++)
    {
        h2[i].style.color = "white";
    }
    button1.style.color = 'white';
    button2.style.color = 'white';
    text.style.color ='white';

    input1.style.backgroundColor = 'rgb(44, 44, 44)'
    input1.style.color = "white"
    input2.style.backgroundColor = 'rgb(44, 44, 44)'
    input2.style.color = "white"
    
    result1.style.backgroundColor = " #9b9b9b";
    result2.style.backgroundColor = " #9b9b9b";
    result1.style.color = "white"
    result2.style.color = "white"

    
    text.innerText = 'Light mode'
    isblack = true;
    }
    else 
    {
    body.style.backgroundColor = "white";
    for(let i = 0; i < h2.length; i++)
    {
        h2[i].style.color = "black";
    }
    input1.style.backgroundColor = 'white'
    input1.style.color = "black"
    input2.style.backgroundColor = 'white'
    input2.style.color = "black"
    result1.style.backgroundColor = " #d8d8d8";
    result2.style.backgroundColor = " #d8d8d8";
    result1.style.color = "black"
    result2.style.color = "black"
    button1.style.color = 'black';
    button2.style.color = 'black';
    text.style.color = "black"
    text.innerText = 'Dark mode'
    isblack = false;
    }
}


