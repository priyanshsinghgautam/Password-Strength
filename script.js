let password = document.getElementById('password');
let p = document.getElementById('p');
password.addEventListener('input',() =>{
    let v = password.value.length;
    if(v<6){
        p.innerHTML = 'password is weak';
        p.style.color = "red";
    }
    else if(v>=6 && v<10){
        p.innerHTML = 'password is moderate';
        p.style.color = "yellow";
    }
    else{
        p.innerHTML = 'password is strong';
        p.style.color = "green";
    }
})