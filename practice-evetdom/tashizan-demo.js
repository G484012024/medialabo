//let i=document.querySelector('input[name="left"]');
//let f=document.querySelector('input[name="right"]');
k=document.querySelector('button#calc');
k.addEventListener('click',greeting);

function greeting(){
    i=document.querySelector('input[name="left"]');
    left=i.value;
    f=document.querySelector('input[name="right"]');
    right=f.value;
    let n = Number(left);
    let m = Number(right);
    let kotae=n+m;
    span=document.querySelector('span#answer');
    span.textContent=kotae;   
    
}

