const form =document.querySelector('form');
const lb = document.querySelector('#lb');

console.log(lb);

// lb.addEventListener("click",(e)=>{
//     e.preventDefault()
//     let username
//      = form.uyo.value;

//     if(username === 'admin' && form.password.value === 'pass'){
//         window.location.href = "./index2.html";
//         console.log(username);

       
//     } else {
//         alert('nope');
        
//     }
     
// })

lb.addEventListener('click',login);

function login(e){
    e.preventDefault();
    console.log(form.password.value)  ;
    let username
    = form.uyo.value;

    if(username === 'admin' && form.password.value === 'pass'){
      console.log(form.password.value);
      window.location.href= './index2.html';
    } else {
      alert('wrong');
    }
  
  }

